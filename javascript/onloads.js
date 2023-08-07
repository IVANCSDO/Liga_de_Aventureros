
window.onload = function() {
    const contenedorPC = document.getElementById('contenedorPC');
    const contenedorMovil = document.getElementById('contenedorMovil');

    var elementosPC = "";

    var elementosMovil = "";

    var band = true;

    // Recorremos el array de personajes y creamos una cadena con los elementos del acordeón
    pnjs.forEach((personaje, index) => {

        if(band){
            elementosPC += `
            <div class="contenedorAncho d-md-flex">
            <div class="d-flex ps-2 m-3 flex-column justify-content-center align-items-center">
              <img src="imagen_pj/placeholdtoken.png" alt="">
              <h1 class="draconis textoNPC text-center" style="font-size: 4em;">${personaje.nombre}</h1>
            </div>
            <div class="m-5 p-4 contenedorNPC">
              <h1 class="draconis textoNPC"><u>${personaje.titulo}</u></h1>
              <p class="textoNPC">${personaje.descripción}</p>
            </div>
          </div>`;
          band = false;
        }else{
            elementosPC += `  
          <div class="contenedorAncho d-md-flex">
            <div class="m-5 p-4 contenedorNPC">
              <h1 class="draconis textoNPC text-center"><u>${personaje.titulo}</u></h1>
              <p class="textoNPC">${personaje.descripción}</p>
            </div>
            <div class="d-flex ps-2 m-3 flex-column justify-content-center align-items-center">
              <img src="imagen_pj/placeholdtoken.png" alt="">
              <h1 class="draconis textoNPC" style="font-size: 4em;">${personaje.nombre}</h1>
            </div>
          </div>
          `;
          band = true;
        }
    });
  
    // Recorremos el array de personajes y creamos una cadena con los elementos del acordeón
    pnjs.forEach((personaje, index) => {
        elementosMovil += `
            <div class="contenedorAncho d-md-flex">
            <div class="d-flex ps-2 m-3 flex-column justify-content-center align-items-center">
              <img src="imagen_pj/placeholdtoken.png" alt="">
              <h1 class="draconis textoNPC text-center" style="font-size: 4em;">${personaje.nombre}</h1>
            </div>
            <div class="m-5 p-4 contenedorNPC">
              <h1 class="draconis textoNPC"><u>${personaje.titulo}</u></h1>
              <p class="textoNPC">${personaje.descripción}</p>
            </div>
          </div>`;
    });
  


    // Agregamos los elementos del acordeón al div "desplegables"
    contenedorPC.innerHTML = elementosPC;
    contenedorMovil.innerHTML = elementosMovil;




    const desplegablesDiv = document.getElementById('desplegables');
  
    // Ordenamos los personajes alfabéticamente por nombre
    personajes.sort((a, b) => a.nombre.localeCompare(b.nombre));
  
    // Creamos una variable para almacenar los elementos del acordeón
    let elementosAcordeon = '';
    let letraAnterior = ''; // Variable para almacenar la letra anterior
  
    // Recorremos el array de personajes y creamos una cadena con los elementos del acordeón
    personajes.forEach((personaje, index) => {
      const primeraLetra = personaje.nombre.charAt(0).toUpperCase();
  
      // Agregamos un separador si es una nueva letra
      if (primeraLetra !== letraAnterior) {
        elementosAcordeon += `
          <div class="separador">
            ${primeraLetra}
          </div>
        `;
        letraAnterior = primeraLetra;
      }

      elementosAcordeon += `
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
              ${personaje.nombre}
            </button>
          </h2>
          <div id="collapse${index}" class="accordion-collapse collapse" data-bs-parent="#desplegables">
            <div class="accordion-body">
              <p><b>Jugador</b>: ${personaje.jugador}</p>
              <p><b>Raza</b>: ${personaje.raza}</p>
              <p>${personaje.trasfondo}</p>`
              if (personaje.imagen!=""){
                elementosAcordeon += `<img src="imagen_pj/${personaje.imagen}" alt="">`;
            }
            elementosAcordeon += `
            </div>
          </div>
        </div>
      `;
    });
  
    // Agregamos los elementos del acordeón al div "desplegables"
    desplegablesDiv.innerHTML = elementosAcordeon;


  };