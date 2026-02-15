const API_BASE_URL = "http://localhost:3000/api"; // <- IMPORTANTE: /api

function setStatus(el, message, type = "info") {
  el.hidden = false;
  el.textContent = message;
  el.dataset.type = type;
}

function getFormData(form) {
  const fd = new FormData(form);

  return {
    nombre: String(fd.get("nombre") || "").trim(),
    email: String(fd.get("email") || "").trim(),
    servicio: String(fd.get("servicio") || "").trim(),
    cell: String(fd.get("cell") || "").trim(),
    plazo: String(fd.get("plazo") || "").trim(),
    mensaje: String(fd.get("mensaje") || "").trim(),
  };
}

function validateLead(data) {
  if (!data.nombre) return "El nombre es obligatorio.";
  if (!data.email) return "El email es obligatorio.";
  if (!data.servicio) return "Selecciona un servicio.";
  if (!data.cell || !/^\d{10}$/.test(data.cell)) return "El celular debe tener 10 dígitos.";
  if (!data.plazo) return "Selecciona un plazo.";
  if (!data.mensaje) return "El mensaje es obligatorio.";
  return null;
}

async function sendLeadToApi(lead) {
  const res = await fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API ${res.status}: ${text}`);
  }

  return res.json();
}

function initForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form || !status) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = getFormData(form);
    const errorMsg = validateLead(data);

    if (errorMsg) {
      setStatus(status, `❌ ${errorMsg}`, "error");
      return;
    }

    setStatus(status, "Enviando solicitud…", "info");

    try {
      const created = await sendLeadToApi(data);

      // Backend respondió -> ya quedó guardado en Postgres
      setStatus(
        status,
        `✅ Listo. Tu solicitud fue registrada con ID #${created.clienteid}.`,
        "success"
      );

      form.reset();
    } catch (err) {
      // Si quieres eliminar localStorage COMPLETAMENTE, cambia este bloque por solo error.
      setStatus(
        status,
        "❌ No se pudo enviar al servidor. Verifica que el backend esté encendido y que la URL sea correcta.",
        "error"
      );
      console.error(err);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initForm();
});

