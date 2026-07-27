function XO(str) {
    const x = str.toLowerCase().split("").filter(values => values === 'x').length;
    const o = str.toLowerCase().split("").filter(values => values === 'o').length;
    if(x === o){
        return true;
    }

    return false;
}

console.log(XO("xo"))