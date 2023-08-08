$(document).ready(function() {
    // Seleccionar todos los elementos con la clase "nav-link"
    const navLinks = $('.nav-link');
  
    // Añadir el event listener para el evento "click" en los enlaces del navbar
    navLinks.on('click', function() {
      // Remover la clase "active" de todos los elementos
      navLinks.removeClass('active');
      
      // Agregar la clase "active" al elemento clicado
      $(this).addClass('active');

    });
  
    // Seleccionar el enlace del "#Main"
    const mainLink = $('a[href="#Main"]');
  
    // Añadir el event listener para el evento "click" en el enlace del "#Main"
    mainLink.on('click', function() {
      // Remover la clase "active" de todos los elementos
      navLinks.removeClass('active');
    });

});


// Obtener todos los elementos con la clase "vinculo"
const vinculos = document.querySelectorAll('.vinculo');

// Función para el evento de clic
function clicEnVinculo(event) {
    // Previene la acción predeterminada del enlace
    event.preventDefault();
    
    // console.log(this.id);

    esconderElementos();

    document.getElementById(this.id+"e").removeAttribute("hidden");

}

// Agregar el event listener a cada elemento con la clase "vinculo"
vinculos.forEach((vinculo) => {
    vinculo.addEventListener('click', clicEnVinculo);
});

const elementos = [
  document.getElementById("link0e"),
  document.getElementById("link1e"),
  document.getElementById("link2e"),
  document.getElementById("link3e"),
  document.getElementById("link4e"),
  document.getElementById("link5e"),
  document.getElementById("link6e"),
  document.getElementById("link7e")
];

function esconderElementos() {
  for (const elemento of elementos) {
    if(elemento){
      elemento.hidden = true;
    }
  }
}


function informacionMenu() {
  perderOpacidad();
  var link0e = document.getElementById("link0e");
  var link1e = document.getElementById("link1e");
  link0e.style.opacity = 0;
  link1e.hidden = false;
  link1e.style.opacity = 0;
  document.getElementById("link1").className += " active";

  setTimeout(function() {
      esconderElementos();
      link0e.hidden = true;
      link1e.hidden = false;
      link1e.style.opacity = 0;
      link1e.style.opacity = 1;
      document.getElementById("link0e").style.opacity = '1';
  }, 1000);
  
}

function perderOpacidad() {
  document.getElementById("link0e").style.opacity = '0';
}



