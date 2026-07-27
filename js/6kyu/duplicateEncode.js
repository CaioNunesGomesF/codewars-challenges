function duplicateEncode(word){
    const lowerWord = word.toLowerCase().split("")
    const newWord = [];

    for(let i = 0; i < lowerWord.length; i++){
        if(lowerWord.indexOf(lowerWord[i]) === lowerWord.lastIndexOf(lowerWord[i])){
            newWord.push("(")
        } else{
            newWord.push(")")
        }
    }

    return newWord.join("");
}

console.log(duplicateEncode("din"));