
//crear contacto usando objetos literales seria:
let contacto = {
    nombre: "n",
    apellido: "a",
    edad: 23,
    telefono: 095111222
}
//Creacion de una clase
class Contacto {
    constructor(nombre, apellido, edad, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
    }
    //Se le puede agregar funciones al contacto
    toString() {
        this.nombre+ " " + this.apellido+"("+this.edad + ") Tel:" + this.telefono;
    }
    esJoven() {
        return this.edad<25;
    }
}
//crear contacto usando la clase contacto seria:
let unContacto = new Contacto("Juan", "Perez", 25, "091222333")
//Creacion de una agenda
class Agenda {
    constructor(){
        this.listaContactos = [];

    }
    //Agregamps funcion para agregar contacto
    agregarContacto(unContacto){
        this.listaContactos.push(unContacto);
    }
    
}
//Creo una agenda
let miAgenda = new Agenda
//Agrego un contacto a mi agenda
miAgenda.agregarContacto(new Contacto("Melany", "Arnould", 20, "095556677"))

console.log(miAgenda)
