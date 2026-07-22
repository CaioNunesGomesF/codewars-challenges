function deleteNth(arr,n){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let quantityResult = result.filter(value => value === arr[i]).length;
        if(quantityResult < n){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(deleteNth([20,37,20,21], 1));