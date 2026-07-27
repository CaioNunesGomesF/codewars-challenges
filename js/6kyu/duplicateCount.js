function duplicateCount(text){ 
    const lower = text.toLowerCase();
    return lower.toLowerCase().split("").filter((element,index) => lower.indexOf(element) !== lower.lastIndexOf(element) && lower.indexOf(element) === index).length;
}
console.log(duplicateCount('Caaio'))

