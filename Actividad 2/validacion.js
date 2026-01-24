document.getElementById("formulario-contacto").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const correo = document.getElementById("correo");
    const mensajeError = document.getElementById("mensajeError");

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexCorreo.test(correo.value)) {
        mensajeError.textContent = "Por favor, ingresa un correo electrónico válido ❌";
        correo.focus();
        correo.style.border = "2px solid #d32f2f";
        return;
    }

    // Si pasa la validación
    mensajeError.textContent = "";
    correo.style.border = "1px solid #ccc";

    alert("Formulario enviado correctamente ✅");

    this.submit();
});