let n, numero, maximo, suma, sumaMax
suma = 0
maximo = 0
n = Number(prompt("Ingrese un numero"))
for(let i=1; i<=n; i++) {
    numero = Number(prompt("Ingrese un numero"));
    suma = suma + numero;
    if (numero > maximo) {
    maximo = numero;
    sumaMax = suma
    }
}
console.log("El máximo es " + maximo);
console.log("La suma total es " + suma);
console.log("La suma hasta el máximo es " + sumaMax);