// 1) Formulario
function initForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    status.hidden = false;
    status.textContent = "✅ Gracias, tu solicitud fue registrada.";

    form.reset();
  });
}

// 2) Menu mobile (pendiente)
function initMenu() {
  // luego lo conectamos
}

// 3) Testimonios (JSON simulando API)
async function loadTestimonials() {
  const list = document.getElementById("testimonials-list");
  const status = document.getElementById("testimonials-status");

  if (!list || !status) return;

  status.textContent = "Cargando testimonios…";

  try {
    const res = await fetch("./testimonials.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    if (!Array.isArray(data)) throw new Error("Formato inválido");

    list.innerHTML = "";

    if (data.length === 0) {
      status.textContent = "Aún no hay testimonios.";
      return;
    }

    for (const t of data) {
      const card = document.createElement("article");
      card.className = "card";

      const name = document.createElement("h3");
      name.textContent = t?.name ?? "Cliente";

      const role = document.createElement("p");
      role.className = "hint";
      role.textContent = t?.role ?? "";

      const msg = document.createElement("p");
      msg.textContent = t?.message ?? "";

      card.append(name, role, msg);
      list.appendChild(card);
    }

    status.textContent = `Testimonios cargados: ${data.length}.`;
  } catch (err) {
    status.textContent = "No se pudieron cargar los testimonios. Intenta más tarde.";
    console.error(err);
  }
}

// 4) Inicialización
document.addEventListener("DOMContentLoaded", () => {
  initForm();
  initMenu();
  loadTestimonials();
});
