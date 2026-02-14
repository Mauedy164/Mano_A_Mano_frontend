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

const form = document.querySelector (".form_container form");
const correoIpt = document.getElementById("user_email");

// Declaración de constante que almacena una expresión regular para correo 
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Agregamos un evento para cuando se haga click en el botón
form.addEventListener ("submit", (e) => {

  //Limpiar error previo si existe
  const errorCorreo = document.getElementById("error-correo");
  if (errorCorreo){
    errorCorreo.remove();
  }

   // Crea constante de correo con el valor ingresado en el formulario y se eliminan los espacios en blanco de una cadena de texto
  const correo = correoIpt.value.trim();

  // Si el correo es inválido
  if (!regex.test(correo)) {
    e.preventDefault();  // Evita  que  el formulario se envíe

    // Crear elemento de error
    const mensajeError = document.createElement ("div");
    mensajeError.id = "error-correo";
    mensajeError.style.cssText = "color: red; font-size: 0.9em; margin-top: 5px;";
    mensajeError.textContent = "Por favor, ingresa un correo válido.";

    correoIpt.parentNode.appendChild(mensajeError);    
  }
  
});


// Validación de teléfono

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

