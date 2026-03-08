document.addEventListener("DOMContentLoaded", () => {
    listaProductos();
});

async function listaProductos() {
    try {
        const response = await fetch("../data/products.json");
        const productos = await response.json();

        const contenedor = document.getElementById("listaProductos");

        //limita cuántos mostrar
        productos.forEach(producto => {

            const card = document.createElement("div");
            card.classList.add("col-md-3", "mb-4");

            card.innerHTML = `
    <div class="card h-100 shadow-sm card-masvendidos">

        <div class="position-relative">

            <img src="${producto.img}" 
                 class="card-img-top"
                 style="height: 250px; object-fit: cover; cursor:pointer;"
                 onclick="verProducto(${producto.id})" 
                 alt="${producto.Name}">

            <!-- Botón Favorito -->
            <button class="btn-favorito">
                <img src="../media/products/botonfavoritos.png" alt="Favorito">
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
function verProducto(id){
    window.location.href = `detallesProducto.html?id=${id}`;
}