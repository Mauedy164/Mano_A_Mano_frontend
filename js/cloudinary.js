/*
==============================
|    Widget Cloudinary   |
==============================
*/

let tipoImagen = "";
let imagenesAdicionales = [];

// Crear widget
var widget = cloudinary.createUploadWidget({

    cloudName: 'dd3s8vbun',
    uploadPreset: 'uw_test',
    multiple: true

}, function(error, result){

    if (!error && result.event === "success"){

        let url = result.info.secure_url;

        console.log(url);

        if(tipoImagen === "principal"){

            document.getElementById("previewPrincipal").innerHTML =
            `<img src="${url}" width="200">`;

            document.getElementById("imagenPrincipalURL").value = url;

        }

        if(tipoImagen === "adicional"){

            imagenesAdicionales.push(url);

            document.getElementById("previewAdicionales").innerHTML +=
            `<img src="${url}" width="120">`;

            document.getElementById("imagenesAdicionalesURL").value =
            JSON.stringify(imagenesAdicionales);

        }

    }

});


// ==========================
// BLOQUEAR INPUT NORMAL
// ==========================

document.getElementById("formularioImagenPrincipalProducto")
.addEventListener("click", function(e){

    e.preventDefault();
    e.stopPropagation();

});


document.getElementById("formularioImagenesAdicionalesProducto")
.addEventListener("click", function(e){

    e.preventDefault();
    e.stopPropagation();

});


// ==========================
// ABRIR CLOUDINARY
// ==========================

document.getElementById("dropZonaPrincipal")
.addEventListener("click", function(e){

    e.preventDefault();
    tipoImagen = "principal";
    widget.open();

});


document.getElementById("dropZonaAdicionales")
.addEventListener("click", function(e){

    e.preventDefault();
    tipoImagen = "adicional";
    widget.open();

});