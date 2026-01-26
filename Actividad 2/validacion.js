document.getElementById("formulario-contacto").addEventListener("submit", function (event) {
    event.preventDefault();

    const correo = document.getElementById("correo");
    const telefono = document.getElementById("telefono");

    const mensajeErrorCorreo = document.getElementById("mensajeError");
    const mensajeErrorTelefono = document.getElementById("errorTelefono");

    const dominiosPermitidos = [
        "gmail.com",
        "outlook.com",
        "hotmail.com",
        "yahoo.com",
        "icloud.com",
        "live.com"
    ];

    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexTelefonoMX = /^\d{10}$/;

    mensajeErrorCorreo.textContent = "";
    mensajeErrorTelefono.textContent = "";
    correo.style.border = "none";
    telefono.style.border = "none";

    const correoValor = correo.value.trim().toLowerCase();

    if (!regexCorreo.test(correoValor)) {
        mensajeErrorCorreo.textContent = "Ingresa un correo electrónico válido ❌";
        correo.style.border = "2px solid #d32f2f";
        correo.focus();
        return;
    }

    const dominioCorreo = correoValor.split("@")[1];

    if (!dominiosPermitidos.includes(dominioCorreo)) {
        mensajeErrorCorreo.textContent =
            "Dominio de correo no válido. Revisa que esté bien escrito ❌";
        correo.style.border = "2px solid #d32f2f";
        correo.focus();
        return;
    }

    const telefonoLimpio = telefono.value.replace(/\D/g, "");

    if (!regexTelefonoMX.test(telefonoLimpio)) {
        mensajeErrorTelefono.textContent =
            "Ingresa un número mexicano válido (10 dígitos) 📞❌";
        telefono.style.border = "2px solid #d32f2f";
        telefono.focus();
        return;
    }

    alert("Formulario enviado correctamente ✅");
    this.reset();
});
