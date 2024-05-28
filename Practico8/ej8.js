function repeticiones(array) {
    let resultado = [0, 0]; // Resultado [número, cantidad de ocurrencias]
    let maxOcurrencias = 0; // Para mantener el máximo de ocurrencias

    for (let i = 0; i < array.length; i++) {
        let contadorI = 0; // Inicializar contador para cada número
        for (let j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                contadorI++;
            }
        }
        if (contadorI > maxOcurrencias) {
            resultado[0] = array[i];
            resultado[1] = contadorI;
            maxOcurrencias = contadorI; // Actualizar el máximo de ocurrencias
        }
    }
    return "El número " + resultado[0] + " con " + resultado[1] + " ocurrencias.";
}

console.log(repeticiones([1, 5, 1, 5, 7, 8, 1]));
