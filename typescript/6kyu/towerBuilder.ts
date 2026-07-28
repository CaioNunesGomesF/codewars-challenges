export const towerBuilder = (nFloors: number): string[] => {
    let tower: string[] = [];
    
    for(let i=0;i<nFloors;i++){
        let qtdEstrela = (i*2) + 1;
        let qtdEspacos = nFloors - i - 1;

        let espacos = " ".repeat(qtdEspacos);
        let estrelas = "*".repeat(qtdEstrela);
        let andar = espacos + estrelas + espacos;
        tower.push(andar);
    }
    return tower;
}

console.log(towerBuilder(3));

