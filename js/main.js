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
                        <img id="logo_Ajolote" src="../media/NavBar/Logoajolote5.png">

                        <!-- Buscador -->
                            <div class="d-flex align-items-center gap-3 order-lg-last">
                                
                                 <form id="searchFormLg" class="d-none d-lg-flex align-items-center border rounded-pill px-3 search-box">
                                    <input id="searchInputLg" class="form-control border-0 shadow-none" type="search" placeholder="¿Qué buscas?">
                                    
                                 </form>

                                     <!-- icono buscar en responsive -->
                                    <button class="btn p-0 d-lg-none toggle-buscador" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#buscadorExpandido">
                                    <img src="../media/NavBar/iconobusqueda.png"
                                    alt="Buscar"
                                    class="icon-search">
                                    </button>

                                    <div class="collapse collapse-horizontal d-lg-none" id="buscadorExpandido" data-bs-parent=".navbar">
                                        <div class="d-flex align-items-center" style="width: 40vw; margin-left: 10px;">
                                            <form id="searchFormSm" class="w-100 border-0 rounded-pill px-3 search-box-res">
                                                <input id="searchInputSm" class="form-control border-0 bg-transparent p-0" type="text" placeholder="¿Qué buscas?" style="font-size: 0.9rem;">
                                                <button class="btn p-0 border-0 ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#buscadorExpandido">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                                    </svg>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                
                            <!-- Botón Favoritos ----SE COMENTA PARA IMPLEMENTAR DESPÚES---
                                <button class="btn p-0" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasFavoritos" aria-controls="offcanvasFavoritos">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23"
                                        fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                    </svg>
                                </button>
                            -->

                            <!-- Botón Carrito -->
                            <button class="btn p-0 position-relative" type="button"
                                data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23"
                                        fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7
                                        0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                </svg>

                                <!-- Contador carrito-->
                                    <span id = "cuenta_carrito"> 0 </span>
                            </button>

                                <!-- boton de perfil -->

                            <div class="dropdown">
                                <button class="btn p-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg>

                                </button>

    <ul class="dropdown-menu dropdown-menu-end" id="menuPerfil">
    </ul>
                            </div>
                              
                               </div>

                        <!-- Botón responsivo -->
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarContent">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <!-- Contenido -->
                        <div class="collapse navbar-collapse" id="navbarContent" data-bs-parent=".navbar">

                            <!-- Menú -->
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-center">

                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="../index.html">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="../pages/products.html">Productos</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="../pages/contact.html">Contacto</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="../pages/aboutMe.html">Nosotros</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="../pages/iniciarSesion.html">Iniciar Sesión</a>
                                </li>
                            </ul>

                            
                        </div>
                    </div>
                </nav>
            </nav>

           <!-- Offcanvas CARRITO -->
            <div class="offcanvas offcanvas-end" tabindex="-1" 
            id="offcanvasRight" aria-labelledby="offcanvasRightLabel">

                <div class="offcanvas-header p-3 pb-2">
                    <h5 id="offcanvasRightLabel">Carrito de compras</h5>
                    <button type="button" class="btn-close text-reset"
                    data-bs-dismiss="offcanvas" aria-label="Close">
                    </button>
                </div>
                

                <div class="offcanvas-body p-0 d-flex flex-column">

                    <div class="p-3 pt-0 bg-white sticky-top border-bottom">
                        <h5 class="mb-0">
                        Total: $<span id="total_carrito">0</span>
                    </h5>
                    </div>

                    <div id="carrito_productos" class="p-3 overflow-auto" style="flex:1;">
                    </div>

                    <div class="p-3 border-top">
                        <a href="../pages/carrito.html" class="btn btn-dark w-100">
                        Proceder al pago
                        </a>
                    </div>

                </div>
            </div>
                    


                        <!-- Offcanvas FAVORITOS 
                        <div class="offcanvas offcanvas-end" tabindex="-1"
                            id="offcanvasFavoritos" aria-labelledby="offcanvasFavoritosLabel">
                        <div class="offcanvas-header">
                            <h5 id="offcanvasFavoritosLabel">Mis favoritos</h5>
                            <button type="button" class="btn-close text-reset"
                                    data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div id="favoritos_productos" class="offcanvas-body">
                            Aquí van tus productos favoritos

                            <div class="mt-auto">
                            <button class="btn btn-dark w-100 mb-2" id="moverAlCarrito">
                                Mover todo al carrito
                            </button>
                            <a href="#" class="btn btn-dark w-100">Ver lista completa</a>
                            </div>
                        </div>
                        </div>
                        -->

  `;
}

if (navbar_container) {
  navbar_container.innerHTML = `
              <nav>
 <nav class="navbar navbar-expand-lg bg-light px-4">
                    <div class="container-fluid">

                        <!-- Logo ManoAMano -->
                        <img id="logo_Ajolote" src="../media/NavBar/Logoajolote5.png">

                        <!-- Buscador -->
                            <div class="d-flex align-items-center gap-3 order-lg-last">
                                
                                 <form id="searchFormLg" class="d-none d-lg-flex align-items-center border rounded-pill px-3 search-box">
                                    <input id="searchInputLg" class="form-control border-0 shadow-none" type="search" placeholder="¿Qué buscas?">
                                    
                                 </form>

                                     <!-- icono buscar en responsive -->
                                    <button class="btn p-0 d-lg-none toggle-buscador" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#buscadorExpandido">
                                    <img src="../media/NavBar/iconobusqueda.png"
                                    alt="Buscar"
                                    class="icon-search">
                                    </button>

                                    <div class="collapse collapse-horizontal d-lg-none" id="buscadorExpandido" data-bs-parent=".navbar">
                                        <div class="d-flex align-items-center" style="width: 40vw; margin-left: 10px;">
                                            <form id="searchFormSm" class="w-100 border-0 rounded-pill px-3 search-box-res">
                                                <input id="searchInputSm" class="form-control border-0 bg-transparent p-0" type="text" placeholder="¿Qué buscas?" style="font-size: 0.9rem;">
                                                <button class="btn p-0 border-0 ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#buscadorExpandido">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                                    </svg>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                
                            <!-- Botón Favoritos 
                                <button class="btn p-0" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasFavoritos" aria-controls="offcanvasFavoritos">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23"
                                        fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                    </svg>
                                </button>
                            -->

                            <!-- Botón Carrito -->
                            <button class="btn p-0 position-relative" type="button"
                                data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23"
                                        fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7
                                        0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                </svg>

                                <!-- Contador carrito-->
                                    <span id = "cuenta_carrito"> 0 </span>
                            </button>

                                <!-- boton de perfil -->

                            <div class="dropdown">
                                <button class="btn p-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg>

                                </button>

    <ul class="dropdown-menu dropdown-menu-end" id="menuPerfil">
    </ul>
                            </div>
                              
                               </div>

                        <!-- Botón responsivo -->
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarContent">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <!-- Contenido -->
                        <div class="collapse navbar-collapse" id="navbarContent" data-bs-parent=".navbar">

                            <!-- Menú -->
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-center">

                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="../index.html">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="../pages/products.html">Productos</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="../pages/contact.html">Contacto</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="../pages/aboutMe.html">Nosotros</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="../pages/iniciarSesion.html">Iniciar Sesión</a>
                                </li>
                            </ul>

                            
                        </div>
                    </div>
                </nav>

                

            </nav>

          <!-- Offcanvas CARRITO -->
            <div class="offcanvas offcanvas-end" tabindex="-1"
                id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Carrito de compras</h5>
                    <button type="button" class="btn-close text-reset"
                         data-bs-dismiss="offcanvas" aria-label="Close">
                    </button>
                </div>
                
                <div id="carrito_productos" class="offcanvas-body">

                    Total:$<span id="total_carrito"> 0 </span>
                </div>

                <div class="mt-auto">
                    <a href="../pages/carrito.html" class="btn btn-dark w-100">
                        Proceder al pago
                    </a>
                </div>
            </div>


            <!-- Offcanvas FAVORITOS 
            <div class="offcanvas offcanvas-end" tabindex="-1"
                id="offcanvasFavoritos" aria-labelledby="offcanvasFavoritosLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasFavoritosLabel">Mis favoritos</h5>
                    <button type="button" class="btn-close text-reset"
                            data-bs-dismiss="offcanvas" aria-label="Close">
                    </button>
                </div>
                    
                <div id="favoritos_productos" class="offcanvas-body">
                    Aquí van tus productos favoritos

                    <div class="mt-auto">
                        <button class="btn btn-dark w-100 mb-2" id="moverAlCarrito">
                            Mover todo al carrito
                        </button>
                        <a href="#" class="btn btn-dark w-100">Ver lista completa</a>
                    </div>
                </div>
            </div>
            -->
  `;
}

//funciones cuando ha iniciado sesion o no
const menuPerfil = document.getElementById("menuPerfil");

function cargarMenuPerfil(){

    const menuPerfil = document.getElementById("menuPerfil");

    if(!menuPerfil) return;

    const usuarioGuardado = localStorage.getItem("usuarioActivo");

    if(usuarioGuardado){

        const usuario = JSON.parse(usuarioGuardado);

        menuPerfil.innerHTML = `
            <li class="dropdown-item-text fw-bold">
                Hola, ${usuario.nombre.split(" ")[0]}!
            </li>

            <li><hr class="dropdown-divider"></li>

            <li><a class="dropdown-item" href="../pages/comprador.html">Mi perfil</a></li>

            <li><button class="dropdown-item" id="cerrarSesion">Cerrar sesión</button></li>
        `;

    }else{

        menuPerfil.innerHTML = `
            <li><a class="dropdown-item" href="../pages/iniciarSesion.html">Iniciar sesión</a></li>
            <li><a class="dropdown-item" href="../pages/crearCuenta.html">Crear cuenta</a></li>
        `;
    }
}
cargarMenuPerfil();


/*para cerrar sesion */
document.addEventListener("click", function(e){

    if(e.target.id === "cerrarSesion"){

        localStorage.removeItem("usuarioActivo");

        window.location.reload();
    }

});

//*funciones de busqueda*/

function initSearchHandlers() {

  function buscar(query) {
    query = query.trim();

    if (query !== "") {
      window.location.href = `../pages/products.html?q=${encodeURIComponent(query)}`;
    }
  }

  const formLg = document.getElementById("searchFormLg");
  const inputLg = document.getElementById("searchInputLg");

  if (formLg) {
    formLg.addEventListener("submit", (e) => {
      e.preventDefault();
      buscar(inputLg.value);
    });
  }

  const formSm = document.getElementById("searchFormSm");
  const inputSm = document.getElementById("searchInputSm");

  if (formSm) {
    formSm.addEventListener("submit", (e) => {
      e.preventDefault();
      buscar(inputSm.value);
    });
  }
}

document.addEventListener("DOMContentLoaded", initSearchHandlers);


/*
==============================
|           Footer           |
==============================
*/

const footer_container_index = document.getElementById("footer_container_index");
const footer_container = document.getElementById("footer_container");




if (footer_container_index) {
    var flecha_abajo="./media/footer/flecha_abajo.png"
    var flecha_arriba = "./media/footer/flecha_arriba.png"
  footer_container_index.innerHTML = `
  <div class="piedepagina" id="piedepagina_contenedor">
            <div class="piedepagina-container container-fluid">
                <div class="piedepagina-grid row row-col-1 row-col-md-12">
                    <div class="col">
                        <div class="subtitle_footer">
                            <h4>Exclusivo</h4>
                            <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down"">
                            <!-- Cambiar ruta de imagen -->
                        </div>
                        <div class="description_footer">
                            <p>Suscribirse</p>
                            <p>Obtén 10% en tu primera orden</p>
                            <div class="input-wrapper">
                                <input type="email" id="footer_email" placeholder="Ingresa tu correo" required />
                                <button type="button" id="footer_subscribe">
                                    <span class="arrow-icon">➤</span>
                                </button>
                            </div>
                            <div id="footer_email_error" class="footer-error"></div>
                        </div>
                        
                    </div>

                    
                    <div class="col">
                        <div class="subtitle_footer">
                            <h4>Soporte</h4>
                            <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down">
                        </div>
                        <div class="description_footer">
                            <p>Reforma 226 Piso 15, CDMX</p>
                            <p>auxiliarmanoamano@gmail.com</p>
                            <p>+5445125545</p>
                        </div>
                    </div>

                    <div class="col">
                        <div class="subtitle_footer">
                            <h4>Cuenta</h4>
                            <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down">
                        </div>
                        <div class="description_footer">
                            <p>Mi cuenta</p>
                            <p>Ingresar / Registrar</p>
                            <p>Carrito</p>
                            <p>Lista de deseos</p>
                            <p>Tienda</p>
                        </div>
                    </div>

                    <div class="col">
                        <div class="subtitle_footer">
                            <h4>Enlace rápido</h4>
                            <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down">
                        </div>
                        <div class="description_footer">
                            <p>Política de privacidad</p>
                            <p>Términos de uso</p>
                            <p>FAQ</p>
                            <p>Contacto</p>
                        </div>
                    </div>

                    <div class="col"> 
                        <div class="subtitle_footer">
                            <h4>Descarga la app</h4>
                            <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down">
                        </div>
                        <div class="description_footer">
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
        </div>
  `;
}

if (footer_container) {
    var flecha_abajo="../media/footer/flecha_abajo.png"
    var flecha_arriba = "../media/footer/flecha_arriba.png"
  footer_container.innerHTML = `
  <div class="piedepagina" id="piedepagina_contenedor">
            <div class="piedepagina-container container-fluid">
                <div class="piedepagina-grid row row-col-1 row-col-md-12">
                    <div class="col">
                        <div class="subtitle_footer">
                            <h4>Exclusivo</h4>
                            <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down"">
                            <!-- Cambiar ruta de imagen -->
                        </div>
                        <div class="description_footer">
                            <p>Suscribirse</p>
                            <p>Obtén 10% en tu primera orden</p>
                            <div class="input-wrapper">
                                <input type="email" id="footer_email" placeholder="Ingresa tu correo" required />
                                <button type="button" id="footer_subscribe">
                                    <span class="arrow-icon">➤</span>
                                </button>
                            </div>
                            <div id="footer_email_error" class="footer-error"></div>
                        </div>
                        
                    </div>

                    
                    <div class="col">
                        <div class="subtitle_footer">
                            <h4>Soporte</h4>
                            <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down">
                        </div>
                        <div class="description_footer">
                            <p>Reforma 226 Piso 15, CDMX</p>
                            <p>auxiliarmanoamano@gmail.com</p>
                            <p>+5445125545</p>
                        </div>
                    </div>

                    <div class="col">
                        <div class="subtitle_footer">
                            <h4>Cuenta</h4>
                            <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down">
                        </div>
                        <div class="description_footer">
                            <p>Mi cuenta</p>
                            <p>Ingresar / Registrar</p>
                            <p>Carrito</p>
                            <p>Lista de deseos</p>
                            <p>Tienda</p>
                        </div>
                    </div>

                    <div class="col">
                        <div class="subtitle_footer">
                            <h4>Enlace rápido</h4>
                            <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down">
                        </div>
                        <div class="description_footer">
                            <p>Política de privacidad</p>
                            <p>Términos de uso</p>
                            <p>FAQ</p>
                            <p>Contacto</p>
                        </div>
                    </div>

                    <div class="col"> 
                        <div class="subtitle_footer">
                            <h4>Descarga la app</h4>
                            <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down">
                        </div>
                        <div class="description_footer">
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
        </div>
  `;
}

/*
==============================
|     Footer Email Validate  |
==============================
*/

document.addEventListener("click", function (e) {
  if (e.target.closest("#footer_subscribe")) {
    const emailInput = document.getElementById("footer_email");

    if (!emailInput) return;

    const email = emailInput.value.trim();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    // Crear mensaje error si no existe
    let errorDiv = document.getElementById("footer_email_error");

    if (!errorDiv) {
      errorDiv = document.createElement("div");
      errorDiv.id = "footer_email_error";
      errorDiv.style.color = "red";
      errorDiv.style.fontSize = "0.9em";
      errorDiv.style.marginTop = "5px";
      emailInput.parentNode.appendChild(errorDiv);
    }

    if (!regexEmail.test(email)) {
      errorDiv.textContent = "Ingresa un correo válido nombre@dominio.com";
      emailInput.classList.add("is-invalid");
      emailInput.classList.remove("is-valid");
      return;
    }

    // Si es válido
    errorDiv.textContent = "";
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");

    Swal.fire({
      title: "¡Gracias por suscribirte!",
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#3085d6"
    });
  }
});

/*
==============================
|   Footer lista en mobile   |
==============================
*/

const subtitle_footer = document.getElementsByClassName("subtitle_footer");
const description_footer = document.getElementsByClassName("description_footer");
const subtitle_footer_row = document.getElementsByClassName("subtitle_footer_row");
const piedepagina_contenedor = document.getElementById("piedepagina_contenedor")



function ocultaElementos(){
    let exclusivoOculto = true;
    let soporteOculto = true;
    let cuentaOculto = true;
    let enlaceOculto = true;
    let appOculto = true;

    for(let i=0; i<subtitle_footer.length;i++){
        description_footer[i].style.display="none";
    }
    
    subtitle_footer[0].addEventListener("click", ()=>{
        if(!exclusivoOculto){
            description_footer[0].style.display="none"
            exclusivoOculto=true
            subtitle_footer[0].innerHTML=`<h4>Exclusivo</h4>
                                <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_up">`
        } else {
            description_footer[0].style.display=""
            exclusivoOculto=false
            subtitle_footer[0].innerHTML=`<h4>Exclusivo</h4>
                                <img src="${flecha_arriba}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down">`
        }
    })

    subtitle_footer[1].addEventListener("click", ()=>{
        if(!soporteOculto){
            description_footer[1].style.display="none"
            soporteOculto=true
            subtitle_footer[1].innerHTML=`<h4>Soporte</h4>
                                <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_up">`
        } else {
            description_footer[1].style.display=""
            soporteOculto=false
            subtitle_footer[1].innerHTML=`<h4>Soporte</h4>
                                <img src="${flecha_arriba}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down">`
        }
    })

    subtitle_footer[2].addEventListener("click", ()=>{
        if(!cuentaOculto){
            description_footer[2].style.display="none"
            cuentaOculto=true
            subtitle_footer[2].innerHTML=`<h4>Cuenta</h4>
                                <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_up">`
        } else {
            description_footer[2].style.display=""
            cuentaOculto=false
            subtitle_footer[2].innerHTML=`<h4>Cuenta</h4>
                                <img src="${flecha_arriba}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down">`
        }
    })

    subtitle_footer[3].addEventListener("click", ()=>{
        if(!enlaceOculto){
            description_footer[3].style.display="none"
            enlaceOculto=true
            subtitle_footer[3].innerHTML=`<h4>Enlace rápido</h4>
                                <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_up">`
        } else {
            description_footer[3].style.display=""
            enlaceOculto=false
            subtitle_footer[3].innerHTML=`<h4>Enlace rápido</h4>
                                <img src="${flecha_arriba}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down">`
        }
    })

    subtitle_footer[4].addEventListener("click", ()=>{
        if(!appOculto){
            description_footer[4].style.display="none"
            appOculto=true
            subtitle_footer[4].innerHTML=`<h4>Descarga la app</h4>
                                <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_up">`
        } else {
            description_footer[4].style.display=""
            appOculto=false
            subtitle_footer[4].innerHTML=`<h4>Descarga la app</h4>
                                <img src="${flecha_arriba}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down">`
        }
    })

}

