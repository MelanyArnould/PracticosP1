// Una dieta saludable sugiere ingerir diariamente entre 1700 y 2350 calorías (ambos topes incluidos). Dado un
// array con las calorías consumidas cada día de una semana por una persona, implementar una función en JS
// que recibe el array y devuelve un nuevo array indicando cada valor y el nivel de consumo diario respectivo:
// “Inferior”, “Adecuado”, “Superior”. Además la función muestra con alert la palabra “saludable” si 4 días
// cualquiera o más consumió un nivel adecuado de calorías o “no saludable”, en caso contrario.
function alimentacion(calorias) {
    let res = [];
    let adecuado = 0;
    for (let valor of calorias) {
        res.push("adecuado");
        if (valor >= 1700 && valor <=2350) {
            res.push("adecuado");
            adecuado++;
        } else if (valor < 1700) {
            res.push("inferior");
        } else {
            res.push("superior");
        }
    } 
    if (adecuado >= 4) {
        alert("saludable");
    } else {
        alert("no saludable");
    }return res;
}