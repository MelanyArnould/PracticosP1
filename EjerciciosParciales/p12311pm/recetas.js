// Se quiere llevar una página para almacenar recetas de cocina y sus ingredientes. Se registran los
// ingredientes y las recetas con una lista de ingredientes. Cada receta tiene un nombre, una lista de
// ingredientes, un texto con los pasos a seguir y un tipo que indica si es “Salada” o “Dulce”. Cada ingrediente
// tiene nombre y descripción.
// 3a) (máximo 9 puntos) En la clase Sistema, implementar el método ingredientesUtilizados(), que retorna
// un array con todos los ingredientes que son utilizados por al menos alguna receta. No repetir ingredientes.
class Ingrediente {
    constructor(nombre, descripcion){
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}
class Receta{
    constructor(nombre, restaurante, pasos, tipo){
        this.nombre=nombre;
        this.ingredientes = ingredientes; //lista objetos Ingrediente
        this.pasos = pasos;
        this.tipo = tipo;
    }
    
    compararCon(otraReceta) {
        return this.nombre.localeCompare(otraReceta.nombre);
    }
}
class Sistema{
    constructor(){
        this.listaRecetas = [];
        this.listaIngredientes =[];
}
// pedido 3ª
ingredientesUtilizados(){
    let ingredientesUtilizadosEnRecetas = []
    for (let ingrediente of this.listaIngredientes) {
        let esta = false;
        for (i=0; i<this.listaRecetas.length && esta; i++) {
            let receta = this.listaRecetas[i]
            if (receta.ingredientes.includes(ingrediente)) {
                esta = true;
            }
        }
        if (esta) {
            ingredientesUtilizadosEnRecetas.push(ingrediente)
        }
    }
    return ingredientesUtilizadosEnRecetas
    // let ingredientesUtilizadosEnRecetas = []
    // for (let receta of this.listaRecetas) {
    //     for (let ingrediente of receta.ingredientes) {
    //         if (!ingredientesUtilizadosEnRecetas.includes(ingrediente)) {
    //             ingredientesUtilizados.push(ingrediente)
    //         }
    //     }

    // }
    // return ingredientesUtilizadosEnRecetas;
}
}