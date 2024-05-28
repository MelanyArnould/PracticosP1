// Implementar la función convertirCelsius(grados), que recibe una cantidad de grados en Fahrenheit y los convierte a Celsius. (fórmula: (grados-32)*5/9)
function convertirCelsius(grados) {
    let celsius = ((grados-32)*5/9);
    return celsius;
}
console.log(convertirCelsius(32)); // deberia dar 0