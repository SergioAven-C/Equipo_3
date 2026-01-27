import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const formulario = document.getElementById("formulario-contacto");

formulario.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim().toLowerCase();
  const telefono = document.getElementById("telefono").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  const mensajeErrorCorreo = document.getElementById("mensajeError");
  const mensajeErrorTelefono = document.getElementById("errorTelefono");

  mensajeErrorCorreo.textContent = "";
  mensajeErrorTelefono.textContent = "";
  mensajeErrorCorreo.style.display = "none";
  mensajeErrorTelefono.style.display = "none";

  const dominiosPermitidos = [
    "gmail.com", "outlook.com", "hotmail.com",
    "yahoo.com", "icloud.com", "live.com"
  ];

  const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexTelefonoMX = /^\d{10}$/;

  if (!regexCorreo.test(correo)) {
    mensajeErrorCorreo.textContent = "Correo inválido ❌";
    mensajeErrorCorreo.style.display = "block";
    return;
  }

  const dominio = correo.split("@")[1];
  if (!dominiosPermitidos.includes(dominio)) {
    mensajeErrorCorreo.textContent = "Dominio no permitido ❌";
    mensajeErrorCorreo.style.display = "block";
    return;
  }

  const telefonoLimpio = telefono.replace(/\D/g, "");
  if (!regexTelefonoMX.test(telefonoLimpio)) {
    mensajeErrorTelefono.textContent = "Teléfono inválido ❌";
    mensajeErrorTelefono.style.display = "block";
    return;
  }

  try {
    await addDoc(collection(db, "contactos"), {
      nombre,
      correo,
      telefono: telefonoLimpio,
      mensaje,
      fecha: new Date()
    });

    alert("Mensaje enviado correctamente 🐾");
    formulario.reset();

  } catch (error) {
    console.error(error);
    alert("Error al enviar ❌");
  }
});