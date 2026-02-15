const API_BASE_URL = "https://server-atalaya.onrender.com/api";


const $ = (sel) => document.querySelector(sel);

function setStatus(message) {
  const el = $("#crm-status");
  if (el) el.textContent = message;
}

function escapeHtml(str) {
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(value) {
  if (!value) return "";
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? "" : d.toLocaleString();
}

async function fetchFromApi() {
  const res = await fetch(`${API_BASE_URL}/users`, { cache: "no-store" });
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json();
}

function applySearch(rows, term) {
  const t = term.trim().toLowerCase();
  if (!t) return rows;

  return rows.filter((r) => {
    const hay = `${r.nombre} ${r.email} ${r.servicio} ${r.plazo} ${r.mensaje}`.toLowerCase();
    return hay.includes(t);
  });
}

function renderTable(rows) {
  const tbody = $("#crm-body");
  if (!tbody) return;

  tbody.innerHTML = rows
    .map((r) => {
      return `
        <tr>
          <td>${escapeHtml(r.clienteid)}</td>
          <td>${escapeHtml(r.nombre)}</td>
          <td>${escapeHtml(r.email)}</td>
          <td>${escapeHtml(r.cell)}</td>
          <td>${escapeHtml(r.servicio)}</td>
          <td>${escapeHtml(r.plazo)}</td>
          <td>${escapeHtml(r.mensaje)}</td>
          <td>DB</td>
          <td>${escapeHtml(formatDate(r.created_at))}</td>
        </tr>
      `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", async () => {
  let allRows = [];

  async function load() {
    setStatus("Cargando solicitudes…");
    try {
      allRows = await fetchFromApi();
      setStatus(`Listo. Total: ${allRows.length}`);
      renderTable(applySearch(allRows, $("#search")?.value || ""));
    } catch (err) {
      console.error(err);
      setStatus("❌ No se pudo cargar desde el servidor. Revisa que el backend esté corriendo.");
      renderTable([]);
    }
  }

  $("#refresh")?.addEventListener("click", load);

  $("#search")?.addEventListener("input", (e) => {
    renderTable(applySearch(allRows, e.target.value));
  });

  await load();
});
