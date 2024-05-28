let min = parseInt(prompt("Ingrese un numero"));
for (let i=1; i < 3; i++) {
    let dato = parseInt(prompt("Ingrese un numero"));
    if (dato < min) {
        min = dato;
    }
}
console.log("EL minimo es " + min);