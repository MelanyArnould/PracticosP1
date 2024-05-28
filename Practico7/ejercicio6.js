// Implementar function abreviar(frase)
// Recibe una frase y la retorna abreviada (si es de largo mayor a 5). Ejemplo: recibe “Hoy es lunes”, retorna: “Hoy e...”a

function abreviar(frase) {
    let retorno = frase;
    let puntos = "";
    if (frase.length>5) {
        for (i=5; i< frase.length; i++) {
            puntos += ".";
        }
        retorno = frase.slice(0,5) + puntos
    }
    return retorno;
}
console.log(abreviar("hola hola"));
console.log(abreviar("hola"));
console.log(abreviar("computadora"));