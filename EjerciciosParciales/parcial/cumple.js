function cumple(datos1, datos2) {
    let okay=true;
    for (let pos=0; pos<datos1.length && okay; pos++) {
        let veces = 0;
        for (let pos2=0; pos2< datos2.length && okay; pos2++) {
            if (datos1[pos]==datos2[pos2]) {
                veces++;
            }
        }
        if (veces != 1) {
            okay=false;
        }
        let lugarLista2 = datos2.indexOf(datos1[pos])
    }
}