window.addEventListener("resize", ()=>{

    const ancho = window.innerWidth;

    if(ancho < 768){
        for(let i=0; i<subtitle_footer_row.length; i++){
            subtitle_footer_row[i].style.display="";
        }
        ocultaElementos();
    } else{
        for(let i=0; i<subtitle_footer_row.length; i++){
            subtitle_footer_row[i].style.display="none";
        }

        piedepagina_contenedor.innerHTML= `
        <div class="piedepagina-container container-fluid">
                <div class="piedepagina-grid row row-col-1 row-col-md-12">
                    <div class="col">
                        <div class="subtitle_footer">
                            <h4>Exclusivo</h4>
                            <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down"">
                            <!-- Cambiar ruta de imagen -->
                        </div>
                        <div class="description_footer">
                            <p>Suscribirse</p>
                            <p>Obtén 10% en tu primera orden</p>
                            <div class="input-wrapper">
                                <input type="email" id="footer_email" placeholder="Ingresa tu correo" required />
                                <button type="button" id="footer_subscribe">
                                    <span class="arrow-icon">➤</span>
                                </button>
                            </div>
                            <div id="footer_email_error" class="footer-error"></div>
                        </div>
                        
                    </div>

                    
                    <div class="col">
                        <div class="subtitle_footer">
                            <h4>Soporte</h4>
                            <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down">
                        </div>
                        <div class="description_footer">
                            <p>Reforma 226 Piso 15, CDMX</p>
                            <p>auxiliarmanoamano@gmail.com</p>
                            <p>+5445125545</p>
                        </div>
                    </div>

                    <div class="col">
                        <div class="subtitle_footer">
                            <h4>Cuenta</h4>
                            <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down">
                        </div>
                        <div class="description_footer">
                            <p>Mi cuenta</p>
                            <p>Ingresar / Registrar</p>
                            <p>Carrito</p>
                            <p>Lista de deseos</p>
                            <p>Tienda</p>
                        </div>
                    </div>

                    <div class="col">
                        <div class="subtitle_footer">
                            <h4>Enlace rápido</h4>
                            <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down">
                        </div>
                        <div class="description_footer">
                            <p>Política de privacidad</p>
                            <p>Términos de uso</p>
                            <p>FAQ</p>
                            <p>Contacto</p>
                        </div>
                    </div>

                    <div class="col"> 
                        <div class="subtitle_footer">
                            <h4>Descarga la app</h4>
                            <img src="${flecha_abajo}" alt="flecha apuntando hacia abajo" class="subtitle_footer_row row_down">
                        </div>
                        <div class="description_footer">
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
        `
    }

})

if (window.innerWidth < 768) {
    ocultaElementos();
}


