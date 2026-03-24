const API_PRODUCTOS = 'http://localhost:8080/ecommerce/productos/';


// Cargar carrito desdelocalStorage
let carrito = JSON.parse(localStorage.getItem("ZapatosSAM")) || [];

//Guardar carrito
function guardarCarrito() {
  localStorage.setItem("ZapatosSAM", JSON.stringify(carrito));
  actualizarCarrito();
} //  function guardarCarrito

// Agregar producto al carrito
function agregarAlCarrito(id) {
  
  //Buscar si el producto ya existe en el carrito;
  const memoria = carrito.find((item) => item.id === id);

  if (memoria) {
    //Si existe, aumentar cantidad en el carrito
    memoria.cantidad++;
  } else {
    carrito.push({
    id: parseInt(id),
    cantidad: 1,
    }); // nuevoProducto             
  } // if-else
  guardarCarrito();
} // function agregarAlCarrito               ****Actualización por API****

// Eliminarcarrito
function eliminarDelCarrito(id) {
  carrito = carrito.filter((item) => item.id !== id);
  guardarCarrito();
} // function eliminarDelCarrito

//Limpiar carrito
function limpiarCarrito() {
  carrito = [];
  guardarCarrito();
} //function limpiarCarrito

// Actualizar
function actualizarCarrito() {
  const carrito_productos = document.getElementById("carrito_productos");
  const total_carrito = document.getElementById("total_carrito");
  const cuenta_carrito = document.getElementById("cuenta_carrito");

  let total = 0; // Total dinero
  let cantidad = 0;
  let html = "";

  if (carrito_productos) {
    carrito_productos.innerHTML = '<div class="text-center p-3"><div class="spinner-border" role="status"></div> Cargando...</div>';

    carrito.forEach((item) => {
      const producto = obtenerProducto(item.id);
      if (producto) {
        const subtotal = producto.precio * item.cantidad;
        total += subtotal;
        cantidad += item.cantidad;
        html += `
  <div class="card mb-2">
    <div class="row g-0 align-items-center">
      <div class="col-4 d-flex align-items-center justify-content-center">
        <img src="${producto.imagen}" class="img-fluid rounded-start" alt="${producto.nombre}" style="height: 120px; object-fit: cover;">
      </div>
      <div class="col-8">
        <div class="card-body p-3">
          <h6 class="card-title mb-1">${producto.nombre}</h6>
          <p class="small text-muted mb-2">${producto.descripcion?.substring(0, 80) || ''}...</p>
          <p class="mb-1 fw-bold fs-5 text-primary">$${producto.precio.toLocaleString('es-MX')}</p>
          <p class="small mb-2">
            Cantidad: <span class="badge bg-success">${item.cantidad}</span>
          </p>
          <p class="fw-bold text-success mb-3">Subtotal: $${subtotal.toLocaleString('es-MX')}</p>
          <button class="btn btn-sm btn-outline-danger w-100" onclick="eliminarDelCarrito(${item.id})">
            <i class="bi bi-trash me-1"></i>Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
`;

      } else {
        html += `<div class="alert alert-warning mb-2">Producto ID ${item.id} no disponible</div>`;
      };
    }); // ****carrito.forEach ACTUALIZADA POR API****

    if (html) {
      carrito_productos.innerHTML = html;
    if (carrito.length > 0) {
      carrito_productos.innerHTML += `
          <button class="btn btn-dark w-100 mt-3" onclick="limpiarCarrito()">
            <i class="bi bi-trash3-fill me-2"></i>Limpiar carrito (${carrito.length} items)
          </button>
        `;
    } // ****actualizado por API****
    } else {
      carrito_productos.innerHTML = '<p class="text-center text-muted py-5 m-0">Tu carrito está vacío</p>';
    }
  }// ****actualizado por API****

  if (total_carrito) {
    total_carrito.textContent = total.toFixed(2);
  }
  
  if (cuenta_carrito) {
    cuenta_carrito.textContent = cantidad;
  }
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("agregar-btn")) {
    const id = parseInt(e.target.dataset.id);
    agregarAlCarrito(id);
  }
});// ****actualizado por API****

/*========================
| CARGA TODO DESDE LA API |
=========================*/


let productosCache = [];

async function cargarProductosCache(){
  try { // Try catch es por si falla, se cargan los productos del localstorage
    const respuesta = await fetch(API_PRODUCTOS);
    if (!respuesta.ok) throw new Error ("Error de API");
    productosCache = await respuesta.json();
  } catch (error) {
    console.log("Error cargando productos")
  } // Try-Catch
}; // CargarProductosCache

function obtenerProducto(id) {
  const prod = productosCache.find(p => p.id === id);
  if (prod) {
    return {
      id: prod.id,
      nombre: prod.nombre,
      precio: prod.precio,
      imagen: prod.imagenUrl
    };
  }
  return null;
}//obtenerProductos

// Ejecutar al cargar
document.addEventListener("DOMContentLoaded", async () => {
  await cargarProductosCache();
  actualizarCarrito();
});// ****actualizado por API****
