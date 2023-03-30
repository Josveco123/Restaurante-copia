
const linkInicio = document.querySelector('a[href="#Inicio"]');
const seccionInicio = document.querySelector('#Inicio');

// Agrega un evento de clic al enlace "Inicio"
linkInicio.addEventListener('click', function(event) {
  // Evita que el enlace cambie de página
  event.preventDefault();

  // Muestra la sección "Inicio"
  seccionInicio.classList.remove('hidden');
});