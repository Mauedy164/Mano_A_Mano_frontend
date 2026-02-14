/*
==============================
|           Navbar           |
==============================
*/

/* barra anuncio oferta */



/* Navbar */




/*
==============================
|           Footer           |
==============================
*/




/*
==============================
|  index (página de inicio)  |
==============================
*/



/*
==============================
|    singUp (Crear cuenta)   |
==============================
*/






/*
==============================
|   logIn (Iniciar sesión)   |
==============================
*/




/*
==============================
|       cart (Carrito)       |
==============================
*/


/*
=================================
|  checkOut (pasarela de pago)  |
=================================
*/



/*
==================================
|  aboutMe (Acerca de nosotros)  |
==================================
*/


// NUESTRA HISTORIA

// NUESTRO NÚMEROS

// EQUIPO DE TRABAJO

// NUESTROS SELLOS


/*
==================================
|  contact (Página de contacto)  |
==================================
*/



/*
===================================
|  producto (Página de producto)  |
===================================
*/


/*  
======================================
| Validación de formularios (general) |
======================================
*/

// Validación de formulario de correo electrónico

// Validación de teléfono

// 1. Seleccionamos los elementos del teléfono
const inputPhone = document.getElementById('user_phone');
let errorPhone = document.getElementById('errorPhone');

// 2. Creamos el contenedor de error si no existe
if (!errorPhone) {
    errorPhone = document.createElement('div');
    errorPhone.id = 'errorPhone';
    errorPhone.style.cssText = 'color: red; font-size: 0.9em; margin-top: 5px;';
    inputPhone.parentNode.appendChild(errorPhone);
}

// 3. EVENTO "INPUT": Esto borra o cambia el mensaje mientras escribes
inputPhone.addEventListener('input', function() {
    const phone = inputPhone.value.trim();
    const regexPhone = /^[0-9]{10}$/;

    if (phone === '') {
        // Si está vacío, limpiamos todo
        errorPhone.textContent = '';
        inputPhone.classList.remove('is-invalid');
    } else if (!regexPhone.test(phone)) {
        // Si no cumple la RegEx, mostramos el mensaje de error
        errorPhone.textContent = 'Deben ser exactamente 10 dígitos numéricos.';
        inputPhone.classList.add('is-invalid');
    } else {
        // ¡Si todo está bien, borramos el error!
        errorPhone.textContent = '';
        inputPhone.classList.remove('is-invalid');
        // Opcional: poner borde verde si usas Bootstrap
        inputPhone.classList.add('is-valid'); 
    }
});
// Validación de nombre

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form_container form');
  const inputNombre = document.getElementById('user_name');
  
  let error = document.getElementById('errorNombre'); //Se crea el error debajo del input
  if (!error) {
    error = document.createElement('div');
    error.id = 'errorNombre';
    error.style.cssText = 'color: red; font-size: 0.9em; margin-top: 5px;';
    inputNombre.parentNode.appendChild(error);
  }

  form.addEventListener('submit', function(event) {
    const nombre = inputNombre.value.trim();
    
    // Limpiar error previo
    error.textContent = '';
    inputNombre.classList.remove('is-invalid');

    // Validar nombre

    if (nombre === '') { //El nombre no debe estar en blanco
      error.textContent = 'El nombre es requerido.';
      inputNombre.classList.add('is-invalid');
      event.preventDefault();
      inputNombre.focus();
      return false;
    }
    
    if (nombre.length < 2) { //El nombre debe tener al menos 2 caracteres
      error.textContent = 'El nombre debe tener al menos 2 caracteres.';
      inputNombre.classList.add('is-invalid');
      event.preventDefault();
      inputNombre.focus();
      return false;
    }
    
    const regex = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/; //Admite letras mayúsculas, minúsculas, acentos y espacios
    if (!regex.test(nombre)) {
      error.textContent = 'Solo letras y espacios permitidos.';
      inputNombre.classList.add('is-invalid');
      event.preventDefault();
      inputNombre.focus();
      return false;
    }
  });
});


// Manda el formulario al correo auxiliarmanoamano@gmail.com

// Inicializar EmailJS
(function(){
    emailjs.init("iO5ES5byaaXR9w8yL");
})();

// Event listener para el formulario
document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_trf8ktq", "template_4q07cia", this)
        .then(function() {
            alert("Mensaje enviado correctamente ✅");
        })
        .catch(function(error) {
            console.log("Error:", error);
            alert("Hubo un error al enviar el mensaje ❌");
        });
});

