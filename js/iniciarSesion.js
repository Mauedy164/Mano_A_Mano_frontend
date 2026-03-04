document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("iniciaSesion_btn");

  if (loginBtn) {
    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();

      if (!validarFormularioLogin()) {
        return;
      }

      const correoIngresado = document.getElementById("correo").value.trim();
      const passwordIngresado = document.getElementById("password").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];

      const usuario = users.find((user) => user.correo === correoIngresado);

      if (!usuario || usuario.password !== passwordIngresado) {
        document.getElementById("correo").classList.remove("is-valid", "is-invalid");
        document.getElementById("password").classList.remove("is-valid", "is-invalid");
        Swal.fire({
          icon: "error",
          title: "Error de inicio de sesión",
          text: "Correo y/o contraseña incorrectos",
        });
        return;
      }

      sessionStorage.setItem("usuarioActivo", JSON.stringify(usuario));

      Swal.fire({
        icon: "success",
        title: "¡Bienvenido!",
        text: `Hola ${usuario.nombre}`,
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        window.location.href = "../pages/comprador.html";
      });
    });
  }
});
