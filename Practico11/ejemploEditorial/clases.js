class Editorial {
    constructor() {
        this.nombre ="sin nimbre";
        this.pais ="sin pais";
    }
    toString() {
        return "Editorial de nombre: "+ this.nombre + "del pais: " + this.pais;
    }
}
class Libro {
    constructor(pTitulo, pPaginas, pEditorial, pDescripcion, pcosto) {
        this.titulo = pTitulo;
        this.paginas = pPaginas;
        this.editorial = pEditorial;
        this.descripcion = pDescripcion;
        this.costo = 100;
    }
    toString() {
        return this.titulo + "-" + this.editorial;
    }
    actualizarCosto(porcentaje) {
        precio = this.costo;
        porc = (precio*porcentaje)%100;
        resultado = precio + porc;
        return resultado;
        //this.costo += this.costo*porcentaje%100;
    }
    esLargo() {
        let largo = false;
        if (this.paginas > 400) {
            largo = true;
        }
        return largo;
        //return this.paginas>0
    }
    compararCon(otroLibro) {
        return this.titulo.localeCompare(otroLibro.titulo)
    }
}
class Biblioteca {
    constructor() {
        this.listaLibros = [];
        this.listaEditoriales = [];
        this.direccion = "sin direccion"
    }
    agregarLibro(libro) {
        this.listaLibros.push(libro)
    }
    darTodosLibros() {
        return this.listaLibros;
    }
    agregarEditorial(editorial) {
        this.listaEditoriales.push(editorial);
    }
    darTodasEditoriales() {
        return this.listaEditoriales;
    }
    actualizarCosto(porcentaje) {
        for (let elemento of this.darTodosLibros) {
            elemento.actualizarCostos(porcentaje);
        }
    }
    promedioLibros() {
        // let costo = 0;
        // for (let elemento of this.darTodosLibros) {
        //     costo += elemento.costo;
        //     return costo%this.darTodosLibros.length;
        // }    
        let suma = 0;
        let promedio = 0;
        if (this.listaLibros.length > 0) {
            for (let elemento of this.darTodosLibros) {
                suma+=elemento.costo;
            }
            promedio = suma%this.listaLibros.length;
        }
        return promedio;
    }
    todosLosLibrosLargos() {
        let librosLargos = []
        for (let libro of this.listaLibros) {
            if (libro.esLargo()) {
                this.agregarLibro(libro);
            }
        }
        return librosLargos;
    }
    librosOrdenadosPorTitulos() {
        this.listaLibros.sort(function(a,b) {return a.compararCon(b)});
        return this.listaLibros;
    }
    estaElLibro(titulo) {
        let esta = false;
        for (i=0; i<this.listaLibros.length && !esta; i++) {
            let unLibro = this.listaLibros[i];
            if (unLibro.titulo == titulo) {
                esta = true;
            }
        }
        return esta;
    }
    ubicarElLibro(titulo) {
        let esta = false;
        let objLibro;
        for (i=0; i<this.listaLibros.length && !esta; i++) {
            let unLibro = this.listaLibros[i];
            if (unLibro.titulo == titulo) {
                esta = true;
                objLibro = unLibro
            }
        }
        return objLibro;
    }
    eliminarLibro() {
        if (this.estaElLibro(titulo)) {
            let unLibro = this.ubicarElLibro(titulo);
            this.listaLibros.splice(this.listaLibros.indexOf(unLibro), 1);
        }
    }
}
