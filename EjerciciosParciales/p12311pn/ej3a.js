// Se quiere hacer una página para almacenar la información de las carreras de F1. Se conoce la información
// de los autos y las participaciones en las diferentes carreras. En cada participación, se indica el auto, el tiempo,
// la carrera y si terminó o no la carrera (booleano).
// 3a) (máximo 9 puntos) En la clase Sistema, implementar el método autos (año), que dado un año, retorna
// los autos que participaron en alguna carrera de ese año y la terminaron. No se debe repetir los autos.
class AutoF1 {
constructor(precio, marca){
this.precio = precio;
this.marca = marca;
}
}
class Carrera{
constructor(nombre, año){
this.nombre=nombre;
this.ano = ano;
}
}
class Participacion{
constructor(autoF1, tiempo, termino, carrera) {
this.autoF1 = autoF1; //objeto AutoF1;
this.tiempo = tiempo; // en minutos
this.termino = termino; // booleano, true indica terminó
this.carrera= carrera; // objeto carrera
}
}
class Sistema{
constructor(){
this.listaAutosF1 = [];
this.listaCarreras =[];
this.listaParticipaciones = [];
}
// pedido 3ª
autos(ano){
    let resultado = [];
    for (let participacion of this.listaParticipaciones) {
        if (participacion.carrera.ano == ano && participacion.termino && !resultado.includes(participacion.autoF1)) {
            resultado.push(participacion.autoF1)
        }
    }
    return resultado;
}
}

