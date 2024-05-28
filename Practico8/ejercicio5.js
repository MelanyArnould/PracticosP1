// Para poner moquette en una habitación rectangular se pueden combinar distintos recortes. Se tienen varios trozos rectangulares. De cada uno se sabe largo y ancho. Esa información está en un array. Ej. 2 4 1 3 5 6 son 3 trozos (de 2*4, 1*3 y 5*6, totalizando 41 m2). Implementar una función que reciba el array y el tamaño de la habitación y retorne si la cubre o no.
function cubre(array, size) {
    let cubre = "no cubre"
    let suma = 0;
    for (i=0; i<array.length && suma<size; i+=2) {
        suma += (array[i]*(array[i+1]));
    }
    if (suma >= size) {
        cubre = "cubre"
    }
    return cubre;
    //return suma>=size;
}
console.log(cubre([2,4,1,3,5,6],41))
console.log(cubre([45,78,5,7],8))
console.log(cubre([4,2,5,1],256))
