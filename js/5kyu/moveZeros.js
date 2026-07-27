function moveZeros(arr) {
    let result = [];
    let filteredArr = arr.filter(item => item !== 0);
    let zeros = arr.filter(item => item  === 0);
    return [...filteredArr, ...zeros];
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))