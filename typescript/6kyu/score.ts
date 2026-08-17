export function score(dice: number[]) {
    return dice.map((item,index) => dice.filter(filteredItem => item === filteredItem).length === 3 ? item * 100 : item === 1 || item == 5 ? dice.filter(filteredItem => item === filteredItem).length * 100 : 0).reduce((valor, atual) => valor = atual,0);
}

console.log(score([2, 3, 4, 6, 2]));