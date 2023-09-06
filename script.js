// Aquí el juego selecciona un número al azar
let numeroAzar = Math.floor(Math.random() * 100) + 1;

let intentos = 0;
let historialIntentos = []; // Usaremos un array para mantener un registro de los intentos

// Esta acción se va a ejecutar cuando toque el botón chequear
function chequearResultado() {
    intentos++;
    let numeroIngresadoTexto = prompt('Introduce un número entre 1 y 100:');
    let numeroIngresado = parseInt(numeroIngresadoTexto);

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        alert('Por favor, introduce un número válido entre 1 y 100.');
        return;
    }

    historialIntentos.push(numeroIngresado); // Guardamos el intento en el historial

    if (numeroIngresado === numeroAzar) {
        alert(`¡Felicitaciones! ¡Has adivinado el número en ${intentos} intentos!\nHistorial de intentos: ${historialIntentos.join(', ')}`);
        reiniciarJuego();
    } else if (numeroIngresado < numeroAzar) {
        alert('¡Más alto! El número es mayor al que dijiste');
    } else {
        alert('¡Más bajo! El número es menor al que dijiste');
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    numeroAzar = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    historialIntentos = [];
}
