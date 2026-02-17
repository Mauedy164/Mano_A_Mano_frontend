/*
==============================
|           Navbar           |
==============================
*/

/* barra anuncio oferta */

/* Navbar */

const navbar_container_index = document.getElementById("navbar_container_index");
const navbar_container = document.getElementById("navbar_container");

if (navbar_container_index) {
  navbar_container_index.innerHTML = `
  <nav>
                <nav class="navbar navbar-expand-lg bg-light px-4">
                    <div class="container-fluid">

                        <!-- Logo ManoAMano -->
                        <a class="navbar-brand fw-bold" href="./index.html">ManoAMano</a>

                        <!-- Botón responsivo -->
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarContent">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <!-- Contenido -->
                        <div class="collapse navbar-collapse" id="navbarContent">

                            <!-- Menú -->
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="./index.html">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="./pages/contact.html">Contacto</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="./pages/aboutMe.html">Nosotros</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="#">Iniciar Sesión</a>
                                </li>
                            </ul>

                            <!-- Buscador y iconos -->
                            <div class="d-flex align-items-center gap-3">
                                <form class="d-flex align-items-center border rounded-pill px-2">
                                    <input class="form-control border-0" type="search" placeholder="¿Qué buscas?">
                                    <i class="bi bi-search"></i>
                                </form>

                                <i class="bi bi-cart-fill"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                                    class="bi bi-heart" viewBox="0 0 16 16">
                                    <path
                                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                </svg>
                                <i class="bi bi-cart fs-5"></i>
                                <button class="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                                        class="bi bi-cart-fill" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5
                                        0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01
                                        3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7
                                        0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1
                                        1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                    </svg>
                                </button>
        
                                <i class="bi bi-person fs-5"></i>
                                    <a class="nav-link text-dark" href="./pages/comprador.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                        class="bi bi-person" viewBox="0 0 16 16">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                        </svg>
                                    </a>
                                
                            </div>

                        </div>
                    </div>
                </nav>

            </nav>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Carrito de compras</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div id="carrito_productos" class="offcanvas-body">
                aqui agrega los produtos

                <div class="mt-auto">
                <a href="./pages/carrito.html" class="btn btn-dark w-100">
                    Proceder al pago
                </a>
                </div>
                
            </div>
            

            
            </div>            

  `;
}

if (navbar_container) {
  navbar_container.innerHTML = `
              <nav>

                <nav class="navbar navbar-expand-lg bg-light px-4">
                    <div class="container-fluid">

                        <!-- Logo ManoAMano -->
                        <a class="navbar-brand fw-bold" href="../index.html">ManoAMano</a>

                        <!-- Botón responsivo -->
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarContent">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <!-- Contenido -->
                        <div class="collapse navbar-collapse" id="navbarContent">

                            <!-- Menú -->
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="../index.html">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="../pages/contact.html">Contacto</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="../pages/aboutMe.html">Nosotros</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="#">Iniciar Sesión</a>
                                </li>
                            </ul>

                            <!-- Buscador y iconos -->
                            <div class="d-flex align-items-center gap-3">
                                <form class="d-flex align-items-center border rounded-pill px-2">
                                    <input class="form-control border-0" type="search" placeholder="¿Qué buscas?">
                                    <i class="bi bi-search"></i>
                                </form>

                                <i class="bi bi-cart-fill"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                                    class="bi bi-heart" viewBox="0 0 16 16">
                                    <path
                                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                </svg>
                                <i class="bi bi-cart fs-5"></i>
                                <button class="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                        
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                                            class="bi bi-cart-fill" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5
                                            0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01
                                            3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7
                                            0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1
                                            1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                            </svg>
                                        
                                </button>

                                <i class="bi bi-person fs-5"></i>
                                <a class="nav-link text-dark" href="../pages/comprador.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                    class="bi bi-person" viewBox="0 0 16 16">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                    </svg>
                                </a>
                                
                            </div>

                        </div>
                    </div>
                </nav>

            </nav>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Carrito de compras</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div id="carrito_productos" class="offcanvas-body">
                aqui agrega los produtos

                <div class="mt-auto">
                <a href="../pages/carrito.html" class="btn btn-dark w-100">
                    Proceder al pago
                </a>
                </div>
                
            </div>            
  `;
}

/*
==============================
|           Footer           |
==============================
*/

const footer_container_index = document.getElementById("footer_container_index");
const footer_container = document.getElementById("footer_container");

