
/*banner principal*/

const categorias = [
  {
    nombre: "gastronomía →",
    categoria: "gastronomia",
    imagen: "../media/NavBar/gastronomia.jpg"
  },
  {
    nombre: "textiles →",
    categoria: "textiles",
    imagen: "../media/NavBar/textiles.jpg"
  },
  {
    nombre: "artesanías →",
    categoria: "artesanias",
    imagen: "../media/NavBar/artesanias1.webp"
  },
  {
    nombre: "accesorios →",
    categoria: "accesorios",
    imagen: "../media/NavBar/accesorios.webp"
  },
  {
    nombre: "cocina y hogar →",
    categoria: "cocina",
    imagen: "../media/NavBar/cocina.jpg"
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
        const response = await fetch("./data/products.json");
        const productos = await response.json();

        const contenedor = document.getElementById("masVendidosContainer");

        //limita cuántos mostrar
        productos.slice(0, 4).forEach(producto => {

            const card = document.createElement("div");
            card.classList.add("col-md-3", "mb-4");

            card.innerHTML = `
    <div class="card h-100 shadow-sm card-masvendidos">

        <div class="position-relative" style="height:250px" justify-content:center;>

            <img src="${producto.img}" 
                 class="card-img-top"
                 style="height: 220px; object-fit: contain; cursor:pointer" 
                 alt="${producto.Name}"
                 onclick="verProducto(${producto.id})">

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
        <div class="card h-100 shadow-sm card-masvendidos" >

            <div class="position-relative" style="height:250px" justify-content:center;>

                <img src="${producto.img}" 
                     class="card-img-top"
                     style="height: 220px; object-fit: contain; cursor:pointer; transition:0.3s;" 
                     alt="${producto.Name}"
                     onclick="verProducto(${producto.id})">

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
    <img src="${productos[0].img}" onclick="verProducto(${productos[0].id})" alt="">
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

              
            </div>

            <img
              src="${producto.img}"
              class="img-fluid p-3"
              style="max-height: 260px; object-fit: contain ;cursor:pointer; transition:0.3s;"
              alt="${producto.Name}"
              onclick="verProducto(${producto.id})"
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



/*funcion para ver detalles del producto de la tarjeta*/
function verProducto(id) {
  window.location.href = `../pages/detallesProducto.html?id=${id}`;
}