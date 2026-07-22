function comp(array1, array2){
    if (!array1 || !array2) return false;
    if (array1.length !== array2.length) return false;
    for(let i = 0; i < array1.length;i++){
        const numberQuantity = array1.filter(value => value === array1[i]);
        const validateComp = array2.filter(value => value == array1[i]**2);
        if(numberQuantity.length !== validateComp.length){
            return false;
        }
    }

    return true;
}

console.log(comp([ 121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))