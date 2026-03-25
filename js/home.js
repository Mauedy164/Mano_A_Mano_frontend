
/*banner principal*/

const API_URL = 'http://34.201.41.216/ecommerce/productos/';

/**
 * Función para que las imágenes se encuentren desde el index.html
 */
function corregirRuta(ruta) {
    if (!ruta) return "";
    return ruta.startsWith("../") ? ruta.replace("../", "") : ruta;
}

const categorias = [
  {
    nombre: "gastronomía →",
    categoria: "gastronomia",
    imagen: "./media/NavBar/gastronomia.jpg"
  },
  {
    nombre: "textiles →",
    categoria: "textiles",
    imagen: "./media/NavBar/textiles.jpg"
  },
  {
    nombre: "artesanías →",
    categoria: "artesanias",
    imagen: "./media/NavBar/artesanias1.webp"
  },
  {
    nombre: "accesorios →",
    categoria: "accesorios",
    imagen: "./media/NavBar/accesorios.webp"
  },
  {
    nombre: "cocina y hogar →",
    categoria: "cocina",
    imagen: "./media/NavBar/cocina.jpg"
  }
];

let index = 0;
let categoriaActual = "";

const heroRight = document.getElementById("heroRight");
const categoriaTexto = document.getElementById("categoria");

if (heroRight && categoriaTexto) {

  function cambiarCategoria() {
    const item = categorias[index];

    heroRight.style.backgroundImage = `url(${item.imagen})`;
    categoriaTexto.textContent = item.nombre;

    categoriaActual = item.categoria;

    index = (index + 1) % categorias.length;
  }

  cambiarCategoria();
  setInterval(cambiarCategoria, 4000);

  heroRight.addEventListener("click", () => {

  if (categoriaActual) {
    window.location.href = `./pages/products.html?cat=${categoriaActual}`;
  }

});
}

/* redirige a ´productos relacionados a la categoria"*/

