//Ingresar numeros hasta que el ingresado sea 0, mostrar el mayor numero

let numero, numeroMayor;
numeroMayor = 0;
numero = Number(prompt("Ingrese un numero"));
while (numero != 0) {
    if (numero > numeroMayor) {
        numeroMayor = numero;
    }
    numero = Number(prompt("Ingrese un numero"));
}
console.log(numeroMayor);

//Si solo se pone un cero, mostrar error, y si se ingresa un numero menor a cero, este debe devolver este numero

let numero1, numeroMayor1, van;
numeroMayor1 = Number.NEGATIVE_INFINITY;//El numero mas pequeño que perite js
numero1 = Number(prompt("Ingrese un numero"));
van = 0;
while (numero1 != 0) {
    if (numero1 > numeroMayor1) {
        numeroMayor1 = numero1;
    }
    van = van+1;
    numero1 = Number(prompt("Ingrese un numero"));
}
if (van>0) {
    console.log(numeroMayor1);
} else {
    console.log("No hay datos");
}
