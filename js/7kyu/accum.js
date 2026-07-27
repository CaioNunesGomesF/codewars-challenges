    function accum(s) {
        let result = [];
        const values = s.split("");
        for(let i = 0; i < values.length; i++){
            let temporality = [];
            for(let y = 0; y < i + 1; y++){
                if(y === 0){
                    temporality.push(values[i].toUpperCase());
                }else{
                    temporality.push(values[i].toLowerCase());
                }
            }
            result.push(temporality.join(""));
        }

    return result.join("-");
}

console.log(accum("ZpglnRxqenU"))