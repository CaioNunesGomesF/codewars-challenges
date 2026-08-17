export function alphabetPosition(text:string):string {
    const alfabetic = text.toLowerCase().match(/[a-z]/ig);
    if(!alfabetic) return '';
    return alfabetic.map((letter, index) => letter.charCodeAt(0) - 96).join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));