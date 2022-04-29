
// Selectores

const divHora = document.querySelector('#hora');
const divFecha = document.querySelector('#fecha');


window.onload = () => {
    mostrarHTML();
}

const formatoHora = hora => {

    if (hora < 10) {
        hora = `0${hora}`;
    }
    return hora;
}

const obtenerHora = () => {
    const fecha = new Date();
    const hr = formatoHora(fecha.getHours());
    const mm = formatoHora(fecha.getMinutes());
    const ss = formatoHora(fecha.getSeconds());

    // Imprimir
    divHora.innerHTML = `${hr}:${mm}:${ss}`;
}

const obtenerFecha = () => {
    // Moment viene de la libreria Moment.js
    moment.locale()
    const hoy = moment().format('dddd, D MMMM');
    
    // Imprimir
    divFecha.innerHTML = hoy
}


const mostrarHTML = () => {
    obtenerHora();
    obtenerFecha();
}

setInterval(mostrarHTML, 1000)