let n = Number(prompt("Ingrese un numero"));
let suma = 0;
for (let i=3; i < n; i += 3) {
    if (i%2 != 0) {
        console.log(i);
        suma = suma + i;
    }
}
console.log(suma);