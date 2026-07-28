export function narcissistic(value: number): boolean {
    const numbers = String(value).split("");
    const powNumbers = numbers.map((item) => Math.pow(Number(item), numbers.length));
    const soma = powNumbers.reduce((total, atual) => total + atual, 0);
    return soma === value;
}

console.log(narcissistic(153));
