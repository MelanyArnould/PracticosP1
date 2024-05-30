window.addEventListener("load", inicio)

function inicio() {
    document.getElementById("btnAgregar").addEventListener("click", agregar)
}
let miAgenda = new Agenda()

function agregar() {
    let unNombre = document.getElementById("nombre").value;
    let unApellido = document.getElementById("apellido").value;
    let unaEdad = document.getElementById("edad").value;
    let unTelefono = document.getElementById("telefono").value;

    let unContacto = new Contacto(unNombre, unApellido, unaEdad, unTelefono)
    miAgenda.agregarContacto(unContacto)
    console.log(miAgenda)
}
