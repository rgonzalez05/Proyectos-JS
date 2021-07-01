// Selectores
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// crear los años
const years = document.createElement('option');
const max = new Date().getFullYear();
const min = max - 10;


for(let i = max; i >  min; i--) {
    const option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

// Dato
const datosBusqueda = {
    marca : '',
    year: '',
    minimo : '',
    maximo: '',
    puertas: '',
    transmision:'',
    color:''
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
});

// Event Listeners para el formulario
marca.addEventListener('input', e => {
    datosBusqueda.marca = e.target.value;

    //función de filtrar Autos
    filtrarAuto();
    alert("Marcas Filtrados Correctamente");
});

year.addEventListener('input', e => {
    datosBusqueda.year = Number(e.target.value);
    //función de filtrar Autos
    filtrarAuto();
    alert("Años Filtrados Correctamente");

});

minimo.addEventListener('input', e => {
    datosBusqueda.minimo = Number(e.target.value);
    //función de filtrar Autos
    filtrarAuto();
    alert("Precio Mínimo Filtrado Correctamente");

});


maximo.addEventListener('input', e => {
    datosBusqueda.maximo = Number(e.target.value);
    //función de filtrar Autos
    filtrarAuto();
    alert("Precio Máximo Filtrado Correctamente");

});


puertas.addEventListener('input', e => {
    datosBusqueda.puertas = Number(e.target.value);
    //función de filtrar Autos
    filtrarAuto();
    alert("Cantidad de Puertas Filtradas Correctamente");

});

transmision.addEventListener('input', e => {
    datosBusqueda.transmision = e.target.value
    //función de filtrar Autos
    filtrarAuto();
    alert("Transmisión Filtrada Correctamente");

});

color.addEventListener('input', e => {
    datosBusqueda.color = e.target.value
    //función de filtrar Autos
    filtrarAuto();
    alert("Colores Filtrados Correctamente");

});

function limpiarHTML() {
    // Leer Resultado
    const contenedor = document.querySelector('#resultado');

    // limpiar los resultados
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

function mostrarAutos(autos){
    limpiarHTML();

    // Leer Resultado
    const contenedor = document.querySelector('#resultado');

    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
            <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>
        `;
        contenedor.appendChild(autoHTML);
    })
}
function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}

function filtrarAuto() {
   const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

   if(resultado.length){
        mostrarAutos(resultado);
   } else {
       noResultado();
   }
}


//filtros
function filtrarMarca(auto) {
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    } 
    return auto;
}
function filtrarYear(auto) {
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

function filtrarMinimo(auto) {
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}
function filtrarMaximo(auto) {
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}
function filtrarPuertas(auto) {
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    } 
    return auto;
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    } 
    return  auto;
}