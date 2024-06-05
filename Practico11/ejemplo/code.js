window.addEventListener("load", inicio)

function inicio() {
    document.getElementById("btnAgregar").addEventListener("click", agregar)
    document.getElementById("idBotonJovenes").addEventListener("click", consultarJovenes)
    document.getElementById("idBotonEliminar").addEventListener("click", eliminar)
    precargarDatos();
}
let miAgenda = new Agenda()

function precargarDatos() {
    miAgenda.agregarContacto(new Contacto("ana", "rodrigurez", 30, "091222333"));
    miAgenda.agregarContacto(new Contacto("juan", "rodrigurez", 15, "091222777"));
    actualizar();
}
function eliminar() {
}

function agregar() {
    let unNombre = document.getElementById("nombre").value;
    let unApellido = document.getElementById("apellido").value;
    let unaEdad = document.getElementById("edad").value;
    let unTelefono = document.getElementById("telefono").value;

    let unContacto = new Contacto(unNombre, unApellido, unaEdad, unTelefono)
    miAgenda.agregarContacto(unContacto)
    console.log(miAgenda)
    document.getElementById("formAgregarContacto").reset();
    if (!miAgenda.existeContacto(unContacto)) {
        miAgenda.agregarContacto(unContacto)
        actualizar()
        document.getElementById("formAgregarContacto")
    } else {
        alert("El contacto ya existe")
    }
}
function consultarJovenes() {
    cargarTabla();
}
function cargarTabla() {
    let tablaHtml = document.getElementById("idTablaJovenes");
    tablaHtml.innerHTML = "";
    let datos = miAgenda.darJovenes();
    if (datos.length == 0) {
        tablaHtml.innerHTML = "No hay ningun contacto joven";
    } else {
        for (let elemento of datos) {
            let fila = tablaHtml.insertRow();
            let celda = fila.insertCell();
            celda.innerHTML = elemento.darNombreCompleto();
            let celda2 = fila.insertCell();
            celda2.innerHTML = elemento.edad;
        }
    }
}
function actualizar() {
    cargarLista();
    cargarEliminar();
}
function cargarSelect() {
    miCimbo = document.getElementById("idContacyoEliminar")
    miCimbo.innerHTML = "";
    let datos = miAgenda.darTodos();
    for (let elemento of datos) {
        let nodoOption = document.createElement("option")
        let nodoText = document.createTextNode(elemento)
        nodoOption.appendChild(nodoText)
        nodoText.appendChild(elemento)
    }
}

function cargarLista() {
    let listaHtml = document.getElementById("idLista");
    listaHtml.innerHTML = "";
    let datos = miAgenda.darTodos();
    for (let elemento of datos) {
        let nodoLi = document.createElement("li");
        let nodoTexto = document.createTextNode(elemento);
        nodoLi.appendChild(nodoTexto);
        listaHtml.appendChild(nodoLi);
    }
}
