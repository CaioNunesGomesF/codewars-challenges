function scramble(str1,str2){
    let positionsUseds = [1];
    let newLyric = [];
    const caracters = str2.toLowerCase().split("");
    const aleatoriosCaracters = str1.toLowerCase().split("");

    console.log(aleatoriosCaracters.indexOf('o'));
    console.log(aleatoriosCaracters.includes(caracters[0]));
    console.log(positionsUseds.includes(1));

    for(let i = 0; i < caracters.length; i++){
        if(aleatoriosCaracters.includes(caracters[i]) || !positionsUseds.includes(i)){
            positionsUseds.push(aleatoriosCaracters.indexOf(caracters[i]));
            console.log(positionsUseds);
        } else{
          return false; 
        }
    }

    return 0;
}

console.log(scramble('rkqodlw', 'world'));