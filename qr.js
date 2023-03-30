
const miImagen = document.getElementById('imagenqr');

const linkInicio = document.getElementById('aqr');

linkInicio.addEventListener('click', function(event) {
  // Evita que el enlace cambie de página
  event.preventDefault();

  if (miImagen.style.display === 'none') {
    miImagen.style.display = 'block';
  } else {
    miImagen.style.display = 'none';
  }
});
/* este es la prueba*/