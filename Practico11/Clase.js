let auto = {
    marca: "Renault",
    precio: 20000,
    color: "Verde"
}

auto.color = "Azul"
auto.chapa = "ABC123"

let factura = {
    numero: 201,
    cliente: "Transportes SA",
    moneda: "eur",
    subtotal: 350.25,
    iva: 75.55
}
factura.total = function(descuento) {
    this.subtotal + this.iva - descuento;
}
//alert(factura.total(100))

let valoresFinales = []
for (i=10; i<100; i+=10) {
    valoresFinales.push(factura.total(i))
}

let estudiante = {
    nombre: "Nicolas",
    temasSabidos: [],
    hoyAprendi: function(tema){
    return this.temasSabidos.push(tema)
    }
}
estudiante.hoyAprendi("js");
estudiante.hoyAprendi("arrays");

estudiante.TemasQueSe = function(){
   return estudiante.temasSabidos;
}
console.log(estudiante.TemasQueSe())

