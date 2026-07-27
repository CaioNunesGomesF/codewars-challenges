function scramble(str1, str2) {
    let letrasDisponiveis = str1.toLowerCase();
    
    for (let i = 0; i < str2.length; i++) {
        let letraAtual = str2[i].toLowerCase();
        
        if (letrasDisponiveis.includes(letraAtual)) {
            // "Apaga" apenas a primeira ocorrência dessa letra
            letrasDisponiveis = letrasDisponiveis.replace(letraAtual, '');
        } else {
            // Se não encontrou a letra, já era. Não dá pra formar a palavra.
            return false;
        }
    }
    
    return true;
}

console.log(scramble('rkqodlw', 'world'));