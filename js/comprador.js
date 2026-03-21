/*cargar nombre del usuario desde el storage*/

function cargarDatosUsuarioPerfil() {
  const usuarioGuardado = localStorage.getItem("usuarioActivo");

  if (!usuarioGuardado) return;

  const usuario = JSON.parse(usuarioGuardado);

  const nombre = document.getElementById("perfil-nombre");
  const email = document.getElementById("perfil-email");
  const avatar = document.querySelector(".perfil-avatar");

  if (nombre) {
    nombre.textContent = `¡Hola, ${usuario.nombre.split(" ")[0]}!`;
  }

  if (email) {
    email.textContent = usuario.correo;
  }

  if (avatar) {
    const iniciales = usuario.nombre
      .split(" ")
      .map(n => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();

    avatar.textContent = iniciales;
  }
}



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
/*const btnLogout = document.getElementById("btn-logout");
if (btnLogout) {
  btnLogout.addEventListener("click", () => {
    // Aquí conectarías tu lógica real de logout
    alert("Sesión cerrada (ejemplo).");
    // window.location.href = "/logout";
  });
}*/

document.addEventListener("click", (e) => {
  if (e.target.closest('[data-tab="logout"]')) {
    localStorage.removeItem("usuarioActivo");
    window.location.href = "../pages/iniciarSesion.html";
  }
});

//pestaña de prodcutso del vendedor
function obtenerProductos() {
  return JSON.parse(localStorage.getItem("productos")) || [];
}

function guardarProductos(productos) {
  localStorage.setItem("productos", JSON.stringify(productos));
}

function renderizarProductos() {
  const tbody = document.getElementById("tbody-productos");
  if (!tbody) return;

  const productos = obtenerProductos();
  tbody.innerHTML = "";

  if (productos.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center;">
          No tienes productos registrados
        </td>
      </tr>
    `;
    return;
  }

  productos.forEach((p, index) => {
    const fila = `
      <tr>
        <td>${p.nombre}</td>
        <td>$${p.precio}</td>

        <td>
          ${
            p.oferta
              ? `<input type="number" value="${p.precioOferta || ""}" 
                 onchange="actualizarPrecioOferta(${index}, this.value)">`
              : "-"
          }
        </td>

        <td>
          <label class="switch">
            <input type="checkbox" ${p.stock ? "checked" : ""}
              onchange="toggleStock(${index})">
            <span class="slider"></span>
          </label>
        </td>

        <td>
          <label class="switch">
            <input type="checkbox" ${p.oferta ? "checked" : ""}
              onchange="toggleOferta(${index})">
            <span class="slider"></span>
          </label>
        </td>

        <td>
          <button class="btn-delete" onclick="eliminarProducto(${index})">
            🗑️
          </button>
        </td>
      </tr>
    `;

    tbody.innerHTML += fila;
  });
}

function toggleStock(index) {
  const productos = obtenerProductos();
  productos[index].stock = !productos[index].stock;
  guardarProductos(productos);
  renderizarProductos();
}

function toggleOferta(index) {
  const productos = obtenerProductos();
  productos[index].oferta = !productos[index].oferta;

  if (!productos[index].oferta) {
    productos[index].precioOferta = null;
  }

  guardarProductos(productos);
  renderizarProductos();
}

function actualizarPrecioOferta(index, valor) {
  const productos = obtenerProductos();
  productos[index].precioOferta = valor;
  guardarProductos(productos);
}

function eliminarProducto(index) {
  const productos = obtenerProductos();
  productos.splice(index, 1);
  guardarProductos(productos);
  renderizarProductos();
  actualizarContadorProductos();
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarProductos();
  actualizarContadorProductos()
  cargarDatosUsuarioPerfil();
});

function actualizarContadorProductos() {
  const productos = JSON.parse(localStorage.getItem("productos")) || [];

  const total = productos.length;

  const contador = document.getElementById("resumen-total-productos");

  if (contador) {
    contador.textContent = total;
  }
}