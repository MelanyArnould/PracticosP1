// Escribir un programa reciba un número de 3 dígitos e indique si es un número de Armstrong.
// Nota: un número de Armstrong es aquel en el cual la suma de cada uno de sus dìgitos elevado al número total de dìgitos es igual al a sí mismo.
// Ej: Si evaluamos 371 sería 3^3 + 7^3 +1^3 = 371

let numero = Number(prompt("Ingrese el numero"));
let stringify = (numero + "");
let numero1 = stringify.charAt(0);
let numero2 = stringify.charAt(1);
let numero3 = stringify.charAt(2);
if ((numero1**3 + numero2**3 + numero3**3) == stringify) {
    console.log("Es un numero de Armstrong");
} else {
    console.log("No es un numero de Armstrong");
}