if (footer_container_index) {
  footer_container_index.innerHTML = `
  <div class="piedepagina">
            <div class="piedepagina-container container-fluid">
                <div class="piedepagina-grid row row-col-1 row-col-md-12">
                    <div class="col">
                        <h4>Exclusivo</h4>
                        <p>Suscribirse</p>
                        <p>Obtén 10% en tu primera orden</p>
                        <div class="input-wrapper">
                            <input type="email" placeholder="Ingresa tu correo" required />
                            <button type="submit">
                                <span class="arrow-icon">➤</span>
                            </button>
                        </div>
                    </div>
                    <div class="col">
                        <h4>Soporte</h4>
                        <p>111 Bijoy sarani, Dhaka</p>
                        <p>manoamano@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>
                    <div class="col">
                        <h4>Cuenta</h4>
                        <p>Mi cuenta</p>
                        <p>Ingresar / Registrar</p>
                        <p>Carrito</p>
                        <p>Lista de deseos</p>
                        <p>Tienda</p>
                    </div>
                    <div class="col">
                        <h4>Enlace rápido</h4>
                        <p>Política de privacidad</p>
                        <p>Términos de uso</p>
                        <p>FAQ</p>
                        <p>Contacto</p>
                    </div>
                    <div class="col"> 
                        <h4>Descarga la app</h4>
                    <div class="app-section d-flex flex-column align-items-center">
                            <img src="../media/aboutMe/codigoQR.PNG" alt="QR" class="qr img-fluid">
                        <div class="botones-seccion d-flex flex-column flex-md-row gap-2 mt-3">
                            <a href="URL_APP_STORE" target="_blank">
                            <img src="../media/aboutMe/AppStore.png" alt="Descargar en App Store" class="img-fluid store-logo"></a>
                            <a href="URL_PLAY_STORE" target="_blank">
                            <img src="../media/aboutMe/GooglePlay.png" alt="Disponible en Google Play" class="img-fluid store-logo"></a>
                        </div>
                    </div>
                            <div class="social-icons">
                                <a href="URL_DE_TU_INSTAGRAM" target="_blank"><i class="fab fa-instagram"></i></a>
                                <a href="URL_DE_TU_X" target="_blank"><i class="fab fa-twitter"></i></a>
                                <a href="URL_DE_TU_FACEBOOK" target="_blank"><i class="fab fa-facebook"></i></a>
                                <a href="URL_DE_TU_LINKEDIN" target="_blank"><i class="fab fa-linkedin"></i></a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
  `;
}

if (footer_container) {
  footer_container.innerHTML = `
          <div class="piedepagina">
            <div class="piedepagina-container container-fluid">
                <div class="piedepagina-grid row row-col-1 row-col-md-12">
                    <div class="col">
                        <h4>Exclusivo</h4>
                        <p>Suscribirse</p>
                        <p>Obtén 10% en tu primera orden</p>
                        <div class="input-wrapper">
                            <input type="email" placeholder="Ingresa tu correo" required />
                            <button type="submit">
                                <span class="arrow-icon">➤</span>
                            </button>
                        </div>
                    </div>

                    <div class="col">
                        <h4>Soporte</h4>
                        <p>111 Bijoy sarani, Dhaka</p>
                        <p>manoamano@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>

                    <div class="col">
                        <h4>Cuenta</h4>
                        <p>Mi cuenta</p>
                        <p>Ingresar / Registrar</p>
                        <p>Carrito</p>
                        <p>Lista de deseos</p>
                        <p>Tienda</p>
                    </div>

                    <div class="col">
                        <h4>Enlace rápido</h4>
                        <p>Política de privacidad</p>
                        <p>Términos de uso</p>
                        <p>FAQ</p>
                        <p>Contacto</p>
                    </div>

                    <div class="col"> 
                        <h4>Descarga la app</h4>
                    <div class="app-section d-flex flex-column align-items-center">
                            <img src="../media/aboutMe/codigoQR.PNG" alt="QR" class="qr img-fluid">
                        <div class="botones-seccion d-flex flex-column flex-md-row gap-2 mt-3">
                            <a href="URL_APP_STORE" target="_blank">
                            <img src="../media/aboutMe/AppStore.png" alt="Descargar en App Store" class="img-fluid store-logo"></a>
                            <a href="URL_PLAY_STORE" target="_blank">
                            <img src="../media/aboutMe/GooglePlay.png" alt="Disponible en Google Play" class="img-fluid store-logo"></a>
                        </div>
                    </div>


                            <div class="social-icons">
                                <a href="URL_DE_TU_INSTAGRAM" target="_blank"><i class="fab fa-instagram"></i></a>
                                <a href="URL_DE_TU_X" target="_blank"><i class="fab fa-twitter"></i></a>
                                <a href="URL_DE_TU_FACEBOOK" target="_blank"><i class="fab fa-facebook"></i></a>
                                <a href="URL_DE_TU_LINKEDIN" target="_blank"><i class="fab fa-linkedin"></i></a>
                            </div>



                    </div>

                </div>
            </div>
        </div>
  `;
}

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

// const form = document.querySelector (".form_container form");
// const correoIpt = document.getElementById("user_email");
// const miFormulario = document.getElementById("miFormulario");

