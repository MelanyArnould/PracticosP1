//Queremod definir un objeto para representar un libro de programacion de 400 paginas.En forma literal seria:
var libro = {
    titulo: "Programacion",
    paginas: 400,
}
//Agregar funcion contiene para saber si el titulo contiene una palabra y mostrar la invocacion
libro.contiene = function(palabra) {
    let tituloLowerCase = this.titulo.toLowerCase;
    return tituloLowerCase(palabra.toLowerCase);
};
if (libro.contiene("javascript")) {
    console.log("Contiene la palabra");
} else {
    console.log("No contiene la palabra");
}

libro.esLargo = function() {
    largo = "EL libro es largo"
    if (this.paginas <= 400) {
        largo = "El libro es corto";
    } 
    return largo
}
console.log(libro.esLargo)