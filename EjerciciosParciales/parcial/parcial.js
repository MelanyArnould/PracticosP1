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