document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formCrearCuenta");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!validarFormularioCompleto()) {
        return;
      }

      const userData = {
        id: Date.now(),
        nombre: document.getElementById("nombreInput").value,
        correo: document.getElementById("correo").value,
        telefono: document.getElementById("telefono").value,
        password: document.getElementById("password").value,
        fechaRegistro: new Date().toISOString(),
      };

      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));

      if (typeof Swal !== "undefined") {
        Swal.fire({
          icon: "success",
          title: "¡Cuenta creada!",
          text: "Te has registrado exitosamente",
        });
      } else {
        alert("¡Cuenta creada exitosamente!");
      }

      form.reset();

      form.querySelectorAll(".is-valid, .is-invalid").forEach((input) => {
        input.classList.remove("is-valid", "is-invalid");
      });
    });
  }
});
