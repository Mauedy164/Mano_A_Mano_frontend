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