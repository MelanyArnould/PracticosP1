//Crear un objeto que represente los datos de un participante de un juego. Definir las propiedades: nombre, puntos y las funciones: imprimir (mostrar el nombre de jugador y los puntos actuales), aumentarPuntos (permite incrementar la cantidad de puntos actuales del jugador) verificarSiGano (mostrar un alert si los puntos superan a 1000 o no)
let participante = {
    nombre: "melany",
    puntos: 0,
    imprimir: function() {
         return "Nombre de jugador: " + this.nombre + "\n Puntos actuales: "+ this.puntos
    },
    // aumentarPuntos: function() {
    //     this.puntos++;
    //     return this.puntos;
    // },
    aumentarPuntos: function(cantidad) {
        this.puntos =this.puntos+cantidad
    },
    verificarSiGano: function() {
        let supera = "El jugador tiene menos de 1000 puntos";
        if (this.puntos > 1000) {
            supera = "El jugador tiene mas de 1000 puntos";
        }
        console.log(supera);
    }
}
console.log(participante)
console.log(participante.imprimir())
console.log(participante.aumentarPuntos())
console.log(participante.aumentarPuntos())
console.log(participante.verificarSiGano())