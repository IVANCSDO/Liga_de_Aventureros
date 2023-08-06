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

  