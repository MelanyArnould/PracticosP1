// En una competencia de Surf, los competidores participan durante 20 minutos en el agua tratando de tomar la
// mayor cantidad de olas. De cada uno se registra su identificación ("P" y un número: "P1","P2","P3"...), la
// cantidad de olas que tomó y las siguientes posiciones son los puntajes de las olas que tomaron (de 1 a 10).
// Gana el o los participantes que obtengan mayor cantidad de puntos sumando todas sus olas.
// Implementar una función en JS que recibe un array con los datos y retorna un array la/las identificaciones de
// los ganadores.
// firma: function ganadores(datos)
// ejemplo: recibe: [ "P1" 3 5 7 2 "P2" 2 9 3 "P3" 2 10 4 "P4" 4 3 4 5 1 "P5" 3 1 3 1]
// El participante "P1" tomó 3 olas, con total de puntos 14, "P2": 12 ,
// "P3":14 , "P4": 13 "P5":5
// Retorna : ["P1","P3"]
function ganadores(datos) {
    let resultado = [];
    let puntajemaximo = 0;
    let suma = 0;
    let pos = 0;
    while (pos < datos.length) {
        let participante = datos[pos];
        let cantidadOlas = pos+1;
        pos = pos+2
        for (let i=0; i< cantidadOlas; i++) {
            suma += datos[pos];
            pos++;
        }
        if (suma > puntajemaximo) {
            puntajemaximo = suma;
            resultado = [participante]
        } else if (suma == puntajemaximo) {
            resultado.push(participante);
        }
        suma = 0;
    }
    return resultado;
}