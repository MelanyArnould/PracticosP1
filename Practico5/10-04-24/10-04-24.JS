let practica = prompt("Ingrese practica").toUpperCase;
let estaOk = true;

for (let pos = 0; pos < practica.length; pos += 2) {
    primera = practica.cahrAt(pos);
    segunda = practica.charAt(pos++);
    if (!(primera == "A" && segunda == "B" || primera == "B" && segunda == "A")) {
        estaOk = false;
    }
}
if (estaOk) {
    console.log("A y B practicaron todos los dias");
} else {
    console.log("A y B no practicaron todos los dias");
}