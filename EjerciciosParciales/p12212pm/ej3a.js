// Una confitería tiene un conjunto de pasteleros, cada uno de ellos prepara ciertos postres.
// 3a) (máximo 9 puntos) En la clase Sistema, implementar el método pastelerosEstrella que retorna la lista
// de pasteleros que preparan la máxima cantidad de postres. Debe estar ordenado por nombre de pastelero creciente.

class Pastelero{
constructor(nombre, direccion){
this.nombre = nombre;
this.direccion= direccion;
}
}
class Sistema{
constructor(){
this.listaPostres = [];
this.listaPasteleros =[];
}
// pedido 3a
pastelerosEstrella(){
    
}

postresPorPastelero() {
    let contador;
    let misPasteleros = [];
    for(let pastelero of this.listaPasteleros) {
        contador = 0;
        for (let postre of this.listaPostres) {
            if (postre.pastelero == pastelero) {
                contador++;
            }
        }
        let nuevoPastelero = new Pastelero(pastelero, )
    }

        
    }
}
class Postre{
constructor(nombrePostre, pastelero,costo){
this.nombrePostre= nombrePostre;
this.pastelero = pastelero; // objeto Pastelero;
this.costo=costo;
}
}

