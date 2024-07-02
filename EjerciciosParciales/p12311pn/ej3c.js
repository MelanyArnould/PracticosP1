// 3c) (máximo 9 puntos) Al presionar el botón, validar el formulario, tomar de pantalla el nombre y año de la
// carrera y se debe cargar la lista con todos los autos que participaron y terminaron esa carrera, en orden
// creciente de tiempo (del menor al mayor). De cada auto poner marca en mayúsculas, precio y el lugar que
// ocupó en la carrera ("lugar 1", "lugar 2", ....). Si no hay datos, poner en la lista "sin datos".
// En el archivo fuentes.js se tiene:
window.addEventListener("load",inicio);
let sistema = new Sistema(); // contiene la instancia de Sistema
function inicio(){
document.getElementById("idBoton").addEventListener("click", proceso);
}
// parte 3c)
function proceso(){
let form = document.getElementById("idForm");
if (form.reportValidity()) {
    let nombreCarrera = document.getElementById("idCarrera").value;
    let anioCarrera = Number(document.getAnimations("idAnio").value);
    let listaAutosHtml = document.getElementById("idLista");
    listaAutosHtml.innerHTML = "";
    let aMostrar = [];

    for (let participacion of sistema.listaParticipaciones) {
        if (participacion.carrera.nombre == nombreCarrera && participacion.carrera.ano == anioCarrera && participacion.termino) {
            aMostrar.push(participacion);
        }
    }
    if (aMostrar.length == 0) {
        listaAutosHtml.innerHTML = "Sin datos";
    } else {
        aMostrar.sort(function(a,b) {return a.tiempo - b.tiempo;});
        let lugar = 1;
        for (let competidor of aMostrar) {
            let nodoLi = document.createElement("li");
            nodoLi.textContent = competidor.autoF1.marca.toUpperCase() + competidor.autoF1.precio + "Lugar: " + lugar;
            lugar++;
            listaAutosHtml.appendChild(nodoLi);
        }

        
    }
    }
}
