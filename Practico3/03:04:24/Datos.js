// Leer 10 numeros y mostrar suma de los positivos
let datoIngresado, suma;
suma = 0;
for(let i=1; i<10; i++) {
    datoIngresado = parseInt(prompt("Ingrese un numero"));
    if (datoIngresado > 0) {
        suma += datoIngresado;
    } 
}
console.log(suma);