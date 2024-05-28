// Implementar la función Buzz, que recibe un número natural n y retorna la palabra "buzz", si el número es múltiplo de 3 o de 5; en otro caso retorna el mismo número.
function Buzz(n) {
    let res = "";
    if(n % 3 === 0 || n % 5 === 0){
        res = "buzz";
    } else {
        res += n;
    }
    return res;
}

console.log(Buzz(15));
console.log(Buzz(13));
console.log(Buzz(3));
