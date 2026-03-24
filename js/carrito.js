// Cargar carrito desdelocalStorage
let carrito = JSON.parse(localStorage.getItem("ZapatosSAM")) || [];

//Guardar carrito
function guardarCarrito() {
  localStorage.setItem("ZapatosSAM", JSON.stringify(carrito));
  actualizarCarrito();
} //  function guardarCarrito

// Agregar producto al carrito
function agregarAlCarrito(id, nombre, precio, imagen) {
  
  //Buscar si el producto ya existe en el carrito;
  const memoria = carrito.find((item) => item.id === id);

  if (memoria) {
    //Si existe, aumentar cantidad en el carrito
    memoria.cantidad++;
  } else {
    carrito.push({
      id,
      nombre,
      precio,
      imagen,
      cantidad: 1,
    }); // nuevoProducto
  } // if-else
  guardarCarrito();
} // function agregarAlCarrito

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
  let cantidad = 0; //  Cantidad productos

  if (carrito_productos) {
    carrito_productos.innerHTML = "";

    carrito.forEach((item) => {
      total += item.precio * item.cantidad;
      cantidad += item.cantidad;

      carrito_productos.innerHTML += `
      <div class="card mb-2">
        <div class="row g-0">
          <div class="col-4">
            <img src="${item.imagen}" class="img-fluid rounded-start">
          </div>
          <div class="col-8">
            <div class="card-body">
              <h6>${item.nombre}</h6>
              <p>$${item.precio}</p>
              <p>Cantidad: ${item.cantidad}</p>
              <p><strong>Subtotal: $${item.precio * item.cantidad}</strong></p>
            </div>
          </div>
        </div>
      </div>
    `;
    });

    if (carrito.length > 0) {
      carrito_productos.innerHTML += `
    <button class="btn btn-dark w-100 mt-2" onclick="limpiarCarrito()">
      Limpiar carrito
    </button>
  `;
    }
  }

  if (total_carrito) {
    total_carrito.textContent = total;
  }

  if (cuenta_carrito) {
    cuenta_carrito.textContent = cantidad;
  }
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("agregar-btn")) {
    const btn = e.target;

    const id = parseInt(btn.dataset.id);
    const nombre = btn.dataset.nombre;
    const precio = parseFloat(btn.dataset.precio);
    const imagen = btn.dataset.imagen;

    agregarAlCarrito(id, nombre, precio, imagen);
  }
});

// Ejecutar al cargar
document.addEventListener("DOMContentLoaded", () => {
  actualizarCarrito();
});