document.querySelectorAll(".cat-card").forEach(card => {
  card.addEventListener("click", () => {

    const categoria = card.dataset.categoria;

    window.location.href = `./pages/products.html?cat=${categoria}`;
  });
});



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
        const response = await fetch(API_URL);
        const productos = await response.json();

        const contenedor = document.getElementById("masVendidosContainer");
        if (!contenedor) return;
        contenedor.innerHTML = "";

        //limita cuántos mostrar
        productos.slice(0, 4).forEach(producto => {
            const imgLimpia = corregirRuta(producto.imagenUrl);
            const card = document.createElement("div");
            card.classList.add("col-md-3", "mb-4");

            
            card.innerHTML = `
    <div class="card h-100 shadow-sm card-masvendidos">

        <div class="position-relative" style="height:250px" justify-content:center;>

            <img src="${imgLimpia}" 
                 class="card-img-top"
                 style="height: 220px; object-fit: contain; cursor:pointer" 
                 alt="${producto.nombre}"
                 onclick="verProducto(${producto.id})">

            

            <button class="btn btn-dark w-100 py-2 fw-bold text-uppercase btn-add-to-cart"
             onclick="agregarAlCarrito(${producto.id}, '${producto.nombre}', ${producto.precio},'${imgLimpia}')">
                Agregar al carrito
            </button>

        </div>

        <div class="card-body">
            <h6 class="card-title">${producto.nombre}</h6>

            <p class="text-danger fw-bold">
                $${producto.precio}
            </p>

            <p class="text-muted small">
                ${producto.vendedor?.nombre || 'Artesano'}
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
        const response = await fetch(API_URL);
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
    if(!contenedor) return;
    contenedor.innerHTML = "";

    const productosMostrar = productos.slice(indiceActual, indiceActual + productosIni);

    productosMostrar.forEach(producto => {
        const imgLimpia = corregirRuta(producto.imagenUrl);
        const card = document.createElement("div");
        card.classList.add("col-md-3", "mb-4");

        
        card.innerHTML = `
        <div class="card h-100 shadow-sm card-masvendidos" >

            <div class="position-relative" style="height:250px" justify-content:center;>

                <img src="${imgLimpia}" 
                     class="card-img-top"
                     style="height: 220px; object-fit: contain; cursor:pointer; transition:0.3s;" 
                     alt="${producto.nombre}"
                     onclick="verProducto(${producto.id})">

                

                <button class="btn btn-dark w-100 py-2 fw-bold text-uppercase btn-add-to-cart"
                onclick="agregarAlCarrito(${producto.id}, '${producto.nombre}', ${producto.precio},'${imgLimpia}')">
                    Agregar al carrito
                </button>

            </div>

            <div class="card-body">
                <h6 class="card-title">${producto.nombre}</h6>

                <p class="text-danger fw-bold">
                    $${producto.precio}
                </p>

                <p class="text-muted small">
                    ${producto.vendedor?.nombre || 'Artesano'}
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

  const response = await fetch(API_URL);
  const productosAPI = await response.json();

  // Mezclar productos (shuffle)
  const shuffled = productosAPI.sort(() => 0.5 - Math.random());

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

function crearCarousel(id, listaProd) {

  const container = document.getElementById(id);
  if(!container) return;

  let indexCaro = 0;

  container.innerHTML = `
    <img src="${corregirRuta(listaProd[0].imagenUrl)}" onclick="verProducto(${listaProd[0].id})" alt="">
    <button class="carousel-btn carousel-prev">&#10094;</button>
    <button class="carousel-btn carousel-next">&#10095;</button>
  `;

  const img = container.querySelector("img");

  container.querySelector(".carousel-next").addEventListener("click", () => {
    indexCaro = (indexCaro + 1) % listaProd.length;
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = corregirRuta(listaProd[indexCaro].imagenUrl);
      img.style.opacity = 1;
    }, 200);
  });

  container.querySelector(".carousel-prev").addEventListener("click", () => {
    indexCaro = (indexCaro - 1 + listaProd.length) % listaProd.length;
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = corregirRuta(listaProd[indexCaro].imagenUrl);
      img.style.opacity = 1;
    }, 200);
  });

  setInterval(() => {
  indexCaro = (indexCaro + 1) % listaProd.length;
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = corregirRuta(listaProd[indexCaro].imagenUrl);
    img.style.opacity = 1;
  }, 200);

}, 4000);
}


// GRANDES OFERTAS dinámicas desde API
async function cargarGrandesOfertas() {
  try {
    const response = await fetch(API_URL);
    const productosAPI = await response.json();

    const contenedor = document.getElementById("offersCarousel");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    // Ejemplo: tomamos los primeros 12 productos como "ofertas"
    const ofertas = productosAPI.slice(0, 12);

    ofertas.forEach(producto => {
      const imgLimpia = corregirRuta(producto.imagenUrl);
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

            <img
              src="${imgLimpia}"
              class="img-fluid p-3"
              style="max-height: 260px; object-fit: contain ;cursor:pointer; transition:0.3s;"
              alt="${producto.nombre}"
              onclick="verProducto(${producto.id})"
            />
            <div class="add-to-cart-overlay position-absolute bottom-0 start-0 w-100 p-2">
              <button
                class="btn btn-dark w-100 py-2 fw-bold text-uppercase"
                style="font-size: 0.75rem"
                onclick="agregarAlCarrito(${producto.id}, '${producto.nombre}', ${producto.precio}, '${imgLimpia}')"
              >
                Añadir al carrito
              </button>
            </div>
          </div>
          <div class="card-body border px-1 py-3">
            <h5 class="card-title fw-bold fs-6 mb-2">${producto.nombre}</h5>
            <div class="d-flex align-items-center gap-2 mb-2">
              <span class="text-danger fw-bold fs-5">$${producto.precio}</span>
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
    return;
  }

  await cargarGrandesOfertas();

  const cards = Array.from(carousel.querySelectorAll('.product-card'));
  const perPage = 6; 
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

  renderPage();
});

/*funcion para ver detalles del producto de la tarjeta*/
function verProducto(id) {
  window.location.href = `./pages/detallesProducto.html?id=${id}`;
}