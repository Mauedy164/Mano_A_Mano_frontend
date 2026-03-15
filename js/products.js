window.addEventListener("load", () => {
    listaProductos();
});

function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

async function listaProductos() {

    try {

        const response = await fetch("../data/products.json");
        const productos = await response.json();

        const contenedor = document.getElementById("listaProductos");
        contenedor.innerHTML = "";

        // obtener parametro de busqueda
        const params = new URLSearchParams(window.location.search);
        const query = params.get("q");

        let productosFiltrados = productos;

        if (query) {

            const busqueda = query.toLowerCase();

            productosFiltrados = productos.filter(producto => {

                const nombre = producto.Name.toLowerCase();

                const tags = producto.Tags.join(" ").toLowerCase();

                return nombre.includes(busqueda) || tags.includes(busqueda);

            });

        }

        productosFiltrados.forEach(producto => {

            const card = document.createElement("div");
            card.classList.add("col-md-3", "mb-4");

            card.innerHTML = `
            <div class="card h-100 shadow-sm card-masvendidos">

                <div class="position-relative">

                    <img src="${producto.img}" 
                         class="card-img-top"
                         style="height: 250px; object-fit: cover; cursor:pointer;"
                         onclick="verProducto(${producto.id})">

                    <button class="btn-favorito">
                        <img src="../media/products/botonfavoritos.png">
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

        if(productosFiltrados.length === 0){

            contenedor.innerHTML = `
            <div class="text-center mt-5">
                <h4>No se encontraron productos</h4>
            </div>
            `;

        }

    } catch (error) {

        console.error("Error cargando productos:", error);

    }

}

function verProducto(id){
    window.location.href = `detallesProducto.html?id=${id}`;
}

//fiunciones para elformato
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function escapeJs(str) {
  if (!str) return '';
  return String(str).replace(/'/g, "\\'").replace(/"/g, '\\"');
}