// Dados dos arrays con números, se desea verificar si todos los números del primero están contenidos
// exactamente una vez en el segundo, en el mismo orden. Se asume que el 1er array no tiene repetidos.
// Implementar una función en JS que reciba ambos array y retorne true si se cumple o false en otro caso.
function cumple(datos1, datos2) {
    let resultado = false;
    let datos = []
    for (let numero2 of datos2) {
        if (datos1.includes(numero2)) {
            datos.push(numero2);
        }
    }
    if (datos1.length == datos.length) {
        for (let i=0; i<datos1.length; i++) {
            if (datos1[i] == datos[i]) {
                resultado = true;
            } else {
                resultado = false;
            }
        }
    } 
    return resultado

    // for (let i=0; i<datos1.length && ok; i++) {
    //     contador = 0;
    //     for (let j=0; j<datos2.length && ok; j++) {
    //         if (datos1[i] == datos2[j]) {
    //             contador++
    //         }
    //         if (contador != 1) {
    //             ok = false
    //         }
    //     }
    // }

    // return ok
}

console.log(cumple([1,2,3],[5,5,7,1,5,2,8,3])) //Deberia retornar true
console.log(cumple([3,4,5], [8,6,3,5,4,3,2,5,3]))//Deberia retornar false