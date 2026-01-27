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

    // 🔄 LIMPIAR ERRORES (SOLO AQUÍ)
    mensajeErrorCorreo.textContent = "";
    mensajeErrorTelefono.textContent = "";
    mensajeErrorCorreo.style.display = "none";
    mensajeErrorTelefono.style.display = "none";
    correo.style.border = "none";
    telefono.style.border = "none";

    /* ===== VALIDACIÓN CORREO ===== */

    const correoValor = correo.value.trim().toLowerCase();

    if (!regexCorreo.test(correoValor)) {
        mensajeErrorCorreo.textContent = "Ingresa un correo electrónico válido ❌";
        mensajeErrorCorreo.style.display = "block";
        correo.style.border = "2px solid #d32f2f";
        correo.focus();
        return;
    }

    const dominioCorreo = correoValor.split("@")[1];

    if (!dominiosPermitidos.includes(dominioCorreo)) {
        mensajeErrorCorreo.textContent =
            "Dominio de correo no válido. Revisa que esté bien escrito ❌";
        mensajeErrorCorreo.style.display = "block";
        correo.style.border = "2px solid #d32f2f";
        correo.focus();
        return;
    }

    /* ===== VALIDACIÓN TELÉFONO ===== */

    const telefonoLimpio = telefono.value.replace(/\D/g, "");

    if (!regexTelefonoMX.test(telefonoLimpio)) {
        mensajeErrorTelefono.textContent =
            "Ingresa un número válido de 10 dígitos 📞❌";
        mensajeErrorTelefono.style.display = "block";
        telefono.style.border = "2px solid #d32f2f";
        telefono.focus();
        return;
    }

    /* ===== TODO OK ===== */

    alert("Formulario enviado correctamente ✅");
    this.reset();
});