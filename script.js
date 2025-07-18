function mostrarAlerta() {
  alert("¡Gracias por visitar La Suite! 💖");
}

document.getElementById("formularioContacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  if (!correo.includes("@") || !correo.includes(".")) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }

  alert("Formulario enviado correctamente. ¡Te contactaremos pronto!");
  this.reset();
});
