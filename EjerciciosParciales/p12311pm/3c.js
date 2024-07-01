// 3c) (máximo 9 puntos) Al presionar el botón idBoton, se verifica cuál radio botón está seleccionado y debe
// cargarse en la lista los nombres de las recetas del tipo indicado ordenadas alfabéticamente por nombre.
// Si no hay ninguna receta a mostrar, en la lista poner "Sin datos".
// En el archivo fuentes.js se tiene:
window.addEventListener("load",inicio);
let sistema = new Sistema(); // contiene la instancia de Sistema
function inicio(){
document.getElementById("idBoton").addEventListener("click", proceso);
}
// parte 3c)
function proceso(){
let tipoDulce = document.getElementById("idDulce").checked;
let tipo = "Salada";
if (tipoDulce) {
    tipo = "Dulce";
}
let recetasAMostrar = []
for (let receta of sistema.listaRecetas) {
    if(receta.tipo == tipo) {
        recetasAMostrar.push(receta);
    }
}
if (recetasAMostrar.length > 0) {
    recetasAMostrar.sort(function(a,b) {a.compararCon(b)})

    let listaRecetasHtml = document.getElementById("idListaRecetas");
    listaRecetasHtml.innerHTML = "";
    for(let unaReceta of recetasAMostrar) {
        let nodoLi = document.createElement("li");
        nodoLi.textContent = unaReceta.nombre;
        listaRecetasHtml.appendChild(nodoLi)
    }
} else {
    document.getElementById("idListaRecetas").innerHTML = "Sin datos"// este 
}

}
//En clase receta\
// compararCon(otraReceta) {
//     return this.nombre.localeCompare(otraReceta.nombre);
// }