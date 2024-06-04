class Contacto {
    constructor(nombre, apellido, edad, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
    }
    toString() {
        return this.nombre+ " " + this.apellido+"("+this.edad + ") Tel:" + this.telefono;
    }
    esJoven() {
        return this.edad<25;
    }
    darNombreCompleto() {
        return this.nombre + " " + this.apellido
    }
    compararCon(otroContacto) {
        let resultado
        if (this.edad < otroContacto.edad) {
            resultado = -1;
        } else if (this.edad > otroContacto.edad) {
            resultado = 1;
        } else {
            resultado = 0;
        }
        return resultado;
        //return this.edad-otroContacto.edad;
    }
    compararConPorEdadYApellido(otroContacto) {
        let resultado = this.edad - otroContacto.edad;
        if (resultado == 0){
            if(this.apellido < otroContacto.apellido) {
                resultado = -1;
            } else if (this.apellido > otroContacto.apellido) {
                resultado = 1;
            } else {
                resultado = 0;
            }
        }
    }
}
class Agenda {
    constructor(){
        this.listaContactos = [];
    }
    agregarContacto(unContacto){
        this.listaContactos.push(unContacto);
        this.listaContactos.sort(function(a,b){return a.compararCon(b);});
    }
    darTodos(){
        return this.listaContactos;
    }
    darJovenes() {
        let resultado = [];
        for (let unContacto of this.listaContactos) {
            if (unContacto.esJoven()) {
                resultado.push(unContacto);
            }
        }
        return resultado;
    }
    
}