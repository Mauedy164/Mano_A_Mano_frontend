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
|     Validacion Telefono  |
==============================
*/


/*
==============================
|     Validacion Email  |
==============================
*/


/*
==============================
|     Validacion Contraseña  |
==============================
*/


