document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // evita que avance

    const email = document.getElementById("email").value;
    const mensajeError = document.getElementById("mensajeError");

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexCorreo.test(email)) {
        mensajeError.textContent = "";
        alert("Correo válido. Formulario enviado ✅");
        // this.submit(); // Actívalo si quieres enviar de verdad
    } else {
        mensajeError.textContent = "Ingresa un correo electrónico válido ❌";
    }
});
