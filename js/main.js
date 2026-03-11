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
                                
                                 <form class="d-none d-lg-flex align-items-center border rounded-pill px-3 search-box">
                                    <input class="form-control border-0 shadow-none" type="search" placeholder="¿Qué buscas?">
                                    
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
                                            <form class="w-100 border-0 rounded-pill px-3 search-box-res">
                                                <input class="form-control border-0 bg-transparent p-0" type="text" placeholder="¿Qué buscas?" style="font-size: 0.9rem;">
                                                <button class="btn p-0 border-0 ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#buscadorExpandido">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                                    </svg>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                
                            <!-- Botón Favoritos -->
                                <button class="btn p-0" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasFavoritos" aria-controls="offcanvasFavoritos">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23"
                                        fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                    </svg>
                                </button>

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


                                
                                    <a href="../pages/comprador.html" class="btn p-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                        </svg>
                                    </a>
                                
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
                                    <a class="nav-link text-dark" href="./products.html">Productos</a>
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
                    


                        <!-- Offcanvas FAVORITOS -->
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
                                
                                 <form class="d-none d-lg-flex align-items-center border rounded-pill px-3 search-box">
                                    <input class="form-control border-0 shadow-none" type="search" placeholder="¿Qué buscas?">
                                    
                                 </form>

                                     <!-- icono buscar en responsive -->
                                    <button class="btn p-0 d-lg-none toggle-buscador" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#buscadorExpandido">
                                    <img src="../media/NavBar/iconobusqueda.png"
                                    alt="Buscar"
                                    class="icon-search">
                                    </button>


                                    <div class="collapse collapse-horizontal d-lg-none" id="buscadorExpandido" data-bs-parent=".navbar">
                                        <div class="d-flex align-items-center">
                                            <form class="w-100 border-0 rounded-pill px-3 search-box-res">
                                                <input class="form-control border-0 bg-transparent p-0" type="text" placeholder="¿Qué buscas?" style="font-size: 0.9rem;">
                                                <button class="btn p-0 border-0 ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#buscadorExpandido">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                                    </svg>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                
                            <!-- Botón Favoritos -->
                                <button class="btn p-0" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasFavoritos" aria-controls="offcanvasFavoritos">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23"
                                        fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                    </svg>
                                </button>

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

                                
                                    <a href="../pages/comprador.html" class="btn p-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                        </svg>
                                    </a>
                                
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
                                    <a class="nav-link text-dark" href="./products.html">Productos</a>
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


            <!-- Offcanvas FAVORITOS -->
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
                            <input type="email" id="footer_email" placeholder="Ingresa tu correo" required />
                            <button type="button" id="footer_subscribe">
                                <span class="arrow-icon">➤</span>
                            </button>
                        </div>
                        <div id="footer_email_error" class="footer-error"></div>
                    </div>

                    
                    <div class="col">
                        <h4>Soporte</h4>
                        <p>Reforma 226 Piso 15, CDMX</p>
                        <p>auxiliarmanoamano@gmail.com</p>
                        <p>+5445125545</p>
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
                            <input type="email" id="footer_email" placeholder="Ingresa tu correo" required />
                            <button type="button" id="footer_subscribe">
                                <span class="arrow-icon">➤</span>
                            </button>
                        </div>
                        <div id="footer_email_error" class="footer-error"></div>
                    </div>

                    
                    <div class="col">
                        <h4>Soporte</h4>
                        <p>Reforma 226 Piso 15, CDMX</p>
                        <p>auxiliarmanoamano@gmail.com</p>
                        <p>+5445125545</p>
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
|  index (página de inicio)  |
==============================
*/

//carga de productos

// botón ver más



/*
==============================
|    Tajetas de Este Mes Mas Vendidos  |
==============================
*/


document.addEventListener("DOMContentLoaded", () => {
    cargarMasVendidos();
});

