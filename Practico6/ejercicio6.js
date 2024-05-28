// 6) Implementar function vecesLetra(frase, letra)
// Recibe una frase y una letra, retorna cuántas cuántas veces aparece esa letra en la frase recibida. Ejemplo: recibe: “hoy es viernes” y “a”, retorna 0.
function vecesLetra(frase, letra) {
    let contador;
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) == letra) {
            contador++;
        }
    }
    return contador;
}
console.log(vecesLetra(camara,a))