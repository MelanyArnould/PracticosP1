// Hacer una función que recibe n y retorna la suma de todos los números entre 1 y n.
function sumar(n) {
    let suma=0;
    for (i=1; i<=n; i++) {
        suma +=i;
    }
    return suma;
}