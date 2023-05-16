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