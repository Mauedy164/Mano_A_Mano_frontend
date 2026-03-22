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
    if (descripcionProducto==="" || descripcionProducto.length <=15 || descripcionProducto.length>=600){
        formularioDescripcionProducto.classList.add("is-invalid")
       let errorDescripcion = document.createElement("div")
       if(descripcionProducto.length <=15){
        errorDescripcion.textContent = "Ingresa una descripción con al menos 15 carácteres"
       } else if(descripcionProducto.length>=600){
        errorDescripcion.textContent = "El límite de 600 caracteres"
       }
       
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

/*
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
*/

//Validar dimensiones

const dimensionesNo = document.getElementById("dimensionesNo");
const dimensionesSi = document.getElementById("dimensionesSi");
const inputsDimension = document.querySelectorAll(".input-dimension"); 
const dimensiones_main_container = document.getElementById("dimensiones_main_container"); 

// FUNCIÓN PARA HABILITAR / DESHABILITAR
function actualizarEstadoDimensiones() {
    if (dimensionesNo.checked) {
        // Bloqueamos los 3 inputs y limpiamos valores/estilos
        inputsDimension.forEach(input => {
            input.disabled = true;
            input.value = "";
            input.classList.remove("is-valid", "is-invalid");
        });
        
        // Borramos el mensaje de error si existía
        const errorPrevio = dimensiones_main_container.querySelector(".error-mensaje-js");
        if (errorPrevio) errorPrevio.remove();
    } else {
        // Habilitamos los campos para escribir
        inputsDimension.forEach(input => input.disabled = false);
        // Ponemos el foco en el primer campo (largo)
        const largoInput = document.getElementById("largo");
        if (largoInput) largoInput.focus();
    }
}


function isValidDimensiones() {
    // Limpiamos estilos de los inputs y buscamos errores previos
    inputsDimension.forEach(input => input.classList.remove("is-invalid", "is-valid"));
    const errorPrevio = dimensiones_main_container.querySelector(".error-mensaje-js");
    if (errorPrevio) errorPrevio.remove();

    let todasValidas = true;
    let algunNegativo = false;

    // Evaluamos los 3 campos (Largo, Ancho, Alto)
    inputsDimension.forEach(input => {
        const val = parseFloat(input.value);
        // Si está vacío, no es un número o es menor/igual a 0
        if (input.value === "" || isNaN(val) || val <= 0) {
            todasValidas = false;
            if (val < 0) algunNegativo = true;
        }
    });

    if (!todasValidas) {
        // Marcamos los campos en rojo
        inputsDimension.forEach(input => {
            if (input.value === "" || parseFloat(input.value) <= 0) {
                input.classList.add("is-invalid");
            }
        });
        
        
        const errorDiv = document.createElement("div");
        errorDiv.className = "error-mensaje-js text-danger small mt-1";
        errorDiv.style.fontSize = "0.75rem";
        errorDiv.textContent = algunNegativo 
            ? "Las dimensiones deben ser números positivos." 
            : "Por favor, complete las tres dimensiones (cm).";
        
        dimensiones_main_container.appendChild(errorDiv);
        return false;
    } else {
        inputsDimension.forEach(input => input.classList.add("is-valid"));
        return true;
    }
}


dimensionesNo.addEventListener("change", actualizarEstadoDimensiones);
dimensionesSi.addEventListener("change", actualizarEstadoDimensiones);

inputsDimension.forEach(input => {
    input.addEventListener("input", isValidDimensiones);
});

actualizarEstadoDimensiones();


//Validar color

document.addEventListener('DOMContentLoaded', function() {
  const coloresSin = document.getElementById('coloresSin');
  const opcionesRadios = document.querySelectorAll('.radio-color');
  const colorPrincipalContainer = document.getElementById('colorPrincipal_container');
  const colorSecundarioContainer = document.getElementById('colorSecundario_container');

  // Función para manejar el bloqueo y la visibilidad
  function actualizarEstadoColores() {
    if (coloresSin.checked) {
      // BLOQUEAR: Si no hay colores, desactivamos y desmarcamos radios
      opcionesRadios.forEach(radio => {
        radio.disabled = true;
        radio.checked = false;
      });
      // OCULTAR: Escondemos los selectores de color
      colorPrincipalContainer.style.display = 'none';
      colorSecundarioContainer.style.display = 'none';
    } else {
      // DESBLOQUEAR: El usuario quiere colores, habilitamos los radios
      opcionesRadios.forEach(radio => radio.disabled = false);
    }
  }

  // Escuchar el Checkbox maestro
  coloresSin.addEventListener('change', actualizarEstadoColores);

  // Escuchar los radios para mostrar 1 o 2 colores
  opcionesRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      const valor = this.value;
      colorPrincipalContainer.style.display = (valor === 'si' || valor === 'mas') ? 'block' : 'none';
      colorSecundarioContainer.style.display = (valor === 'mas') ? 'block' : 'none';
    });
  });

  // Inicialización al cargar la página
  actualizarEstadoColores();
});




