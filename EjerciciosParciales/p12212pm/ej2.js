// Un array "a" de largo n es una "permutación" si contiene todos los números del 0 al n-1 (en
// cualquier orden) sin repeticiones. A partir de dicho array, se crea un nuevo array "b" transformado de esta
// forma: b[i] = |a[i]-i| (nota: valor absoluto).
// Implementar una función que recibe un array y retorna true si se cumple que ese array y el transformado
// son ambos permutaciones.
// Firma: function permutaciones(datos)
// Ejemplo: recibe array datos: [3, 0, 2, 1], debe retornar true porque tanto ese array como el
// transformado: [3, 1, 0, 2] son ambos permutaciones.
function transformacion(array) {
    let nuevoArray = [];
    for (let i = 0; i<array.length; i++) {
        let elemento = array[i];
        let elementoTransformado = Math.abs(elemento - i);
        nuevoArray.push(elementoTransformado);
    }
    return nuevoArray;
}
function esPermutacion(array) {
    let ok = true;
    let contador;
    for (let i=0; i<array.length-1 && ok; i++) {
        contador = 0;
        for (let elemento of array) {
            if (elemento == i) {
                contador ++;
            }
        }
        if (contador != 1) {
            ok = false;
        }
    }
    return ok;
}
function permutaciones(datos) {
    let es = false;
    let datos2 = transformacion(datos);
    if (esPermutacion(datos) && esPermutacion(datos2)) {
        es = true;
    }
    return es;
}
console.log(permutaciones([3, 0, 2, 1]))