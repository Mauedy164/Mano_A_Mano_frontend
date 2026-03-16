// Navegación de pestañas
const menuItems = document.querySelectorAll(".perfil-menu-item");
const tabs = document.querySelectorAll(".perfil-tab");

function activarTab(nombre) {
  menuItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.tab === nombre);
  });

  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.id === `tab-${nombre}`);
  });
}

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const tab = item.dataset.tab;
    if (!tab) return;
    activarTab(tab);
  });
});

// Botones internos (ej. "Ver todos" en resumen)
document.querySelectorAll("[data-tab-trigger]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tabTrigger;
    if (!tab) return;
    activarTab(tab);
  });
});

// Toggle contraseña
const passwordInput = document.getElementById("perfil-password");
const togglePasswordBtn = document.getElementById("btn-toggle-password");

if (passwordInput && togglePasswordBtn) {
  togglePasswordBtn.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
  });
}

// Filtro simple de pedidos en front
const filtroEstado = document.getElementById("filtro-estado");
const filtroBusqueda = document.getElementById("filtro-busqueda");
const tbodyPedidos = document.getElementById("tbody-pedidos");

if (filtroEstado && filtroBusqueda && tbodyPedidos) {
  const filasOriginales = Array.from(tbodyPedidos.querySelectorAll("tr"));

  function aplicarFiltros() {
    const estado = filtroEstado.value;
    const busqueda = filtroBusqueda.value.trim().toLowerCase();

    tbodyPedidos.innerHTML = "";

    filasOriginales.forEach((fila) => {
      const idPedido = fila.cells[0]?.textContent.toLowerCase() || "";
      const estadoTexto = fila.cells[2]?.textContent.toLowerCase() || "";

      const coincideEstado =
        estado === "all" ||
        (estado === "delivered" && estadoTexto.includes("entregado")) ||
        (estado === "shipping" && estadoTexto.includes("camino")) ||
        (estado === "processing" && estadoTexto.includes("preparación"));

      const coincideBusqueda =
        !busqueda || idPedido.includes(busqueda);

      if (coincideEstado && coincideBusqueda) {
        tbodyPedidos.appendChild(fila);
      }
    });
  }

  filtroEstado.addEventListener("change", aplicarFiltros);
  filtroBusqueda.addEventListener("input", aplicarFiltros);
}

// Logout (placeholder)
const btnLogout = document.getElementById("btn-logout");
if (btnLogout) {
  btnLogout.addEventListener("click", () => {
    // Aquí conectarías tu lógica real de logout
    alert("Sesión cerrada (ejemplo).");
    // window.location.href = "/logout";
  });
}