//Almacenar en localStorage el objeto JSON de registro de producto

const btnRegistrar = document.getElementById("btnRegistrar");

// evitar múltiples eventos
btnRegistrar.onclick = function (e) {
    e.preventDefault(); // evita submit automático

    console.log("CLICK DETECTADO"); 

    // =========================
    // VALIDACIONES
    // =========================
    nameIsValid();
    descriptionIsValid();
    isValidPrice();
    isValdidAmount();
    isValidTag();
    isValidBrand();
    isValidModelo();
    isValidPeso();
    isValidVolumen();
    isValidDimensiones();

    const camposConError = document.querySelectorAll(".is-invalid");
    const urlImagenPrincipal = document.getElementById("imagenPrincipalURL").value;

    // =========================
    // VALIDAR ERRORES
    // =========================
    if (camposConError.length > 0) {
        Swal.fire({
            icon: 'error',
            title: '¡Espera!',
            text: 'Hay errores en el formulario. Revisa los campos en rojo.',
        });
        return;
    }

    if (!urlImagenPrincipal) {
        Swal.fire({
            icon: 'warning',
            title: 'Falta la imagen',
            text: 'Debes subir la imagen principal.',
        });
        return;
    }

    // =========================
    // CREAR OBJETO
    // =========================
    const nuevoProducto = {
        nombre: document.getElementById("formularioNombreProducto").value.trim(),
        descripcion: document.getElementById("formularioDescripcionProducto").value.trim(),
        precio: parseFloat(document.getElementById("formularioPrecioProducto").value),
        cantidad: parseInt(document.getElementById("formularioCantidadProducto").value),
        tags: document.getElementById("formularioTagsProducto").value.split(/\s+/),
        imagenPrincipal: urlImagenPrincipal,
        imagenesAdicionales: JSON.parse(document.getElementById("imagenesAdicionalesURL").value || "[]"),
        detalles: {
            colorSin: document.getElementById("coloresSin").checked,
            colorPrincipal: document.getElementById("colorPrincipal").value,
            colorSecundario: document.getElementById("colorSecundario").value,
            marca: document.getElementById("marcaCheck").checked ? "Sin Marca" : document.getElementById("marcaTexto").value,
            modelo: document.getElementById("modeloSin").checked ? "Sin Modelo" : document.getElementById("modeloTexto").value,
            tamano: document.querySelector('input[name="tamano"]:checked')?.value || "No aplica",
            peso: document.getElementById("pesoNo").checked ? null : document.getElementById("pesoNum").value,
            volumen: document.getElementById("volumenNo").checked ? null : document.getElementById("volumenNum").value,
            dimensiones: document.getElementById("dimensionesNo").checked ? null : {
                largo: document.getElementById("largo").value,
                ancho: document.getElementById("ancho").value,
                alto: document.getElementById("alto").value
            }
        }
    };

    // =========================
    // PROTECCIÓN ANTI VACÍOS
    // =========================
    if (!nuevoProducto.nombre && !nuevoProducto.descripcion) {
        console.warn("Producto vacío detectado, no se guarda");
        return;
    }

    // =========================
    // GUARDAR
    // =========================
    guardarEnLocalStorage(nuevoProducto);
};


// =========================
// LOCAL STORAGE
// =========================
function guardarEnLocalStorage(producto) {

    let productosGuardados = JSON.parse(localStorage.getItem("misProductos")) || [];

    productosGuardados.push(producto);

    localStorage.setItem("misProductos", JSON.stringify(productosGuardados));

    // Mensaje
    Swal.fire({
        icon: 'success',
        title: '¡Producto Registrado!',
        text: 'Se guardó correctamente en el almacenamiento local.',
        confirmButtonText: 'OK'
    });
}