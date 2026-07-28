export const makeNegative = (num: number): number => {
    if(num === 0 || num < 0){
        return num;
    }
  return num * -1;
};

console.log(makeNegative(-5));   