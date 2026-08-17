export function beeramid(bonus: number, price: number): number {
    let totalBonus = bonus / price;
    let levels = 1;
    while(true){
        const powLevel = Math.pow(levels, 2)
        if(totalBonus >= powLevel){
            totalBonus = totalBonus - powLevel;
            levels = levels + 1
        } else {
            levels = levels - 1
            break;
        }
    }
    return levels;
}

console.log(beeramid(9, 2), 1);
console.log(beeramid(10, 2), 2);
console.log(beeramid(11, 2), 2);
console.log(beeramid(21, 1.5), 3);
console.log(beeramid(454, 5), 5);
console.log(beeramid(455, 5), 6);
console.log(beeramid(4, 4), 1);
console.log(beeramid(3, 4), 0);
console.log(beeramid(0, 4), 0);
console.log(beeramid(-1, 4), 0);