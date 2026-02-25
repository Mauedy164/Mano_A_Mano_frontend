document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar elementos
  const form = document.querySelector(".form_container form");
  const inputNombre = document.getElementById("user_name");
  const correoIpt = document.getElementById("user_email");
  const inputPhone = document.getElementById("user_phone");
  const messageInput = document.getElementById("user_message");

  // Regex
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const regexNombre = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;
  const regexNombre2 = /^(?!.*(.)\1{2}).*$/;

  // Crear contenedores de error
  let errorNombre = document.getElementById("errorNombre");
  if (!errorNombre) {
    errorNombre = document.createElement("div");
    errorNombre.id = "errorNombre";
    errorNombre.classList.add("invalid-feedback");
    errorNombre.style.cssText = "display: block; color: red; font-size: 0.9em; margin-top: 5px;";
    inputNombre.parentNode.appendChild(errorNombre);
  }

  let errorCorreo = document.getElementById("error-correo");
  if (!errorCorreo) {
    errorCorreo = document.createElement("div");
    errorCorreo.id = "error-correo";
    errorCorreo.classList.add("invalid-feedback");
    errorCorreo.style.cssText = "display: block; color: red; font-size: 0.9em; margin-top: 5px;";
    correoIpt.parentNode.appendChild(errorCorreo);
  }

  let errorPhone = document.getElementById("errorPhone");
  if (!errorPhone) {
    errorPhone = document.createElement("div");
    errorPhone.id = "errorPhone";
    errorPhone.classList.add("invalid-feedback");
    errorPhone.style.cssText = "display: block; color: red; font-size: 0.9em; margin-top: 5px;";
    inputPhone.parentNode.appendChild(errorPhone);
  }

  let messageError = document.getElementById("messageError");
  if (!messageError) {
    messageError = document.createElement("div");
    messageError.id = "messageError";
    messageError.classList.add("invalid-feedback");
    messageError.style.cssText = "display: block; color: red; font-size: 0.9em; margin-top: 5px;";
    messageInput.parentNode.appendChild(messageError);
  }

  // ==================== FUNCIONES DE VALIDACIÓN ====================

  function validateNombre() {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
      errorNombre.textContent = "El nombre es requerido.";
      errorNombre.style.display = "block";
      inputNombre.classList.add("is-invalid");
      inputNombre.classList.remove("is-valid");
      return false;
    }

    if (nombre === "") {
      errorNombre.textContent = "El nombre es requerido.";
      errorNombre.style.display = "block";
      inputNombre.classList.add("is-invalid");
      inputNombre.classList.remove("is-valid");
      return false;
    }

    if (nombre.length < 3) {
      errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
      errorNombre.style.display = "block";
      inputNombre.classList.add("is-invalid");
      inputNombre.classList.remove("is-valid");
      return false;
    }

    if (!regexNombre.test(nombre)) {
      errorNombre.textContent = "Solo letras y espacios permitidos.";
      errorNombre.style.display = "block";
      inputNombre.classList.add("is-invalid");
      inputNombre.classList.remove("is-valid");
      return false;
    }

    if (!regexNombre2.test(nombre)) {
      errorNombre.textContent = "Ningún carácter puede repetirse más de 2 veces consecutivas.";
      errorNombre.style.display = "block";
      inputNombre.classList.add("is-invalid");
      inputNombre.classList.remove("is-valid");
      return false;
    }

    errorNombre.textContent = "";
    errorNombre.style.display = "none";
    inputNombre.classList.remove("is-invalid");
    inputNombre.classList.add("is-valid");
    return true;
  }

  function validateEmail() {
    const correo = correoIpt.value.trim();

    if (!regexEmail.test(correo)) {
      errorCorreo.textContent = "Por favor, ingresa un correo válido.";
      errorCorreo.style.display = "block";
      correoIpt.classList.add("is-invalid");
      correoIpt.classList.remove("is-valid");
      return false;
    }

    errorCorreo.textContent = "";
    errorCorreo.style.display = "none";
    correoIpt.classList.remove("is-invalid");
    correoIpt.classList.add("is-valid");
    return true;
  }

  function validatePhoneNumber(phone) {
    const num = phone.replace(/\D/g, "");

    if (num.length !== 10) {
      return { valid: false, message: "Deben ser exactamente 10 dígitos numéricos." };
    }

    if (num[0] === "0") {
      return { valid: false, message: "El número no puede comenzar con 0." };
    }

    if (/^(\d)\1{9}$/.test(num)) {
      return { valid: false, message: "El número no puede tener todos los dígitos iguales." };
    }

    if (!/^(?!.*(\d)\1{3})\d{10}$/.test(num)) {
      return {
        valid: false,
        message: "El número no puede tener más de cuatro numeros iguales consecutivos.",
      };
    }

    if (/^(\d)(\d)\1\2\1\2\1\2\1\2$/.test(num)) {
      return { valid: false, message: "El número contiene un patrón no válido." };
    }

    const digits = num.split("").map(Number);

    const isAsc = digits.every((d, idx) => {
      if (idx === 0) return true;
      const prev = digits[idx - 1];
      return d === (prev + 1) % 10;
    });

    const isDesc = digits.every((d, idx) => {
      if (idx === 0) return true;
      const prev = digits[idx - 1];
      return d === (prev - 1 + 10) % 10;
    });

    if (isAsc || isDesc) {
      return { valid: false, message: "El número contiene una secuencia no válida." };
    }

    return { valid: true, message: "" };
  }

  function validatePhone() {
    const phone = inputPhone.value.trim();

    if (phone === "") {
      errorPhone.textContent = "El número de teléfono es requerido.";
      errorPhone.style.display = "block";
      inputPhone.classList.add("is-invalid");
      inputPhone.classList.remove("is-valid");
      return false;
    }

    const validation = validatePhoneNumber(phone);

    if (!validation.valid) {
      errorPhone.textContent = validation.message;
      errorPhone.style.display = "block";
      inputPhone.classList.add("is-invalid");
      inputPhone.classList.remove("is-valid");
      return false;
    }

    errorPhone.textContent = "";
    errorPhone.style.display = "none";
    inputPhone.classList.remove("is-invalid");
    inputPhone.classList.add("is-valid");
    return true;
  }

  function validateMessage() {
    const messageValue = messageInput.value.trim();

    if (messageValue < 10) {
      messageError.textContent = "El mensaje debe tener mínimo 10 caracteres";
      messageError.style.display = "block";
      messageInput.classList.add("is-invalid");
      messageInput.classList.remove("is-valid");
      return false;
    }

    if (messageValue.length > 500) {
      messageError.textContent = "El mensaje debe tener máximo 500 caracteres";
      messageError.style.display = "block";
      messageInput.classList.add("is-invalid");
      messageInput.classList.remove("is-valid");
      return false;
    }

    messageError.textContent = "";
    messageError.style.display = "none";
    messageInput.classList.remove("is-invalid");
    messageInput.classList.add("is-valid");
    return true;
  }

  // ==================== EVENT LISTENERS INPUT ====================

  inputNombre.addEventListener("input", function () {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
      errorNombre.textContent = "";
      errorNombre.style.display = "none";
      inputNombre.classList.remove("is-invalid");
      inputNombre.classList.remove("is-valid");
    } else {
      validateNombre();
    }
  });

  correoIpt.addEventListener("input", function () {
    const correo = correoIpt.value.trim();

    if (correo === "") {
      errorCorreo.textContent = "";
      errorCorreo.style.display = "none";
      correoIpt.classList.remove("is-invalid");
      correoIpt.classList.remove("is-valid");
    } else {
      validateEmail();
    }
  });

  inputPhone.addEventListener("input", function () {
    const phone = inputPhone.value.trim();

    if (phone === "") {
      errorPhone.textContent = "";
      errorPhone.style.display = "none";
      inputPhone.classList.remove("is-invalid");
    } else {
      const validation = validatePhoneNumber(phone);
      if (!validation.valid) {
        errorPhone.textContent = validation.message;
        errorPhone.style.display = "block";
        inputPhone.classList.add("is-invalid");
      } else {
        errorPhone.textContent = "";
        errorPhone.style.display = "none";
        inputPhone.classList.remove("is-invalid");
      }
    }
  });

  inputPhone.addEventListener("input", function () {
    const phone = inputPhone.value.trim();

    if (phone === "") {
      errorPhone.textContent = "";
      errorPhone.style.display = "none";
      inputPhone.classList.remove("is-invalid");
    } else {
      const validation = validatePhoneNumber(phone);
      if (!validation.valid) {
        errorPhone.textContent = validation.message;
        errorPhone.style.display = "block";
        inputPhone.classList.add("is-invalid");
      } else {
        errorPhone.textContent = "";
        errorPhone.style.display = "none";
        inputPhone.classList.remove("is-invalid");
      }
    }
  });

  messageInput.addEventListener("input", function () {
    const length = messageInput.value.length;

    let charCounter = document.getElementById("charCounter");
    if (!charCounter) {
      charCounter = document.createElement("div");
      charCounter.id = "charCounter";
      charCounter.style.cssText = "font-size: 14px; margin-top: 5px;";
      messageInput.parentNode.insertBefore(charCounter, messageError);
    }

    if (length === 0) {
      charCounter.style.display = "none";
      messageInput.classList.remove("is-invalid");
      messageInput.classList.remove("is-valid");
      messageError.textContent = "";
      messageError.style.display = "none";
    } else {
      charCounter.style.display = "block";
      charCounter.textContent = `${length}/500`;
      charCounter.style.color = length < 10 || length > 500 ? "red" : "#666";

      if (length > 500) {
        messageError.textContent = "El mensaje debe tener máximo 500 caracteres";
        messageError.style.display = "block";
        messageInput.classList.add("is-invalid");
        messageInput.classList.remove("is-valid");
      } else if (length < 10) {
        messageError.textContent = "El mensaje debe tener mínimo 10 caracteres";
        messageError.style.display = "block";
        messageInput.classList.add("is-invalid");
        messageInput.classList.remove("is-valid");
      } else {
        messageError.textContent = "";
        messageError.style.display = "none";
        messageInput.classList.remove("is-invalid");
      }
    }
  });

  // ==================== EVENT LISTENERS BLUR ====================

  inputNombre.addEventListener("blur", validateNombre);
  correoIpt.addEventListener("blur", validateEmail);
  inputPhone.addEventListener("blur", validatePhone);
  messageInput.addEventListener("blur", validateMessage);

  // ==================== SUBMIT ====================

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isNombreValid = validateNombre();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isMessageValid = validateMessage();

    if (!isNombreValid || !isEmailValid || !isPhoneValid || !isMessageValid) {
      alert("Por favor, rellena el formulario como se indica");
      return;
    }
    emailjs
      .sendForm("service_trf8ktq", "template_4q07cia", form)
      .then(function () {
        Swal.fire({
      title: "¡Mensaje enviado!",
      text: "El formulario fue enviado correctamente.",
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#db4444"
      });
        form.reset();
        const counter = document.getElementById("charCounter");
        if (counter) counter.style.display = "none";
      })
      .catch(function (error) {
        console.log("Error:", error);
        alert("Hubo un error al enviar el mensaje ❌");
      });
  });

  (function () {
    emailjs.init("iO5ES5byaaXR9w8yL");
  })();
});
