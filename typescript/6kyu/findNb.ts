export function findNb(m: number): number {
  let soma = 0;
  let n = 1;

  while (soma < m) {
    soma += Math.pow(n, 3);

    if (soma === m) {
      return n;
    }

    n++;
  }
  return -1;
}

console.log(findNb(4183059834009), 2022);
console.log(findNb(24723578342962), -1);
console.log(findNb(135440716410000), 4824);
console.log(findNb(40539911473216), 3568);