async function cargarMasVendidos() {
    try {
        const response = await fetch("./data/products.json");
        const productos = await response.json();

        const contenedor = document.getElementById("masVendidosContainer");

        //limita cuántos mostrar
        productos.slice(0, 4).forEach(producto => {

            const card = document.createElement("div");
            card.classList.add("col-md-3", "mb-4");

            card.innerHTML = `
    <div class="card h-100 shadow-sm card-masvendidos">

        <div class="position-relative">

            <img src="${producto.img}" 
                 class="card-img-top"
                 style="height: 250px; object-fit: cover;" 
                 alt="${producto.Name}">

            <!-- Botón Favorito -->
            <button class="btn-favorito">
                <img src="./media/products/botonfavoritos.png" alt="Favorito">
            </button>

            <!-- Botón Agregar -->
            <button class="btn btn-dark w-100 py-2 fw-bold text-uppercase btn-add-to-cart"
             onclick="agregarAlCarrito(${producto.id}, '${producto.Name}', ${producto.Price},'${producto.img}')">
                Agregar al carrito
            </button>

        </div>

        <div class="card-body">
            <h6 class="card-title">${producto.Name}</h6>

            <p class="text-danger fw-bold">
                $${producto.Price}
            </p>

            <p class="text-muted small">
                ${producto.Seller}
            </p>
        </div>

    </div>
`;

            contenedor.appendChild(card);
        });

    } catch (error) {
        console.error("Error cargando productos:", error);
    }
}
/*
==============================
|    Tajetas de Nuestros Productos  |
==============================
*/
document.addEventListener("DOMContentLoaded", () => {
    cargarExplorarProductos();
});

let productos = [];
let indiceActual = 0;

const productosIni = 8;
const productosScroll = 4;

async function cargarExplorarProductos() {
    try {
        const response = await fetch("./data/products.json");
        productos = await response.json();

        mostrarProductos();

        document.getElementById("btnSiguiente").addEventListener("click", () => {
            if (indiceActual + productosIni < productos.length) {
                indiceActual += productosScroll;
                mostrarProductos();
            }
        });

        document.getElementById("btnAnterior").addEventListener("click", () => {
            if (indiceActual - productosScroll >= 0) {
                indiceActual -= productosScroll;
                mostrarProductos();
            }
        });

    } catch (error) {
        console.error("Error cargando productos:", error);
    }
}

function mostrarProductos() {

    const contenedor = document.getElementById("explorarContainer");
    contenedor.innerHTML = "";

    const productosMostrar = productos.slice(indiceActual, indiceActual + productosIni);

    productosMostrar.forEach(producto => {

        const card = document.createElement("div");
        card.classList.add("col-md-3", "mb-4");

        card.innerHTML = `
        <div class="card h-100 shadow-sm card-masvendidos">

            <div class="position-relative">

                <img src="${producto.img}" 
                     class="card-img-top"
                     style="height: 250px; object-fit: cover;" 
                     alt="${producto.Name}">

                <button class="btn-favorito">
                    <img src="./media/products/botonfavoritos.png" alt="Favorito">
                </button>

                <button class="btn btn-dark w-100 py-2 fw-bold text-uppercase btn-add-to-cart"
                onclick="agregarAlCarrito(${producto.id}, '${producto.Name}', ${producto.Price},'${producto.img}')">
                    Agregar al carrito
                </button>

            </div>

            <div class="card-body">
                <h6 class="card-title">${producto.Name}</h6>

                <p class="text-danger fw-bold">
                    $${producto.Price}
                </p>

                <p class="text-muted small">
                    ${producto.Seller}
                </p>
            </div>

        </div>
        `;

        contenedor.appendChild(card);
    });
}

/*
==============================
|    DESTACADOS |
==============================
*/

document.addEventListener("DOMContentLoaded", () => {
  cargarNovedades();
});

async function cargarNovedades() {

  const response = await fetch("./data/products.json");
  const productos = await response.json();

  // Mezclar productos (shuffle)
  const shuffled = productos.sort(() => 0.5 - Math.random());

  // Dividir en 4 grupos sin repetir
  const grupo1 = shuffled.slice(0, 3);
  const grupo2 = shuffled.slice(3, 6);
  const grupo3 = shuffled.slice(6, 8);
  const grupo4 = shuffled.slice(8, 10);

  crearCarousel("carousel1", grupo1);
  crearCarousel("carousel2", grupo2);
  crearCarousel("carousel3", grupo3);
  crearCarousel("carousel4", grupo4);
}

