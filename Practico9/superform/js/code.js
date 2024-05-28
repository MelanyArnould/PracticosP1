window.addEventListener("load",inicio);

function inicio() {
    //configurar/asignar eventos sobre la pagina
    console.log("Pagina cargada")
    document.getElementById("idBoton").addEventListener("click",procesar);
    document.getElementById("idEnTabla").addEventListener("click",mostrar);
    document.getElementById("idEnLista").addEventListener("click",mostrar);

}

function procesar() {
    //Cambia la palabra
    // let palabra = document.getElementById("idPalabra").value;
    // document.getElementById("pResultado").innerHTML = palabra;
    // document.getElementById("idPalabra").innerHTML = "";

    //Escribe las palabras como lista
    // let palabra = document.getElementById("idPalabra").value;
    // document.getElementById("pResultado").innerHTML += palabra;
    // document.getElementById("pResultado").innerHTML += "<br>";
    // document.getElementById("idPalabra") = "";

    //Nos dice si la palabra es larga o no, no se quedan en pantalla
    // let palabra = document.getElementById("idPalabra").value;
    // let textoMostrar = palabra + " No es larga";
    // if (esLarga(palabra)) {
    //     textoMostrar = palabra + " Es larga";
    // }
    // document.getElementById("pResultado").innerHTML = textoMostrar;

    let palabra = document.getElementById("idPalabra").value;
    let textoMostrar = palabra + " No es larga";
    if (esLarga(palabra)) {
        textoMostrar = palabra + " Es larga";
        agregarEnLista(palabra);
        agregarEnTabla(palabra);
    }
    document.getElementById("pResultado").innerHTML = textoMostrar;
}

function esLarga(texto) {
    return texto.length > 10;
}

function agregarEnLista(texto) {
    let nodoLista = document.getElementById("idLista");
    let nodoLi = document.createElement("li");
    let nodoTexto = document.createTextNode(texto);
    nodoLi.appendChild(nodoTexto);
    nodoLista.appendChild(nodoLi);
}

function agregarEnTabla(texto) {
    let nodoTabla = document.getElementById("idTabla");
    let nodoFila = nodoTabla.insertRow();
    let nodoCelda = nodoFila.insertCell();
    nodoCelda.innerHTML = texto;

}

function mostrar() {
    let nodoRBTabla = document.getElementById("idEnTabla");
    if(nodoRBTabla.checked) {
        document.getElementById("idTabla").style.display="block"
        document.getElementById("idLista").style.display="none"
    } else {
        document.getElementById("idTabla").style.display="none"
        document.getElementById("idLista").style.display="block"

    }
}