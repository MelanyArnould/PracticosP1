function cargarArray(cantidad) {
    let notas = [];
    for (let n=1; n<=cantidad; n++) {
        let dato= Number(prompt("ingrese dato"));
        notas.push(dato);
    }
    alert(notas)
}