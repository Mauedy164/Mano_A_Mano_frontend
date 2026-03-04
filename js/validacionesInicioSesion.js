// Extracción de elementos del DOM

const correo = document.getElementById("correo");
const correo_container = document.getElementById("correo_container");
const password = document.getElementById("password");
const password_container = document.getElementById("password_container");

const iniciaSesion_btn = document.getElementById("iniciaSesion_btn");

//variables de validación

let isValidCorreo = false;
let isValidPassword = false;

function validaCorreo() {
  correo.classList.remove("is-valid", "is-invalid");

  const errorPrevioCorreo = correo_container.querySelector(".invalid-feedback");

  if (errorPrevioCorreo) {
    errorPrevioCorreo.remove();
  }

  if (correo.value === "") {
    correo.classList.add("is-invalid");
    let errorCorreo = document.createElement("div");
    errorCorreo.textContent = "Debes de ingresar un correo";
    errorCorreo.classList.add("invalid-feedback");

    correo_container.appendChild(errorCorreo);
    isValidCorreo = false;
  } else {
    correo.classList.add("is-valid");
    isValidCorreo = true;
  }
}

function validaPassword() {
  password.classList.remove("is-valid", "is-invalid");

  const errorPrevioPassword = password_container.querySelector(".invalid-feedback");

  if (errorPrevioPassword) {
    errorPrevioPassword.remove();
  }

  if (password.value === "") {
    password.classList.add("is-invalid");
    let errorPassword = document.createElement("div");
    errorPassword.textContent = "Debes de ingresar una contraseña";
    errorPassword.classList.add("invalid-feedback");

    password_container.appendChild(errorPassword);
    isValidPassword = false;
  } else {
    password.classList.add("is-valid");
    isValidPassword = true;
  }
}

function validarFormularioLogin() {
  validaCorreo();
  validaPassword();

  if (!isValidCorreo || !isValidPassword) {
    Swal.fire({
      icon: "error",
      title: "Campos incompletos",
      text: "Por favor completa todos los campos",
    });
    return false;
  }

  return true;
}
