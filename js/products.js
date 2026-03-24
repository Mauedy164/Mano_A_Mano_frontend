window.addEventListener("load", () => {
  listaProductos();
});

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

const categoriasMap = {
  textiles: ["ropa", "rebozo", "textil"],
  gastronomia: ["cafe"],
  accesorios: ["collar", "pulsera", "joyería", "sombrero"],
  cocina: ["taza", "cocina"],
  artesanias: ["alebrije", "barro", "arte"],
  hogar: ["hogar", "canasta", "mimbre", "decoración"],
};

async function listaProductos() {
  try {
    // CHANGED: Fetch from your API instead of JSON file
    const response = await fetch("http://34.201.41.216/ecommerce/productos/");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const productos = await response.json();

    const contenedor = document.getElementById("listaProductos");
    contenedor.innerHTML = "";

    // obtener parametro de busqueda
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q");
    const categoria = params.get("cat");

    let productosFiltrados = productos;

    if (query) {
      const busqueda = query.toLowerCase();

      productosFiltrados = productos.filter((producto) => {
        // CHANGED: Updated field names to match your database
        const nombre = (producto.nombre || "").toLowerCase();
        const tags = (producto.tags || "").toLowerCase();

        return nombre.includes(busqueda) || tags.includes(busqueda);
      });
    }

    if (categoria) {
      const tagsCategoria = categoriasMap[categoria.toLowerCase()];

      if (tagsCategoria) {
        productosFiltrados = productosFiltrados.filter((producto) => {
          // CHANGED: Handle tags as string, not array
          const tagsProducto = (producto.tags || "")
            .toLowerCase()
            .split(",")
            .map((t) => t.trim());

          return tagsProducto.some((tag) => tagsCategoria.includes(tag));
        });
      }
    }

    productosFiltrados.forEach((producto) => {
      const card = document.createElement("div");
      card.classList.add("col-md-3", "mb-4");

      // CHANGED: Updated to use database field names
      card.innerHTML = `
            <div class="card h-100 shadow-sm card-masvendidos">

                <div class="position-relative" style="height:250px" justify-content:center;>

                    <img src="${producto.imagenUrl || "../media/products/default.png"}" 
                         class="card-img-top"
                         style="height: 220px; object-fit: contain; cursor:pointer; transition:0.3s;"
                         onclick="verProducto(${producto.id})">

                    <!-- SE COMENTA PARA IMPLEMENTAR DESPUÉS    
                    <button class="btn-favorito">
                        <img src="../media/products/botonfavoritos.png">
                    </button>
                    -->

                    <button class="btn btn-dark w-100 py-2 fw-bold text-uppercase btn-add-to-cart"
                     onclick="agregarAlCarrito(${producto.id}, '${escapeJs(producto.nombre)}', ${producto.precio},'${escapeJs(producto.imagenUrl)}')">
                        Agregar al carrito
                    </button>

                </div>

                <div class="card-body">
                    <h6 class="card-title">${escapeHtml(producto.nombre)}</h6>

                    <p class="text-danger fw-bold">
                        $${producto.precio}
                    </p>

                    <p class="text-muted small">
                        ${escapeHtml(producto.marca || "")}
                    </p>
                </div>

            </div>
            `;

      contenedor.appendChild(card);
    });

    if (productosFiltrados.length === 0) {
      contenedor.innerHTML = `
            <div class="text-center mt-5">
                <h4>No se encontraron productos</h4>
            </div>
            `;
    }
  } catch (error) {
    console.error("Error cargando productos:", error);

    // Show user-friendly error message
    const contenedor = document.getElementById("listaProductos");
    contenedor.innerHTML = `
        <div class="text-center mt-5">
            <h4>Error al cargar productos</h4>
            <p class="text-muted">Por favor, intenta de nuevo más tarde</p>
        </div>
        `;
  }
}

function verProducto(id) {
  window.location.href = `detallesProducto.html?id=${id}`;
}

//funciones para el formato
function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function escapeJs(str) {
  if (!str) return "";
  return String(str).replace(/'/g, "\\'").replace(/"/g, '\\"');
}
