// Objeto que representa el juego
const juego = {
    numeroAzar: Math.floor(Math.random() * 100) + 1,
    intentos: 0,
    historialIntentos: [],

    // Función para chequear el resultado
    chequearResultado: function () {
        this.intentos++;
        let numeroIngresadoTexto = prompt('Introduce un número entre 1 y 100:');
        let numeroIngresado = parseInt(numeroIngresadoTexto);

        if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
            alert('Por favor, introduce un número válido entre 1 y 100.');
            return;
        }

        this.historialIntentos.push(numeroIngresado); // Guardamos el intento en el historial

        if (numeroIngresado === this.numeroAzar) {
            alert(`¡Felicitaciones! ¡Has adivinado el número en ${this.intentos} intentos!\nHistorial de intentos: ${this.historialIntentos.join(', ')}`);
            this.reiniciarJuego();
        } else if (numeroIngresado < this.numeroAzar) {
            alert('¡Más alto! El número es mayor al que dijiste');
        } else {
            alert('¡Más bajo! El número es menor al que dijiste');
        }
    },

    // Función para reiniciar el juego
    reiniciarJuego: function () {
        this.numeroAzar = Math.floor(Math.random() * 100) + 1;
        this.intentos = 0;
        this.historialIntentos = [];
    },

    // Método para buscar un intento específico en el historial
    buscarIntento: function (numeroBuscado) {
        return this.historialIntentos.includes(numeroBuscado);
    },

    // Método para filtrar intentos mayores que un número dado
    filtrarIntentosMayoresQue: function (numeroFiltro) {
        return this.historialIntentos.filter(intentos => intentos > numeroFiltro);
    }
};

// Uso de los métodos
juego.chequearResultado(); // Llama a la función para jugar
console.log(juego.buscarIntento(42)); // Buscar el número 42 en el historial
console.log(juego.filtrarIntentosMayoresQue(50)); // Filtrar intentos mayores que 50
