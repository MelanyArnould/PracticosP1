// Se tiene un array con los nombres de artículos básicos y sus precios tomados el día 1, día 15
// y día 30 de un mes. Se desea saber cuántos artículos tuvieron subida en todas sus mediciones, respecto
// a la medición inmediata anterior.
// Firma: function precios(datos)
// Ejemplo: Recibe array datos: ["pan", 10, 11, 13, "leche", 50, 50, 51, "tomates", 40, 30, 28,
// "queso", 100, 99, 102 , "dulce", 50,57,58, "sopa", 20, 28, 23],
// retorna: 2 (corresponde al pan y dulce).
function precios(datos) {
    let contador = 0;
    for (let pos = 1; pos < datos.length-2; pos+=4 ) {
        if (datos[pos] < datos[pos+1] && datos[pos+1] < datos[pos+2]) {
                contador ++;
        }
    }
    return contador;
}

console.log(precios(["pan", 10, 11, 13, "leche", 50, 50, 51, "tomates", 40, 30, 28,"queso", 100, 99, 102 , "dulce", 50,57,58, "sopa", 20, 28, 23]))