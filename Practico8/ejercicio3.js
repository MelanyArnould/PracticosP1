// Escribir una función que reciba un array cargado con números y retorne verdadero si dichos números ya están ordenados en forma estrictamente ascendente.
function creciente(array) {
    let contador
    let verdadero = "verdadero";
    for (i=1; i<array.length && verdadero == "verdadero"; i++) {
        if (array[i]<= array[i-1]) {
            verdadero = "no estan oredenados";
        }
    }
    return verdadero;
}

console.log(creciente([0,4,7,8,9]));
console.log(creciente([3,6,2,8]))