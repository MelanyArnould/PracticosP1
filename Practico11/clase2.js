//Asociacion de objetos

let libro = {
    titulo: "Titulo",
    paginas: 300,
    //Quiero agregar editorial
}

let unaEditorial = {
    nombre: "Editorial",
    pais: "Uy"
}

libro.editorial = unaEditorial

unaEditorial = "Nada"//No cambia el objeto asignaado al libro

//Cambiar un atributo del objeto dentro del objeto
libro.editorial.pais = "br"


