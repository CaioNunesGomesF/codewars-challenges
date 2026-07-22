function getCount(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    const newArray = str.split("");
    let count = 0;

    for(let i = 0; i < vogais.length; i++){
        const quantity = newArray.filter(vogal => vogal === vogais[i]).length;
        count = count + quantity;
    }

    return count;
}

console.log(getCount('sd fgs  dgaaaaaaaaaaoosSDaGd'))