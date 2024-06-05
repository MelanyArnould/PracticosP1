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
    constructor(pTitulo, pPaginas, pEditorial, pDescripcion) {
        this.titulo = pTitulo;
        this.paginas = pPaginas;
        this.editorial = pEditorial;
        this.descripcion = pDescripcion
    }
    toString() {
        return this.titulo + "-" + this.editorial;
    }
}
class Biblioteca {
    constructor() {
        this.listaLibros = [];
        this.listaEditoriales = [];
        this.direccion = "sin direccion"
    }
    agregarEditorial() {
        this.listaEditoriales.push(pEditorial);
    }
    agregarLibro() {
        this.listaLibros.push(pLibro)
    }
}

let unaEditorial = new Editorial();
unaEditorial.nombre = "Pearson";
unaEditorial.pais = "UY";
let unLibro = new Libro("p1", 400, unaEditorial, "Libro de programacion");
let unaBiblioteca = new Biblioteca();

