
window.onload = function() {

  actualizarValores()

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
              <img class="token" src="${personaje.imagen}" alt="">
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
              <h1 class="draconis textoNPC "><u>${personaje.titulo}</u></h1>
              <p class="textoNPC">${personaje.descripción}</p>
            </div>
            <div class="d-flex ps-2 m-3 flex-column justify-content-center align-items-center">
              <img class="token" src="${personaje.imagen}" alt="">
              <h1 class="draconis textoNPC text-center" style="font-size: 4em;">${personaje.nombre}</h1>
            </div>
          </div>
          `;
          band = true;
        }
    });
  
    // Recorremos el array de personajes y creamos una cadena con los elementos del acordeón
    pnjs.forEach((personaje, index) => {
        elementosMovil += `
            <div class="contenedorAncho d-md-flex flex-column">
            <div class="d-flex ps-2 m-3 flex-column justify-content-center align-items-center">
              <img class="token" src="${personaje.imagen}" alt="">
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
    
    // Creamos un objeto para agrupar los personajes por letra inicial
    const personajesAgrupados = {};
    personajes.forEach(personaje => {
      const primeraLetra = personaje.nombre.charAt(0).toUpperCase();
      if (!personajesAgrupados[primeraLetra]) {
        personajesAgrupados[primeraLetra] = [];
      }
      personajesAgrupados[primeraLetra].push(personaje);
    });
    
    // Creamos una variable para almacenar los elementos del acordeón
    let elementosAcordeon = '';
    
    // Recorremos el objeto de personajes agrupados y creamos el acordeón
    for (const letra in personajesAgrupados) {
      elementosAcordeon += `
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading${letra}">
            <button class="accordion-button collapsed draconis letraSeccion" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${letra}" aria-expanded="false" aria-controls="collapse${letra}">
              ${letra}
            </button>
          </h2>
          <div id="collapse${letra}" class="accordion-collapse collapse">
            <div class="accordion-body">
      `;
    
      personajesAgrupados[letra].forEach((personaje, index) => {
        elementosAcordeon += `
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button custom-accordion-button draconis collapsed tituloPJ" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${letra}_${index}" aria-expanded="false" aria-controls="collapse${letra}_${index}">
                ${personaje.nombre}
              </button>
            </h2>
            <div id="collapse${letra}_${index}" class="accordion-collapse collapse texto">
              <div class="accordion-body d-flex fichaPj justify-content-center">
                <div class="w75">
                  <p><b>Jugador</b>: ${personaje.jugador}</p>
                  <p><b>Raza</b>: ${personaje.raza}</p>
                  <p>${personaje.trasfondo}</p>
                </div>
                <div class="w25">
                  ${personaje.imagen ? `<img class="token tokenpjs" src="imagen_pj/${personaje.imagen}" alt="">` : ''}
                </div>
              </div>
            </div>
          </div>
        `;
      });
    
      elementosAcordeon += `
            </div>
          </div>
        </div>
      `;
    }
    
    // Agregamos los elementos del acordeón al div "desplegables"
    desplegablesDiv.innerHTML = elementosAcordeon;
    
  };
