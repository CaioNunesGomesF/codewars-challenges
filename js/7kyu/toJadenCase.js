String.prototype.toJadenCase = function () {
    // O 'this' agora é a própria string que chamou o método
    const words = this.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {
        // Se a palavra estiver vazia (ex: espaços múltiplos), pula
        if (words[i].length > 0) {
            const word = words[i].split("");
            word[0] = word[0].toUpperCase();
            words[i] = word.join("");
        }
    }

    return words.join(" ");
};

// Agora você pode usar exatamente como o exercício pediu:
console.log("most trees are blue".toJadenCase());