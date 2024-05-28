//For of recorre todos los elementos de la lista, no los indices.
// splice(2,1) elimina desde el lugar 2, un elemento
//push agrega y pop elimina

let lista = [2, 7, 8, 1]
for (elem of lista) {
    console.log(elem)
}
let amigo = ["Juan", "Perez", 25, "099123456"]
//Nos permite guardar un amigo cada 4 espacios, complejizando el problema.
//Array asociativo => objeto literal

let amigo1 = {
    nombre: "Ana",
    //La clave es unica, por ejemplo no podremos poner dos veces nombre
    apellido: "Reyes",
    edad: 22,
    telefono: "099111111"
}

let listaAmigos = [] //array indexado
listaAmigos.push(amigo) //Se guardara en la posicion 0 del array

//Mostrar en consola
console.log(amigo["nombre"])
console.log(amigo.nombre)

//Modificar atributo
amigo.telefono = "097141414"

//Agregar atributo 
amigo.peso = 70

//Agrego funciones al amigo
amigo.esJoven = function(){
    return this.edad < 25; //this refiere a que edad es una variable del objeto
}
//tambien podemos hacer las funciones al momento de la creacion del objeto
let amigo2 = {nombre:"Melany", apellido:"Arnould", edad: 20, telefono:"091222333", esJoven: function(){return this.edad < 25}}
