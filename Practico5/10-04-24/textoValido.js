//Leer un string que representa un parrafo, indicar si es valido en base a:
// Debe terner mas de 20 caracteres, terminar en punto y cada vez que hay una coma, el siguiente caracter debe ser un espacio
// let estaOk = false;
// let parrafo = prompt("Ingrese un parrafo");
// if (parrafo.length >= 20 && parrafo.charAt(parrafo.length-1) == ".") {
//     for (let i=0; i < parrafo.length; i++) {
//         if (i=="," && i++ ==" ") {
//             estaOk = true;
//         }
//     }
// }
// if (!estaOk) {
//     console.log("No es valido");
// } else {
//     console.log("Es valido");
// }

let estaOk = true;
let parrafo = prompt("Ingrese Parrafo");
if (parrafo.length <= 20 && parrafo.charAt(parrafo.length-1)!=".") {
    alert("no es valido");
} else {
    for (let pos = 0; pos < parrafo.length-1 && estaOk; pos++) {
        if(parrafo.charAt(pos)== "," && parrafo.charAt(pos+1)!= " ") {
            estaOk = false;
        }
    }
    if (estaOk) {
        alert("parrafo valido");
        } else {
            alert("no es valido");
        }
    }
