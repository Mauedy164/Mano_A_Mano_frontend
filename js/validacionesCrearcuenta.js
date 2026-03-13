/*
==============================
| Validacion Nombre Completo  |
==============================
*/

function iniciarValidacionNombre() {
  const nombreInput = document.getElementById("nombreInput");

  // Mínimo 2 palabras (en este caso el nombre y apellido), solo letras y espacios
  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(\s+[A-Za-zÁÉÍÓÚáéíóúÑñ]+)+$/;

  nombreInput.addEventListener("input", function () {
    const nombre = nombreInput.value.trim();

    if (nombre === "") {
      nombreInput.classList.remove("is-valid", "is-invalid");
      return;
    }

    if (regexNombre.test(nombre)) {
      nombreInput.classList.add("is-valid");
      nombreInput.classList.remove("is-invalid");
    } else {
      nombreInput.classList.add("is-invalid");
      nombreInput.classList.remove("is-valid");
    }
  });
}

document.addEventListener("DOMContentLoaded", iniciarValidacionNombre);

/*
==============================
|     Validacion Email        |
==============================
*/

function iniciarValidacionEmail() {
  const emailInput = document.getElementById("correo");

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // Crear etiqueta de error UNA sola vez
  let errorCorreo = document.getElementById("errorCorreo");

  if (!errorCorreo) {
    errorCorreo = document.createElement("div");
    errorCorreo.id = "errorCorreo";
    errorCorreo.classList.add("invalid-feedback");
    emailInput.parentNode.appendChild(errorCorreo);
  }

  emailInput.addEventListener("input", function () {
    const email = emailInput.value.trim();

    if (email === "") {
      emailInput.classList.remove("is-valid", "is-invalid");
      errorCorreo.textContent = "";
      return;
    }

    if (!regexEmail.test(email)) {
      errorCorreo.textContent = "Ingresa un correo con formato nombre@dominio.com.";
      emailInput.classList.add("is-invalid");
      emailInput.classList.remove("is-valid");
    } else {
      errorCorreo.textContent = "";
      emailInput.classList.remove("is-invalid");
      emailInput.classList.add("is-valid");
    }
  });
}

document.addEventListener("DOMContentLoaded", iniciarValidacionEmail);

/*
==============================
|     Validacion Contraseña   |
==============================
*/

function iniciarValidacionPassword() {
  const passwordInput = document.getElementById("password");

  let errorPassword = document.getElementById("errorPassword");

  if (!errorPassword) {
    errorPassword = document.createElement("div");
    errorPassword.id = "errorPassword";
    errorPassword.classList.add("invalid-feedback");
    passwordInput.parentNode.appendChild(errorPassword);
  }

  passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;

    // Expresiones individuales
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /\d/.test(password);
    const tieneEspecial = /[@!¿?$#_\-]/.test(password);
    const tieneLongitud = password.length >= 8;

    let mensajes = [];

    if (password === "") {
      passwordInput.classList.remove("is-valid", "is-invalid");
      errorPassword.textContent = "";
      return;
    }

    if (!tieneLongitud) {
      mensajes.push("Debe tener al menos 8 caracteres.");
    }
    if (!tieneMinuscula) {
      mensajes.push("Debe contener una letra minúscula.");
    }
    if (!tieneMayuscula) {
      mensajes.push("Debe contener una letra mayúscula.");
    }
    if (!tieneNumero) {
      mensajes.push("Debe contener un número.");
    }
    if (!tieneEspecial) {
      mensajes.push("Debe contener un carácter especial (@!¿?$#_-).");
    }

    if (mensajes.length > 0) {
      errorPassword.innerHTML = mensajes.join("<br>");
      passwordInput.classList.add("is-invalid");
      passwordInput.classList.remove("is-valid");
    } else {
      errorPassword.textContent = "";
      passwordInput.classList.remove("is-invalid");
      passwordInput.classList.add("is-valid");
    }
  });
}

document.addEventListener("DOMContentLoaded", iniciarValidacionPassword);

