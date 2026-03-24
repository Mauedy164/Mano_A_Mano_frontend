document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("iniciaSesion_btn");

  if (loginBtn) {
    loginBtn.addEventListener("click", async function (e) {
      e.preventDefault();

      if (!validarFormularioLogin()) return;

      const loginData = {
        correo: document.getElementById("correo").value.trim(),
        password: document.getElementById("password").value
      };

      try {
        // Al endpoint de LOGIN (no al de usuarios)
        const response = await fetch("http://34.201.41.216/ecommerce/login/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(loginData)
        });

        if (response.ok) {
          // Objeto con el Token (JWT)
          const data = await response.json(); 
          
          // Token para futuras peticiones protegidas
          localStorage.setItem("token", data.accessToken);
          
          // Guardar el correo para saber quién inició sesión
          sessionStorage.setItem("usuarioActivo", JSON.stringify({ correo: loginData.correo }));

          Swal.fire({
            icon: "success",
            title: "¡Sesión iniciada!",
            text: "Cargando tu perfil...",
            timer: 1500,
            showConfirmButton: false
          }).then(() => {
            window.location.href = "../pages/comprador.html";
          });

        } else {
          Swal.fire({
            icon: "error",
            title: "Credenciales inválidas",
            text: "El correo o la contraseña no coinciden."
          });
        }

      } catch (error) {
        console.error("Error en el login:", error);
        Swal.fire({
          icon: "error",
          title: "Error de servidor",
          text: "No se pudo conectar con el servicio de autenticación."
        });
      }
    });
  }
});