// Cargar carrito desdelocalStorage
let carrito = JSON.parse(localStorage.getItem("ZapatosSAM")) || [];

//Guardar carrito
function guardarCarrito() {
  localStorage.setItem("ZapatosSAM", JSON.stringify(carrito));

  actualizarCarrito();
}//  function guardarCarrito

// Agregar producto al carrito
function agregarAlCarrito(id, nombre, precio, imagen) {
  //Buscar si el producto ya existe en el carrito;
  const memoria = carrito.find(item => item.id === id);
  console.log(memoria);

  if (memoria) {
    //Si existe, aumentar cantidad en el carrito
    memoria.cantidad++;
  } else {
    carrito.push ({
      id: id,
      nombre: nombre,
      precio: precio,
      imagen: imagen,
      cantidad: 1,
    }); // nuevoProducto
  } // else

  guardarCarrito();

} // function agregarAlCarrito

// Eliminarcarrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !==id);
    guardarCarrito();
}// function eliminarDelCarrito

//Limpiar carrito
function limpiarCarrito(){
    carrito[];
    guardarCarrito();
}//function limpiarCarrito

// Actualizar
function actualizarCarrito() {
    const carrito_productos  = document.getElementById("carrito_productos");
    const totalCarrito = document.getElementById("TotalCarrito");
    const cuenta  =  document.getElementById("cuenta-carrito");


    carrito_productos.innerHTML = "";

    let  total  =  0; // Total dinero
    let cantidad =  0; //  Cantidad productos

    carrito.forEach (item => {

        total += item.precio * item.cantidad;
        cantidad += item.cantidad;
    });

  totalCarrito.textContent = total;

  cuenta.textContent = count;
}
