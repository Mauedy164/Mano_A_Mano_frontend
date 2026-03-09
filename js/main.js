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
                      <img id="logo_Ajolote" src="../media/NavBar/Logoajolote5.png"

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
                                    <a class="nav-link text-dark" href="./pages/products.html">Productos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="./pages/contact.html">Contacto</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="./pages/aboutMe.html">Nosotros</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="../pages/iniciarSesion.html">Iniciar Sesión</a>
                                </li>
                            </ul>

                            <!-- Buscador y iconos -->
                            <div class="d-flex align-items-center gap-3">
                                <form class="d-flex align-items-center border rounded-pill px-2">
                                    <input class="form-control border-0" type="search" placeholder="¿Qué buscas?">
                                    <i class="bi bi-search"></i>
                                </form>

                            <!-- Icono de favoritos-->
                                <button class="btn p-0" type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasFavoritos"
                                aria-controls="offcanvasFavoritos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23"
                                fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15
                                -7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                        </button>

                        <!-- Icono Carrito -->
                        <button class="btn p-0 position-relative" type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23"
                                fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5
                                0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01
                                3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7
                                0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1
                                1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>

                            <!-- Contador carrito-->
                            <span id = "cuenta_carrito"> 0 </span>

                        </button>

                                <i class="bi bi-person-fill fs-5">
                                <a href="./pages/comprador.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg>
                                </a>

                                </i>
                            </div>

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
                        <img id="logo_Ajolote" src="../media/NavBar/Logoajolote5.png"

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

                            <!-- Buscador y iconos -->
                            <div class="d-flex align-items-center gap-3">
                                <form class="d-flex align-items-center border rounded-pill px-2">
                                    <input class="form-control border-0" type="search" placeholder="¿Qué buscas?">
                                    <i class="bi bi-search"></i>
                                </form>

                                <button class="btn p-0" type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasFavoritos"
                                aria-controls="offcanvasFavoritos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23"
                                fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15
                                -7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                        </button>

                        <!-- Botón Carrito -->
                        <button class="btn p-0 position-relative" type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23"
                                fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5
                                0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01
                                3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7
                                0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1
                                1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>

                            <!-- Contador carrito-->
                            <span id = "cuenta_carrito"> 0 </span>
                        </button>

                                <i class="bi bi-person-fill fs-5">
                                <a href="../pages/comprador.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg>
                                </a>

                                </i>

                                
                                    

                               </div>

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
