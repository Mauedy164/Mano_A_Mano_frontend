//Extracción de inputs
const formularioNombreProducto = document.getElementById("formularioNombreProducto")

//Extracción de contenedores
const nameProductForm_container = document.getElementById("nameProductForm_container")


//Validar nombre entre 3 y 70 caracteres
function nameIsValid(){

    formularioNombreProducto.classList.remove("is-valid", "is-invalid")

    const errorPrevioNombre = nameProductForm_container.querySelector(".invalid-feedback")
    if (errorPrevioNombre) {
        errorPrevioNombre.remove();
    }

    let nombreProducto = formularioNombreProducto.value.trim()
    if (nombreProducto==="" || nombreProducto.length <=2 || nombreProducto.length>=70){
        formularioNombreProducto.classList.add("is-invalid")
       let errorNombre = document.createElement("div")
       errorNombre.textContent = "Ingresa un nombre válido"
       errorNombre.classList.add("invalid-feedback");
       
       nameProductForm_container.appendChild(errorNombre)

    } else {
       formularioNombreProducto.classList.add("is-valid") 
    }
}
formularioNombreProducto.addEventListener("input", nameIsValid);


// INPUT DESCRIPCION

//Extracción de inputs
const formularioDescripcionProducto = document.getElementById("formularioDescripcionProducto")

//Extracción de contenedores
const descriptionProductForm_container = document.getElementById("descriptionProductForm_container")

formularioDescripcionProducto.addEventListener("input", descriptionIsValid)
//Validar nombre entre 5 y 600 caracteres
function descriptionIsValid(){

    formularioDescripcionProducto.classList.remove("is-valid", "is-invalid")

    const errorPrevioDescripcion = descriptionProductForm_container.querySelector(".invalid-feedback")
    if (errorPrevioDescripcion) {
        errorPrevioDescripcion.remove();
    }

    let descripcionProducto = formularioDescripcionProducto.value.trim()
    if (descripcionProducto==="" || descripcionProducto.length <=5 || descripcionProducto.length>=600){
        formularioDescripcionProducto.classList.add("is-invalid")
       let errorDescripcion = document.createElement("div")
       errorDescripcion.textContent = "Ingresa una descripción con al menos 5 carácteres"
       errorDescripcion.classList.add("invalid-feedback");
       
       descriptionProductForm_container.appendChild(errorDescripcion)

    } else {
       formularioDescripcionProducto.classList.add("is-valid") 
    }
}

//Valida precio

const formularioPrecioProducto = document.getElementById("formularioPrecioProducto")
const priceProductForm_container = document.getElementById("priceProductForm_container")


formularioPrecioProducto.addEventListener("input" , isValidPrice)

function isValidPrice(){

    formularioPrecioProducto.classList.remove("is-valid", "is-invalid")

    let errorPrevioPrecio = priceProductForm_container.querySelector(".invalid-feedback")
    if (errorPrevioPrecio){
        errorPrevioPrecio.remove()
    }

    //Extraemos el valor ingresado por el usuario
    let precio = parseFloat(formularioPrecioProducto.value)
    console.log(precio);
    if (precio < .01 || isNaN(precio) || precio >=1000000){

        formularioPrecioProducto.classList.add("is-invalid")
        let errorPrecio = document.createElement("div")
        errorPrecio.textContent="Sólo se adminten valores positivos y mayores a $0.00 y menores a $1,000,000.00"
        errorPrecio.classList.add("invalid-feedback")
        priceProductForm_container.appendChild(errorPrecio)
    } else {
        formularioPrecioProducto.classList.add("is-valid")
    }
}

//CANTIDAD DE PRODUCTOS A VENDER

