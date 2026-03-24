document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formCrearCuenta");

  if (form) {
    form.addEventListener("submit", async function (e) { // Agregamos 'async'
      e.preventDefault();

      if (!validarFormularioCompleto()) {
        return;
      }

      const userData = {
        nombre: document.getElementById("nombreInput").value,
        correo: document.getElementById("correo").value,
        telefono: document.getElementById("telefono").value,
        password: document.getElementById("password").value,
        fechaRegistro: new Date().toISOString()
      };

      try {
        // Enviamos los datos a la API
        const response = await fetch("http://34.201.41.216/ecommerce/usuarios/", {
          method: "POST", // Método para CREAR datos
          headers: {
            "Content-Type": "application/json" // Enviamos un JSON
          },
          body: JSON.stringify(userData) 
        });

        // Verificamos si la API respondió correctamente
        if (response.ok) {
          const data = await response.json(); // Respuesta del servidor
          
          Swal.fire({
            icon: "success",
            title: "¡Cuenta creada!",
            text: "Usuario registrado exitosamente.",
          });

          form.reset();
          form.querySelectorAll(".is-valid, .is-invalid").forEach((input) => {
            input.classList.remove("is-valid", "is-invalid");
          });

        } else {
          throw new Error("Error en el servidor");
        }

      } catch (error) {
        // Si el servidor falla o no hay internet
        Swal.fire({
          icon: "error",
          title: "Error de conexión",
          text: "No se pudo guardar la información. ¡Intenta de nuevo!",
        });
        console.error("Detalle del error:", error);
      }
    });
  }
});