// // Declaración de constante que almacena una expresión regular para correo
// const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// // Agregamos un evento para cuando se haga click en el botón
// form.addEventListener ("submit", (e) => {

//   //Limpiar error previo si existe
//   const errorCorreo = document.getElementById("error-correo");
//   if (errorCorreo){
//     errorCorreo.remove();
//   }

//    // Crea constante de correo con el valor ingresado en el formulario y se eliminan los espacios en blanco de una cadena de texto
//   const correo = correoIpt.value.trim();

//   // Si el correo es inválido
//   if (!regex.test(correo)) {
//     e.preventDefault();  // Evita  que  el formulario se envíe

//     // Crear elemento de error
//     const mensajeError = document.createElement ("div");
//     mensajeError.id = "error-correo";
//     mensajeError.style.cssText = "color: red; font-size: 0.9em; margin-top: 5px;";
//     mensajeError.textContent = "Por favor, ingresa un correo válido.";

//     correoIpt.parentNode.appendChild(mensajeError);
//   }

// });

// // Validación de teléfono

// // 1. Seleccionamos los elementos del teléfono
// const inputPhone = document.getElementById('user_phone');
// let errorPhone = document.getElementById('errorPhone');

// // 2. Creamos el contenedor de error si no existe
// if (!errorPhone) {
//     errorPhone = document.createElement('div');
//     errorPhone.id = 'errorPhone';
//     errorPhone.style.cssText = 'color: red; font-size: 0.9em; margin-top: 5px;';
//     inputPhone.parentNode.appendChild(errorPhone);
// }

// // 3. EVENTO "INPUT": Esto borra o cambia el mensaje mientras escribes
// inputPhone.addEventListener('input', function() {
//     const phone = inputPhone.value.trim();
//     const regexPhone = /^[0-9]{10}$/;

//     if (phone === '') {
//         // Si está vacío, limpiamos todo
//         errorPhone.textContent = '';
//         inputPhone.classList.remove('is-invalid');
//     } else if (!regexPhone.test(phone)) {
//         // Si no cumple la RegEx, mostramos el mensaje de error
//         errorPhone.textContent = 'Deben ser exactamente 10 dígitos numéricos.';
//         inputPhone.classList.add('is-invalid');
//     } else {
//         // ¡Si todo está bien, borramos el error!
//         errorPhone.textContent = '';
//         inputPhone.classList.remove('is-invalid');
//         // Opcional: poner borde verde si usas Bootstrap
//         inputPhone.classList.add('is-valid');
//     }
// });
// // Validación de nombre

// document.addEventListener('DOMContentLoaded', function() {
//   const form = document.querySelector('.form_container form');
//   const inputNombre = document.getElementById('user_name');

//   let error = document.getElementById('errorNombre'); //Se crea el error debajo del input
//   if (!error) {
//     error = document.createElement('div');
//     error.id = 'errorNombre';
//     error.style.cssText = 'color: red; font-size: 0.9em; margin-top: 5px;';
//     inputNombre.parentNode.appendChild(error);
//   }

//   form.addEventListener('submit', function(event) {
//     const nombre = inputNombre.value.trim();

//     // Limpiar error previo
//     error.textContent = '';
//     inputNombre.classList.remove('is-invalid');

//     // Validar nombre

//     if (nombre === '') { //El nombre no debe estar en blanco
//       error.textContent = 'El nombre es requerido.';
//       inputNombre.classList.add('is-invalid');
//       event.preventDefault();
//       inputNombre.focus();
//       return false;
//     }

//     if (nombre.length < 2) { //El nombre debe tener al menos 2 caracteres
//       error.textContent = 'El nombre debe tener al menos 2 caracteres.';
//       inputNombre.classList.add('is-invalid');
//       event.preventDefault();
//       inputNombre.focus();
//       return false;
//     }

//     const regex = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/; //Admite letras mayúsculas, minúsculas, acentos y espacios
//     if (!regex.test(nombre)) {
//       error.textContent = 'Solo letras y espacios permitidos.';
//       inputNombre.classList.add('is-invalid');
//       event.preventDefault();
//       inputNombre.focus();
//       return false;
//     }
//   });
// });

// // Manda el formulario al correo auxiliarmanoamano@gmail.com

// // Inicializar EmailJS
// (function(){
//     emailjs.init("iO5ES5byaaXR9w8yL");
// })();

// // Event listener para el formulario
// document.getElementById("miFormulario").addEventListener("submit", function(event) {
//     event.preventDefault();

//     emailjs.sendForm("service_trf8ktq", "template_4q07cia", this)
//         .then(function() {
//             alert("Mensaje enviado correctamente ✅");
//         })
//         .catch(function(error) {
//             console.log("Error:", error);
//             alert("Hubo un error al enviar el mensaje ❌");
//         });
// });
