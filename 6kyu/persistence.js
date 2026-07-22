function persistence(num) {
    let times = 0;
    while(num >= 10){
        let digits = String(num).split("");
        let product = 1;
        for (let i = 0; i < digits.length; i++) {
            product = product * Number(digits[i]);
        }
        
        num = product; 
        times++;      
    }
    return times;
}


console.log(persistence(243));