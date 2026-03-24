document.addEventListener("DOMContentLoaded", cargarProducto);

async function cargarProducto(){

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const response = await fetch("../data/products.json");
    const productos = await response.json();

    const producto = productos.find(p => p.id == id);
    

    if(!producto) return;

    document.querySelector(".product-title").textContent = producto.Name;
    document.querySelector(".product-price").textContent = `$${producto.Price}`;
    document.querySelector(".product-description").textContent = producto.Description;

    document.querySelector(".gallery-main-image img").src = producto.img;
    //imagenes laterales
    document.querySelector(".Vistalateral").src = producto.img;
    document.querySelector(".Vistalateral1").src = producto.img;
    document.querySelector(".Vistalateral2").src = producto.img;
    document.querySelector(".Vistalateral3").src = producto.img;
    
    //colores
const contenedorColores = document.querySelector(".color-options");

producto.Product_details.color.forEach(color => {

    const boton = document.createElement("button");

    boton.classList.add("color-btn");

    // aplica color
    boton.style.backgroundColor = color;

    boton.setAttribute("aria-label", `Seleccionar color ${color}`);

    contenedorColores.appendChild(boton);

});

//carga productos relacionados

const contenedorRelacionados = document.getElementById("relatedProducts");

// filtrar productos que NO sea el actual
const relacionados = productos
    .filter(p => p.id !== producto.id)
    .slice(0,4); 

relacionados.forEach(item => {

    const card = document.createElement("article");
    card.classList.add("product-card");

    card.innerHTML = `
    
    <div class="card-image-wrapper">
        <span class="discount-badge">40%</span>

        <div class="card-hover-actions">
            
        </div>

        <img src="${item.img}" alt="${item.Name}" style="height: 220px; object-fit: contain; cursor:pointer; transition:0.3s; onclick="verProducto(${item.id})">

        <button class="btn-add-to-cart"
        onclick="agregarAlCarrito(${item.id}, '${item.Name}', ${item.Price}, '${item.img}')">
        Agregar al carrito
        </button>
    </div>

    <div class="card-details">
        <h3 class="card-title">${item.Name}</h3>

        <div class="card-price">
            <span class="current-price text-red">$${item.Price}</span>
        </div>

        <div class="card-rating">
            ⭐⭐⭐⭐⭐ <span class="reviews">(88)</span>
        </div>
    </div>

    `;

    contenedorRelacionados.appendChild(card);

});
    
    }

function verProducto(id){
    window.location.href = `detallesProducto.html?id=${id}`;
}
