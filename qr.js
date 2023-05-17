// mostrar y desplazar el botton de regreso
const goToTopButton = document.getElementById("ir-a-inicio");
goToTopButton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  document.querySelector("#ir-a-inicio").setAttribute("style", "display: none;");
  setTimeout(() => {
    window.location.href = "#home";
  }, 1000);
});


var prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos> 100) {
    document.querySelector("#ir-a-inicio").setAttribute("style", "display: block;");
  } else {
    document.querySelector("#ir-a-inicio").setAttribute("style", "display: none;");
  }
});

/*    inico de ocultar menu opciones -------------------*/

var checkbox = document.querySelector('.toggle-menu img');
var isHovered = false;

checkbox.addEventListener('click', function() {
  isHovered = !isHovered;

  if (isHovered) {
    var elementos = document.querySelectorAll('.menu-item a');
    elementos.forEach(function(elemento) {
      elemento.style.display = 'block';
    });

  } else {
    var elementos = document.querySelectorAll('.menu-item a');
    elementos.forEach(function(elemento) {
    elemento.style.display = 'none';
    });
  }
});


/**opcion para activar menu */
function obtenerAnchoPagina() {
  var anchoPagina = window.innerWidth;
  if (anchoPagina>768) {
    var elementos = document.querySelectorAll('.menu-item a');
    elementos.forEach(function(elemento) {
      elemento.style.display = 'block';
    });
  }
}
window.addEventListener('resize', obtenerAnchoPagina);
obtenerAnchoPagina();