function crearCarousel(id, productos) {

  const container = document.getElementById(id);

  let index = 0;

  container.innerHTML = `
    <img src="${productos[0].img}" alt="">
    <button class="carousel-btn carousel-prev">&#10094;</button>
    <button class="carousel-btn carousel-next">&#10095;</button>
  `;

  const img = container.querySelector("img");

  container.querySelector(".carousel-next").addEventListener("click", () => {
    index = (index + 1) % productos.length;
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = productos[index].img;
      img.style.opacity = 1;
    }, 200);
  });

  container.querySelector(".carousel-prev").addEventListener("click", () => {
    index = (index - 1 + productos.length) % productos.length;
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = productos[index].img;
      img.style.opacity = 1;
    }, 200);
  });

  setInterval(() => {
  index = (index + 1) % productos.length;
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = productos[index].img;
    img.style.opacity = 1;
  }, 200);

}, 4000);
}


// GRANDES OFERTAS dinámicas desde JSON
async function cargarGrandesOfertas() {
  try {
    const response = await fetch("./data/products.json");
    const productos = await response.json();

    const contenedor = document.getElementById("offersCarousel");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    // Ejemplo: tomamos los primeros 12 productos como "ofertas"
    const ofertas = productos.slice(0, 12);

    ofertas.forEach(producto => {
      const article = document.createElement("article");
      article.classList.add("product-card");

      article.innerHTML = `
        <div class="card border shadow-sm h-100">
          <div
            class="position-relative bg-light rounded-3 overflow-hidden image-container"
            style="
              min-height: 250px;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            <span class="badge bg-danger position-absolute top-0 start-0 m-3 z-3">-40%</span>

            <div class="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2 z-3">
              <button class="btn-favorito-producto" aria-label="Agregar a favoritos">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                     fill="currentColor" viewBox="0 0 16 16">
                  <path
                    d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345
                       4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066
                       1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423
                       6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398
                       .81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92
                       15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93
                       1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0C5.999
                       12.626 4.55 11.266 3.357 10.147 1.3 8.208 0 6.989 0 4.92
                       0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992
                       a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92
                       0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"
                  />
                </svg>
              </button>

              <button class="btn-ver-producto" aria-label="Ver producto">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                     fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                  <path
                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8
                       M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168
                       5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12
                       -1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457
                       A13 13 0 0 1 1.172 8z"
                  />
                  <path
                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5
                       M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                  />
                </svg>
              </button>
            </div>

            <img
              src="${producto.img}"
              class="img-fluid p-3"
              style="max-height: 200px; object-fit: contain"
              alt="${producto.Name}"
            />
            <div class="add-to-cart-overlay position-absolute bottom-0 start-0 w-100 p-2">
              <button
                class="btn btn-dark w-100 py-2 fw-bold text-uppercase"
                style="font-size: 0.75rem"
                onclick="agregarAlCarrito(${producto.id}, '${producto.Name}', ${producto.Price}, '${producto.img}')"
              >
                Añadir al carrito
              </button>
            </div>
          </div>
          <div class="card-body border px-1 py-3">
            <h5 class="card-title fw-bold fs-6 mb-2">${producto.Name}</h5>
            <div class="d-flex align-items-center gap-2 mb-2">
              <span class="text-danger fw-bold fs-5">$${producto.Price}</span>
            </div>
            <div class="d-flex align-items-center">
              <div class="text-warning me-2">
                <span style="letter-spacing: -2px;">★★★★★</span>
              </div>
              <span class="text-secondary small fw-bold">(88)</span>
            </div>
          </div>
        </div>
      `;

      contenedor.appendChild(article);
    });

  } catch (error) {
    console.error("Error cargando grandes ofertas:", error);
  }
}


document.addEventListener('DOMContentLoaded', async () => {
  const carousel = document.getElementById('offersCarousel');
  const prevBtn = document.querySelector('.offers-prev');
  const nextBtn = document.querySelector('.offers-next');

  if (!carousel || !prevBtn || !nextBtn) {
    console.warn('Carrusel o botones no encontrados');
    return;
  }

  // 1) Primero cargamos las cards desde el JSON
  await cargarGrandesOfertas();

  // 2) Luego ya calculamos las cards para el carrusel
  const cards = Array.from(carousel.querySelectorAll('.product-card'));
  const perPage = 6; // cuántas tarjetas mostrar a la vez
  let currentPage = 0;
  const totalPages = Math.ceil(cards.length / perPage);

  function renderPage() {
    const start = currentPage * perPage;
    const end = start + perPage;

    cards.forEach((card, index) => {
      card.style.display = index >= start && index < end ? '' : 'none';
    });
  }

  prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      renderPage();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      renderPage();
    }
  });

  // Primera renderización
  renderPage();
});




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