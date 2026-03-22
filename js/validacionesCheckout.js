/*
==============================
| Validacion Nombre Completo  |
==============================
*/
function iniciarValidacionNombre() {
  const userName = document.getElementById("userName");

  // Mínimo 2 palabras (en este caso el nombre y apellido), solo letras y espacios
  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(\s+[A-Za-zÁÉÍÓÚáéíóúÑñ]+)+$/;

  userName.addEventListener("input", function () {
    const nombre = userName.value.trim();

    if (nombre === "") {
      userName.classList.remove("is-valid", "is-invalid");
      return;
    }

    if (regexNombre.test(nombre)) {
      userName.classList.add("is-valid");
      userName.classList.remove("is-invalid");
    } else {
      userName.classList.add("is-invalid");
      userName.classList.remove("is-valid");
    }
  });
}

document.addEventListener("DOMContentLoaded", iniciarValidacionNombre);

/*
===================================
| Validacion Telefono de Contacto  |
===================================
*/
document.addEventListener("DOMContentLoaded", function () {
  
  const telefonoInput = document.getElementById("userPhone");

  telefonoInput.addEventListener("input", function () {
    const telefono = telefonoInput.value.trim();

    
    telefonoInput.classList.remove("is-valid", "is-invalid");

    // longitud (10 dígitos exactos)
    if (!/^\d{10}$/.test(telefono)) {
      telefonoInput.classList.add("is-invalid");
      return;
    }

    // Evitar todos los números iguales (ej: 1111111111)
    if (/^(\d)\1{9}$/.test(telefono)) {
      telefonoInput.classList.add("is-invalid");
      return;
    }

    // Evitar 4 o más números iguales consecutivos (ej: 5555)
    if (/(\d)\1{3,}/.test(telefono)) {
      telefonoInput.classList.add("is-invalid");
      return;
    }

    // Evitar secuencias consecutivas (ej: 0123456789)
    const secuenciaAsc = "0123456789";
    const secuenciaDesc = "9876543210";

    if (
      secuenciaAsc.includes(telefono) ||
      secuenciaDesc.includes(telefono)
    ) {
      telefonoInput.classList.add("is-invalid");
      return;
    }

    
    telefonoInput.classList.add("is-valid");
  });
});

/*
==============================
| Validacion Codigo postal   |
==============================
*/
const cpInput = document.getElementById('userCP');

cpInput.addEventListener('input', (e) => {
    // Elimina cualquier caracter que no sea un número
    let value = e.target.value.replace(/\D/g, '');
    
    // Limita a un máximo de 5 dígitos
    if (value.length > 5) {
        value = value.slice(0, 5);
    }
    
    e.target.value = value;

    // Validación (mínimo 5 dígitos para ser válido)
    if (value.length === 5) {
        cpInput.style.borderColor = '#28a745'; // Valido
    } else {
        cpInput.style.borderColor = '#dc3545'; // Error
    }
});


/*
==============================
|     Validacion Estado     |
==============================
*/
const stateInput = document.getElementById('userState');

// Lista de los 32 estados de México
const estadosMexico = [
  "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", 
  "Chihuahua", "Ciudad de México", "Coahuila", "Colima", "Durango", "Estado de México", 
  "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit", 
  "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", 
  "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
];

stateInput.addEventListener('blur', (e) => {
    const valor = e.target.value.trim();
    
    // Normalizamos el texto (quitamos acentos y pasamos a minúsculas para comparar)
    const normalizar = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    
    // Buscamos si lo que se escribió coincide con algún estado de la lista
    const esValido = estadosMexico.some(estado => normalizar(estado) === normalizar(valor));

    if (valor === "") {
        stateInput.style.borderColor = ""; 
    } else if (esValido) {
        stateInput.style.borderColor = "#28a745"; // Válido
        console.log("Estado aceptado");
    } else {
        stateInput.style.borderColor = "#dc3545"; // No existe
        alert("Por favor, ingresa un nombre de estado válido de México.");
    }
});

// Bloquear entrada de números 
stateInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[0-9]/g, '');
});

/*
=====================================
| Validacion Delegacion o Municipio  |
=====================================
*/
const municipioInput = document.getElementById('userMunicipio');

municipioInput.addEventListener('input', (e) => {
    const valor = e.target.value;
    //  Solo letras (incluye Ñ y acentos) y espacios. Entre 3 y 50 caracteres.
    const regex = /^[a-zA-ZÀ-ÿ\s]{3,50}$/;

    if (regex.test(valor)) {
        municipioInput.style.borderColor = "green";
        municipioInput.setCustomValidity(""); // Campo válido
    } else {
        municipioInput.style.borderColor = "red";
        municipioInput.setCustomValidity("Ingrese un municipio válido (solo letras, mín. 3)");
    }
});

/*
==============================
|    Validacion Colonia      |
==============================
*/
const coloniaInput = document.getElementById('userColonia');

