/*  
======================================
| Extraccion de datos del formulario de registrarProducto en formato JSON |
======================================
*/

const registrarProducto = () => {
  const coloresActivos = !document.getElementById("coloresSin").checked;
  const pesoActivo = document.getElementById("pesoSi").checked;
  const volumenActivo = document.getElementById("volumenSi").checked;
  const dimensionesActivas = document.getElementById("dimensionesSi").checked;

  const tamanoSeleccionado = document.querySelector('input[name="tamano"]:checked');

  const producto = {
    nombre: document.getElementById("formularioNombreProducto").value.trim(),
    descripcion: document.getElementById("formularioDescripcionProducto").value.trim(),
    precio: parseFloat(document.getElementById("formularioPrecioProducto").value) || 0,
    cantidad: parseInt(document.getElementById("formularioCantidadProducto").value) || 0,

    tags: document
      .getElementById("formularioTagsProducto")
      .value.split(" ")
      .map((tag) => tag.replace("#", "").trim())
      .filter((tag) => tag !== ""),

    detalles: {
      colores: {
        aplica: coloresActivos,
        principal: coloresActivos ? document.getElementById("colorPrincipal").value : null,
        secundario: coloresActivos ? document.getElementById("colorSecundario").value : null,
      },

      marca: {
        aplica: !document.getElementById("marcaCheck").checked,
        valor: document.getElementById("marcaCheck").checked
          ? null
          : document.getElementById("marcaTexto").value.trim(),
      },

      tamano: tamanoSeleccionado ? tamanoSeleccionado.value : null,

      modelo: {
        aplica: !document.getElementById("modeloSin").checked,
        valor: document.getElementById("modeloSin").checked
          ? null
          : document.getElementById("modeloTexto").value.trim(),
      },

      dimensiones: {
        aplica: dimensionesActivas,
        largo: dimensionesActivas ? parseFloat(document.getElementById("largo").value) || 0 : null,
        ancho: dimensionesActivas ? parseFloat(document.getElementById("ancho").value) || 0 : null,
        alto: dimensionesActivas ? parseFloat(document.getElementById("alto").value) || 0 : null,
      },

      peso: {
        aplica: pesoActivo,
        valor: pesoActivo ? parseFloat(document.getElementById("pesoNum").value) || 0 : null,
      },

      volumen: {
        aplica: volumenActivo,
        valor: volumenActivo ? parseFloat(document.getElementById("volumenNum").value) || 0 : null,
      },
    },
  };

  console.log("Objeto listo:", producto);
  console.log(JSON.stringify(producto, null, 2));

  return producto;
};

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnRegistrar");

  if (btn) {
    btn.addEventListener("click", () => {
      console.log("CLICK detectado");
      
  const producto = registrarProducto();

  const productos = JSON.parse(localStorage.getItem("productos")) || [];

  const productoCompleto = {
    ...producto,
    id: Date.now(),
    stock: true,
    oferta: false,
    precioOferta: null
  };

  productos.push(productoCompleto);

  localStorage.setItem("productos", JSON.stringify(productos));

  console.log("Guardado:", productos);

  Swal.fire({
    icon: "success",
    title: "Producto registrado"
  });

  setTimeout(() => {
    window.location.href = "./comprador.html";
  }, 1000);
    });
  }
});

