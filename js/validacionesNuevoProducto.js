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

const formularioCantidadProducto = document.getElementById("formularioCantidadProducto")

const amountProductForm_container = document.getElementById("amountProductForm_container")

formularioCantidadProducto.addEventListener("input", isValdidAmount)

//Valida que no sean cantidades menores a 1 ni mayores a 150 piezas
function isValdidAmount(){
    formularioCantidadProducto.classList.remove("is-invalid", "is-valid")

    let errorPrevioCantidad = amountProductForm_container.querySelector(".invalid-feedback")

    if (errorPrevioCantidad){
        errorPrevioCantidad.remove()
    }
    
    let cantidad = formularioCantidadProducto.value
    if (cantidad <1 || cantidad>150 || (cantidad%1 >0)){

        formularioCantidadProducto.classList.add("is-invalid")

        let errorCantidad = document.createElement("div")
        errorCantidad.classList.add("invalid-feedback")
        errorCantidad.textContent="Sólo se admiten cantidades desde 1 hasta 150 piezas y que sean enteros"
        amountProductForm_container.appendChild(errorCantidad)
    } else {
        formularioCantidadProducto.classList.add("is-valid")
    }

}

//Tags



//Valida que sean máximo 20, que inicien con #, que sea almenos 1

const formularioTagsProducto = document.getElementById("formularioTagsProducto")

const tagProductForm_container = document.getElementById("tagProductForm_container")

formularioTagsProducto.addEventListener("input", isValidTag)

