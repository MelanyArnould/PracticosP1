// Implementar function primerNoRepetido(frase)
// Recibe una frase y retorna el primer carácter que no tiene repetidos. Ejemplo: recibe: “abacddbec” , retorna “e”. Si no hay ninguno, retorna “NINGUNO”.

function primerNoRepetido(frase) {
    let res = "NINGUNO";
    for(i=0; i<frase.length && res=="NINGUNO"; i++) {
        if (!(frase.slice(0,i).includes(i)) && !(frase.slice(i+1,frase.length).includes(i))) {
            res = frase.charAt(i); 
        }
    }
    return res;
}
console.log(primerNoRepetido("anana"));
console.log(primerNoRepetido("ana"));
console.log(primerNoRepetido("casa"));


