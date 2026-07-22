function findNextSquare(sq) {
  let raiz = Math.sqrt(sq);

  // 1. Verifica se a raiz do número original é inteira
  if (Number.isInteger(raiz)) {
    // 2. Se for, calcula o próximo número (raiz + 1) e eleva ao quadrado
    let proximaRaiz = raiz + 1;
    return proximaRaiz * proximaRaiz;
  }
  
  // 3. Se não for um quadrado perfeito, retorna -1
  return -1;
}

console.log(findNextSquare(121)); // 144
console.log(findNextSquare(114)); // -1