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

  // Construir el string de colores (separados por coma)
  let coloresString = null;
  if (coloresActivos) {
    const colorPrincipal = document.getElementById("colorPrincipal").value;
    const colorSecundario = document.getElementById("colorSecundario").value;
    coloresString = colorSecundario ? `${colorPrincipal},${colorSecundario}` : colorPrincipal;
  }

  // Construir el string de tags (separados por coma)
  const tagsArray = document
    .getElementById("formularioTagsProducto")
    .value.split(" ")
    .map((tag) => tag.replace("#", "").trim())
    .filter((tag) => tag !== "");
  const tagsString = tagsArray.join(",");

  // Obtener marca si aplica
  const marcaAplica = !document.getElementById("marcaCheck").checked;
  const marca = marcaAplica ? document.getElementById("marcaTexto").value.trim() : null;

  // IMPORTANTE: Obtener el ID del vendedor
  const vendedorId = localStorage.getItem("usuarioId") || sessionStorage.getItem("usuarioId") || 1;

  // Producto en el formato EXACTO que espera tu backend
  const producto = {
    vendedor: {
      id: parseInt(vendedorId),
    },
    nombre: document.getElementById("formularioNombreProducto").value.trim(),
    descripcion: document.getElementById("formularioDescripcionProducto").value.trim(),
    precio: parseFloat(document.getElementById("formularioPrecioProducto").value) || 0,
    cantidadDisponible: parseInt(document.getElementById("formularioCantidadProducto").value) || 0,

    imagenUrl: null,

    marca: marca,
    peso: pesoActivo ? parseFloat(document.getElementById("pesoNum").value) || null : null,
    volumen: volumenActivo ? parseFloat(document.getElementById("volumenNum").value) || null : null,
    largo: dimensionesActivas ? parseFloat(document.getElementById("largo").value) || null : null,
    ancho: dimensionesActivas ? parseFloat(document.getElementById("ancho").value) || null : null,
    alto: dimensionesActivas ? parseFloat(document.getElementById("alto").value) || null : null,

    tags: tagsString,
    colores: coloresString,
    talla: tamanoSeleccionado ? tamanoSeleccionado.value : null,

    activo: true,
  };

  console.log("Objeto listo:", producto);
  console.log(JSON.stringify(producto, null, 2));

  return producto;
};

// Función para enviar el producto al backend Spring Boot
const enviarProducto = async (producto) => {
  try {
    console.log("Enviando producto:", JSON.stringify(producto, null, 2));

    const response = await fetch("http://34.201.41.216/ecommerce/productos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });

    console.log("Response status:", response.status);
    console.log("Response headers:", [...response.headers.entries()]);

    // Obtener el texto de la respuesta
    const responseText = await response.text();
    console.log("Response text:", responseText);

    // Si la respuesta está vacía
    if (!responseText || responseText.trim() === "") {
      if (response.ok || response.status === 201) {
        // 201 es Created - común en APIs REST
        return {
          success: true,
          data: { mensaje: "Producto registrado exitosamente" },
        };
      } else if (response.status === 409 || response.status === 400) {
        // 409 Conflict o 400 Bad Request - probablemente producto duplicado
        return {
          success: false,
          error: "Ya existe un producto con ese nombre o datos inválidos",
        };
      } else {
        throw new Error(`Error ${response.status}: Respuesta vacía del servidor`);
      }
    }

    // Intentar parsear como JSON
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Error al parsear JSON:", parseError);
      console.error("Texto recibido:", responseText);

      // Si el servidor devolvió HTML de error
      if (responseText.includes("<html>") || responseText.includes("<!DOCTYPE")) {
        throw new Error(
          "El servidor devolvió una página de error. Revisa la consola para más detalles."
        );
      }

      throw new Error(`Respuesta no válida del servidor`);
    }

    if (!response.ok && response.status !== 201) {
      throw new Error(data.message || `Error ${response.status}`);
    }

    // Si el backend devuelve null, significa que ya existe un producto con ese nombre
    if (data === null) {
      return {
        success: false,
        error: "Ya existe un producto con ese nombre",
      };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error completo:", error);

    // Errores de red
    if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
      return {
        success: false,
        error: "No se pudo conectar con el servidor. Verifica tu conexión a internet.",
      };
    }

    return { success: false, error: error.message };
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnRegistrar");

  if (btn) {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      console.log("CLICK detectado");

      const producto = registrarProducto();

      // Validación básica antes de enviar
      if (!producto.nombre || producto.nombre === "") {
        Swal.fire({
          icon: "warning",
          title: "Campo requerido",
          text: "El nombre del producto es obligatorio",
        });
        return;
      }

      if (!producto.precio || producto.precio <= 0) {
        Swal.fire({
          icon: "warning",
          title: "Precio inválido",
          text: "El precio debe ser mayor a 0",
        });
        return;
      }

      if (!producto.cantidadDisponible || producto.cantidadDisponible <= 0) {
        Swal.fire({
          icon: "warning",
          title: "Cantidad inválida",
          text: "La cantidad debe ser mayor a 0",
        });
        return;
      }

      // Mostrar loading
      Swal.fire({
        title: "Registrando producto...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      // Enviar al servidor Spring Boot
      const resultado = await enviarProducto(producto);

      Swal.close();

      if (resultado.success) {
        console.log("Producto guardado:", resultado.data);

        await Swal.fire({
          icon: "success",
          title: "Producto registrado",
          text: resultado.data.nombre
            ? `${resultado.data.nombre} se ha registrado correctamente`
            : "Producto registrado correctamente",
        });

        window.location.href = "./comprador.html";
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al registrar",
          text: resultado.error,
        });
      }
    });
  }
});
