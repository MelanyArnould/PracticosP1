// Implementar una función en JS que dado un array con números enteros positivos mayores que cero y un
// número entero m cualquiera, retorna true si todos los números del array son divisores o múltiplos de m o falso
// en otro caso.
// Ejemplo:
// firma: function multiplosDivisores(números,m)
// numeros: [1, 1000, 4, 5, 60, 280]
// m: 20
// Retorna: true

function multiplosDivisores(numeros, m) {
    let ok = true;
    for (let i=0; i<numeros.length && ok; i++) {
        let numero = numeros[i];
        if (numero%m != 0 && m%numero != 0 ) {
            ok = false;
        }
    }
    return ok;
}