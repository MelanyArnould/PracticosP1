class Contacto {
    constructor(nombre, apellido, edad, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
    }
    toString() {
        this.nombre+ " " + this.apellido+"("+this.edad + ") Tel:" + this.telefono;
    }
    esJoven() {
        return this.edad<25;
    }
}
class Agenda {
    constructor(){
        this.listaContactos = [];
    }
    agregarContacto(unContacto){
        this.listaContactos.push(unContacto);
    }
    
}