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


// Validación de mensaje 

