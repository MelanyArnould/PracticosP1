//recibe evaluaciones y retorna los numeros de candidatos que obtuvieron ambos puntajes mayores al minimo.
function mejoresCandidatos(puntajes, minimo) {
    let respuesta=[]
    for (i=0; i<puntajes.length; i+=2) {
        if (puntajes[i] >  minimo && puntajes[i+1] > minimo) {
            respuesta.push(i);
        }
    }
    return respuesta;
}