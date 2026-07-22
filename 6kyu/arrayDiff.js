function arrayDiff(a, b) {
  return a.filter(number => !b.includes(number));
}

console.log(arrayDiff([1, 2], [1]));