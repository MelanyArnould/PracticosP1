//Repetir
// Leer n 
// Hasta que n >= 2
// F1 = 0
// F2 = 1
// Mostrar F1
// Mostrar F2
// Para F=3 hasta n 
//     prox = F1 + F2
//     Mostrar prox
//     F1 = F2
//     F2 = prox
// Fin Para

let n, F1, F2, prox, numero
F1 = 0;
F2 = 1;
do {
    numero = parseInt(prompt("Ingrese un numero"))
} while (numero < 2);
console.log(F1);
console.log(F2);
for(let n=3; n<=numero; n=n+1) {
    prox = F1 + F2;
    console.log(prox)
    F1 = F2;
    F2 = prox;
}