function iniciarValidacionConfirmPassword() {
  const passwordInput = document.getElementById("password");
  const confirmInput = document.getElementById("confirm-password");

  let errorConfirm = document.getElementById("errorConfirm");

  if (!errorConfirm) {
    errorConfirm = document.createElement("div");
    errorConfirm.id = "errorConfirm";
    errorConfirm.classList.add("invalid-feedback");
    confirmInput.parentNode.appendChild(errorConfirm);
  }

  function validarConfirmacion() {
    const password = passwordInput.value;
    const confirmPassword = confirmInput.value;

    if (confirmPassword === "") {
      confirmInput.classList.remove("is-valid", "is-invalid");
      errorConfirm.textContent = "";
      return;
    }

    if (password !== confirmPassword) {
      errorConfirm.textContent = "Las contraseñas no coinciden.";
      confirmInput.classList.add("is-invalid");
      confirmInput.classList.remove("is-valid");
    } else {
      errorConfirm.textContent = "";
      confirmInput.classList.remove("is-invalid");
      confirmInput.classList.add("is-valid");
    }
  }

  // Validar cuando escribe en cualquiera de los dos
  passwordInput.addEventListener("input", validarConfirmacion);
  confirmInput.addEventListener("input", validarConfirmacion);
}

document.addEventListener("DOMContentLoaded", iniciarValidacionConfirmPassword);

/*
==============================
|Validacion Numero Telefonico  |
==============================
*/

document.addEventListener("DOMContentLoaded", function () {
  const telefonoInput = document.getElementById("telefono");

  telefonoInput.addEventListener("input", function () {
    const telefono = telefonoInput.value.trim();

    telefonoInput.classList.remove("is-valid", "is-invalid");

    // Debe tener exactamente 10 números
    if (!/^\d{10}$/.test(telefono)) {
      telefonoInput.classList.add("is-invalid");
      return;
    }

    // Evitar todos los números iguales (0000000000, 1111111111...)
    if (/^(\d)\1{9}$/.test(telefono)) {
      telefonoInput.classList.add("is-invalid");
      return;
    }

    // Evitar 4 o más números iguales consecutivos
    if (/(\d)\1{3,}/.test(telefono)) {
      telefonoInput.classList.add("is-invalid");
      return;
    }

    // Evitar secuencias consecutivas ascendentes o descendentes
    const secuenciaAsc = "0123456789";
    const secuenciaDesc = "9876543210";

    if (
      secuenciaAsc.includes(telefono) ||
      secuenciaDesc.includes(telefono)
    ) {
      telefonoInput.classList.add("is-invalid");
      return;
    }

    telefonoInput.classList.add("is-valid");
  });
});

/*
=================================
|Validacion de Formulario       |
|Completo (Botón de Registro)   |
=================================
*/
function validarFormularioCompleto() {
  const nombreInput = document.getElementById("nombreInput");
  const correoInput = document.getElementById("correo");
  const telefonoInput = document.getElementById("telefono");
  const passwordInput = document.getElementById("password");
  const confirmInput = document.getElementById("confirm-password");

  const nombreValido = nombreInput.classList.contains("is-valid");
  const correoValido = correoInput.classList.contains("is-valid");
  const telefonoValido = telefonoInput.classList.contains("is-valid");
  const passwordValido = passwordInput.classList.contains("is-valid");
  const confirmValido = confirmInput.classList.contains("is-valid");

  if (!nombreValido || !correoValido || !telefonoValido || !passwordValido || !confirmValido) {
    Swal.fire({
      icon: "error",
      title: "Error en datos ingresados",
      text: "Por favor completa correctamente todos los campos antes de continuar",
    });
    return false;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const emailExists = users.some((user) => user.correo === correoInput.value.trim());

  if (emailExists) {
    Swal.fire({
      icon: "warning",
      title: "Correo ya registrado",
      text: "Este correo electrónico ya tiene una cuenta asociada",
    });
    return false;
  }

  return true;
}

const registerBtn = document.getElementById("register_btn");

registerBtn.addEventListener("click", function(e){
  e.preventDefault();

  if(validarFormularioCompleto()){

    const nombreInput = document.getElementById("nombreInput");
    const correoInput = document.getElementById("correo");
    const telefonoInput = document.getElementById("telefono");
    const passwordInput = document.getElementById("password");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const nuevoUsuario = {
      nombre: nombreInput.value.trim(),
      correo: correoInput.value.trim(),
      telefono: telefonoInput.value.trim(),
      password: passwordInput.value
    };

    users.push(nuevoUsuario);

    localStorage.setItem("users", JSON.stringify(users));

    Swal.fire({
      icon: "success",
      title: "Cuenta creada",
      text: "Tu cuenta se registró correctamente"
    });

    window.location.href = "../pages/iniciarSesion.html";
  }
});