coloniaInput.addEventListener('input', (e) => {
    const valor = e.target.value.trim();
    
    // Letras, números, espacios, puntos y guiones. Mínimo 4 caracteres.
    const regexColonia = /^[a-zA-ZÀ-ÿ0-9\s.\-]{4,60}$/;

    if (regexColonia.test(valor)) {
        coloniaInput.setCustomValidity(""); 
        coloniaInput.style.border = "2px solid #28a745"; // Valido
    } else {
        coloniaInput.setCustomValidity("La colonia debe tener al menos 4 caracteres y no usar símbolos especiales.");
        coloniaInput.style.border = "2px solid #dc3545"; // Error
    }
});

/*
==============================
|      Validacion Calle      |
==============================
*/
const calleInput = document.getElementById('userCalle');

calleInput.addEventListener('input', (e) => {
    const valor = e.target.value.trim();
    
    // Letras, números, espacios, puntos, guiones, # y /. Mínimo 3 caracteres.
    const regexCalle = /^[a-zA-ZÀ-ÿ0-9\s.\-#\/]{3,100}$/;

    if (regexCalle.test(valor)) {
        calleInput.setCustomValidity(""); 
        calleInput.style.border = "1px solid #28a745"; // Valido
    } else {
        calleInput.setCustomValidity("Ingresa una calle válida (mín. 3 caracteres)");
        calleInput.style.border = "1px solid #dc3545"; // Error
    }
});

/*
==============================
|   Validacion Entre Calles  |
==============================
*/
const entreCallesInput = document.getElementById('userCalles');

entreCallesInput.addEventListener('input', (e) => {
    const valor = e.target.value.trim();
    
    // Letras, números, espacios y puntuación común (.,#-/&)
    // Mínimo 5 caracteres para asegurar que pongan algo razonable.
    const regexEntreCalles = /^[a-zA-ZÀ-ÿ0-9\s.\-#\/&,]{5,150}$/;

    if (regexEntreCalles.test(valor)) {
        entreCallesInput.setCustomValidity(""); // Válido
        entreCallesInput.style.border = "1px solid #28a745";
    } else {
        // Mensaje si está muy corto o tiene símbolos raros
        if(valor.length < 5) {
            entreCallesInput.setCustomValidity("Por favor, sé más específico (mín. 5 caracteres).");
        } else {
            entreCallesInput.setCustomValidity("Evita usar símbolos especiales como @, $, %, etc.");
        }
        entreCallesInput.style.border = "1px solid #dc3545";
    }
});

/*
==============================
| Validacion Numero exterior  |
==============================
*/
const numExtInput = document.getElementById('numeroExterior');

numExtInput.addEventListener('input', (e) => {
    let valor = e.target.value.trim();
    
    // Permite números, letras, guiones, diagonales y "S/N"(En dado caso de que no tenga). 
    // Máximo 10 caracteres.
    const regexNumExt = /^[a-zA-Z0-9\s\-\/]{1,10}$/;

    if (regexNumExt.test(valor)) {
        numExtInput.setCustomValidity("");
        numExtInput.style.border = "1px solid #28a745"; // Valido
    } else {
        numExtInput.setCustomValidity("Ingresa un número válido o S/N");
        numExtInput.style.border = "1px solid #dc3545"; // Error
    }
});

/*
==============================
| Validacion Numero interior  |
==============================
*/
const numIntInput = document.getElementById('numeroInterior');

numIntInput.addEventListener('input', (e) => {
    const valor = e.target.value.trim();
    
    // Letras, números, espacios, guiones y diagonales.
    // 1 a 10 caracteres.
    const regexNumInt = /^[a-zA-Z0-9\s\-\/]{1,10}$/;

    if (valor === "") {
        // Error si está vacío ya que si tiene numero exterior debe de tener numero interior
        numIntInput.setCustomValidity("El número interior es obligatorio.");
        numIntInput.style.border = "1px solid #dc3545";
    } else if (regexNumInt.test(valor)) {
        numIntInput.setCustomValidity("");
        numIntInput.style.border = "1px solid #28a745";
    } else {
        numIntInput.setCustomValidity("Formato no válido (solo letras, números y guiones).");
        numIntInput.style.border = "1px solid #dc3545";
    }
});

/*
=====================================
| Validacion Referencias Adicionales |
=====================================
*/
const referenciasInput = document.getElementById('userReferencias');

referenciasInput.addEventListener('input', (e) => {
    const valor = e.target.value.trim();
    
    // Permite letras, números, espacios y puntuación básica (.,#-/&).
    // Mínimo 5 caracteres.
    // Máximo 200 caracteres.
    const regexRef = /^[a-zA-ZÀ-ÿ0-9\s.\-#\/&,]{5,200}$/;

    if (regexRef.test(valor)) {
        referenciasInput.setCustomValidity(""); 
        referenciasInput.style.border = "1px solid #28a745"; // Valido
    } else {
        if (valor.length < 5) {
            referenciasInput.setCustomValidity("La referencia es muy corta (mín. 5 caracteres).");
        } else {
            referenciasInput.setCustomValidity("Evita usar símbolos especiales como @, $, %, etc.");
        }
        referenciasInput.style.border = "1px solid #dc3545"; // Error
    }
});

