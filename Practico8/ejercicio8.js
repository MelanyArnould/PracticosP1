//  Dado un array cargado con números, indicar cuál es el número que aparece más veces y su cantidad de ocurrencias. Si hubiera varios, cualquiera de ellos.
// Ej: [1,5,1,5,7,8,1] retorna “el número 1 con 3 ocurrencias”

function repeticiones(array) {
  let resultado = [0, 0];
  let numero = Number.MIN_VALUE;

  for (let i = 0; i < array.length; i++) {
    let contadorI = 0;
    for (let j = i; j < array.length; j++) {
      if (array[i] == array[j]) {
        contadorI += 1;
      }
    }
    console.log(contadorI);
    numero = array[i];
    if (contadorI > resultado[1]) {
      resultado[0] = numero;
      resultado[1] = contadorI;
      console.log(resultado[0]);
    }
  }
  return "el numero " + resultado[0] + " con " + resultado[1] + " ocurrencias.";
}
console.log(repeticiones([1, 5, 1, 5, 7, 8, 1]));
