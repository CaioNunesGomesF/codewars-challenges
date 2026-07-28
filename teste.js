function solution(number) {
    const numbers = [];
    if (number < 0) {
        return 0;
    }
    for(let i=1;i<number;i++){
        if(i % 3 === 0 || i % 5 ===0){
            numbers.push(i);
        }
        if(i < 0){
            return 0;
        }
    }
    return numbers.reduce((value, currentValue) => value + currentValue, 0);
}

console.log(solution(10));
