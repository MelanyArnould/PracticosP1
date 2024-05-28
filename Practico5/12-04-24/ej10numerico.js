let numero = parseInt(prompt("Ingrese un número"));
let es = false;

let dig1 = parseInt(numero/100);
let dig2 = parseInt(numero/10%10);
let dig3 = parseInt(numero%10);

let suma = Math.pow(dig1, 3) + Math.pow(dig2, 3) + 
    Math.pow(dig3, 3);
es = suma === numero;

if (es) {
    alert("Es un número de Armstrong");
} else {
    alert("No es un número de Armstrong");
}