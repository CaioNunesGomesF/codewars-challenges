export const listSquared = (m: number, n: number) => {
  const result: [number, number][] = [];

  for (let i = m; i <= n; i++) {
    let sumDivisores = 0;

    for (let y = 1; y * y <= i; y++) {
      if (i % y === 0) {
        sumDivisores += y * y;

        const outroDivisor = i / y;
        if (outroDivisor !== y) {
          sumDivisores += outroDivisor * outroDivisor;
        }
      }
    }
    if (Number.isInteger(Math.sqrt(sumDivisores))) {
      result.push([i, sumDivisores]);
    }
  }

  return result;
};

console.log(listSquared(1, 250));