function isValidTag(){
     formularioTagsProducto.classList.remove("is-invalid", "is-valid")
     let errorPrevioTag = tagProductForm_container.querySelector(".invalid-feedback")

     if (errorPrevioTag ){
         errorPrevioTag.remove()
    }
    let cantidadTags = formularioTagsProducto.value.toLowerCase().split(/\s+/)
    const hayDuplicados= new Set(cantidadTags).size !== cantidadTags.length
    cantidadTags = cantidadTags.length
    let tags = formularioTagsProducto.value
    const regex = /^(#[a-zA-Z0-9áéíóúñ]+\s*)+$/;
    const esValido = regex.test(tags);



    if(cantidadTags<1 || !esValido || cantidadTags>20 || hayDuplicados){
        formularioTagsProducto.classList.add("is-invalid")
        let errorTag = document.createElement("div")
        errorTag.classList.add("invalid-feedback")
        errorTag.textContent="Debes ingresar al menos 1 tag y máximo 20, Todos deben iniciar con # y no se deben repetir"
        tagProductForm_container.appendChild(errorTag)
    } else {
        formularioTagsProducto.classList.add("is-valid")
    }

}


//Tamaño
const tamanoNo = document.getElementById("tamanoNo");
const opcionesTamano = document.querySelectorAll(".radio-size");
const tamano_container = document.getElementById("tamano_container");

function actualizarEstadoTamano() {
    if (tamanoNo.checked) {
        // Bloqueamos y desmarcamos todos los radios
        opcionesTamano.forEach(radio => {
            radio.disabled = true;
            radio.checked = false;
        });
        
        opcionesTamano.forEach(radio => radio.classList.remove("is-invalid", "is-valid"));
        
        let errorPrevio = tamano_container.querySelector(".invalid-feedback");
        if (errorPrevio) errorPrevio.remove();
    } else {
        // Habilitamos los radios para que el usuario elija
        opcionesTamano.forEach(radio => {
            radio.disabled = false;
        });
    }
}

tamanoNo.addEventListener("change", actualizarEstadoTamano);

actualizarEstadoTamano();


// Validar marca

const marcaCheck = document.getElementById("marcaCheck")
const marcaTexto = document.getElementById("marcaTexto")
const marcaTexto_container = document.getElementById("marcaTexto_container")


if(marcaCheck.checked){
    marcaTexto.disabled = true;
} else{
    marcaTexto.disabled = false;
}

marcaCheck.addEventListener("change", function() {
    if(marcaCheck.checked){
        marcaTexto.disabled = true;
        marcaTexto.value = ""; 
        marcaTexto.classList.remove("is-valid", "is-invalid");
    } else{
        marcaTexto.disabled = false;
    
        marcaTexto.focus();
    }
});


marcaTexto.addEventListener("input", isValidBrand)

function isValidBrand(){
    marcaTexto.classList.remove("is-invalid", "is-valid")
     let errorPrevioMarca = marcaTexto_container.querySelector(".invalid-feedback")

     if (errorPrevioMarca ){
         errorPrevioMarca.remove()
    }

    let marca = marcaTexto.value
    const regexMarca = /^[a-zA-Z0-9ÁÉÍÓÚáéíóúÑñüÜ\s&'.-]{2,50}$/
     const esValido = regexMarca.test(marca);

    if (!esValido){

        marcaTexto.classList.add("is-invalid")
        let errorMarca = document.createElement("div")
        errorMarca.classList.add("invalid-feedback")
        errorMarca.textContent=""
        marcaTexto_container.appendChild(errorMarca)
    } else {
        marcaTexto.classList.add("is-valid")
    }
}


// Validar modelo

const modeloSin = document.getElementById("modeloSin")
const modeloTexto = document.getElementById("modeloTexto")
const modeloTexto_container = document.getElementById("modeloTexto_container")


if(modeloSin.checked){
    modeloTexto.disabled = true;
} else{
    modeloTexto.disabled = false;
}

modeloSin.addEventListener("change", function() {
    if(modeloSin.checked){
        modeloTexto.disabled = true;
        modeloTexto.value = ""; 
        modeloTexto.classList.remove("is-valid", "is-invalid");
    } else{
        modeloTexto.disabled = false;
    
        modeloTexto.focus();
    }
});


modeloTexto.addEventListener("input", isValidModelo)

function isValidModelo(){
    modeloTexto.classList.remove("is-invalid", "is-valid")
     let errorPrevioModelo = modeloTexto_container.querySelector(".invalid-feedback")

     if ( errorPrevioModelo ){
         errorPrevioModelo.remove()
    }

    let modelo = modeloTexto.value
    const regexModelo = /^[a-zA-Z0-9ÁÉÍÓÚáéíóúÑñüÜ\s&'.-]{2,50}$/
     const esValido = regexModelo.test(modelo);

    if (!esValido){

        modeloTexto.classList.add("is-invalid")
        let errorModelo = document.createElement("div")
        errorModelo.classList.add("invalid-feedback")
        errorModelo.textContent=""
        modeloTexto_container.appendChild(errorMarca)
    } else {
        modeloTexto.classList.add("is-valid")
    }
}


// Validar peso

const pesoNo = document.getElementById("pesoNo");
const pesoSi = document.getElementById("pesoSi"); // Ahora usamos el radio de "Si"
const pesoNum = document.getElementById("pesoNum");
const pesoNum_container = document.getElementById("pesoNum_container");

// Función para manejar el estado del input (Habilitar/Deshabilitar)
function actualizarEstadoPeso() {
    if (pesoNo.checked) {
        pesoNum.disabled = true;
        pesoNum.value = ""; 
        pesoNum.classList.remove("is-valid", "is-invalid");
        
        let errorPrevio = pesoNum_container.querySelector(".invalid-feedback");
        if (errorPrevio) errorPrevio.remove();
    } else {
        pesoNum.disabled = false;
        pesoNum.focus();
    }
}

pesoNo.addEventListener("change", actualizarEstadoPeso);
pesoSi.addEventListener("change", actualizarEstadoPeso);

pesoNum.addEventListener("input", isValidPeso); // Evento de validación

function isValidPeso() {
    // Limpiar estados previos
    pesoNum.classList.remove("is-invalid", "is-valid");
    let errorPrevioPeso = pesoNum_container.querySelector(".invalid-feedback");

    if (errorPrevioPeso) {
        errorPrevioPeso.remove();
    }

    let pesoValue = pesoNum.value;

    const esValido = pesoValue !== "" && !isNaN(pesoValue) && parseFloat(pesoValue) > 0;

    if (!esValido) {
        pesoNum.classList.add("is-invalid");
        let errorPeso = document.createElement("div");
        errorPeso.classList.add("invalid-feedback");
        
        // Mensaje personalizado según el error
        if (parseFloat(pesoValue) < 0) {
            errorPeso.textContent = "El peso no puede ser un número negativo.";
        } else {
            errorPeso.textContent = "Por favor, ingrese un peso válido.";
        }
        
        pesoNum_container.appendChild(errorPeso);
    } else {
        pesoNum.classList.add("is-valid");
    }
}


// Validar Volumen

const volumenNo = document.getElementById("volumenNo");
const volumenSi = document.getElementById("volumenSi");
const volumenNum = document.getElementById("volumenNum");
const volumenNum_container = document.getElementById("volumenNum_container");

// Función para manejar el estado del input (Habilitar/Deshabilitar)
function actualizarEstadoVolumen() {
    if (volumenNo.checked) {
        volumenNum.disabled = true;
        volumenNum.value = ""; 
        volumenNum.classList.remove("is-valid", "is-invalid");
        
        let errorPrevio = volumenNum_container.querySelector(".invalid-feedback");
        if (errorPrevio) errorPrevio.remove();
    } else {
        volumenNum.disabled = false;
        if(volumenSi.checked) volumenNum.focus()
    }
}

volumenNo.addEventListener("change", actualizarEstadoVolumen);
volumenSi.addEventListener("change", actualizarEstadoVolumen);

volumenNum.addEventListener("input", isValidVolumen); // Evento de validación

function isValidVolumen() {
    // Limpiar estados previos
    volumenNum.classList.remove("is-invalid", "is-valid");
    let errorPrevioVolum = volumenNum_container.querySelector(".invalid-feedback");

    if (errorPrevioVolum) {
        errorPrevioVolum.remove();
    }

    let volumenValue = volumenNum.value;

    const esValido = volumenValue !== "" && !isNaN(volumenValue) && parseFloat(volumenValue) > 0;

    if (!esValido) {
        volumenNum.classList.add("is-invalid");
        let errorVolumen = document.createElement("div");
        errorVolumen.classList.add("invalid-feedback");
        
        if (parseFloat(volumenValue) < 0) {
            errorVolumen.textContent = "El volumen no puede ser un número negativo.";
        } else {
            errorVolumen.textContent = "Por favor, ingrese un volumen válido.";
        }
        
        volumenNum_container.appendChild(errorVolumen);
    } else {
        volumenNum.classList.add("is-valid");
    }
}

/*=======================
| FORMULARIO DE COLORES |
========================*/

document.addEventListener('DOMContentLoaded', function() {
  const radios = document.querySelectorAll('input[name="colores"]');
  const colorPrincipalContainer = document.getElementById('colorPrincipal_container');
  const colorSecundarioContainer = document.getElementById('colorSecundario_container');

  radios.forEach(radio => {
    radio.addEventListener('change', function() {
      const showPrincipal = this.value === 'si' || this.value === 'mas';
      const showSecundario = this.value === 'mas';
      
      colorPrincipalContainer.style.display = showPrincipal ? 'block' : 'none';
      colorSecundarioContainer.style.display = showSecundario ? 'block' : 'none';
    });
  });
});
