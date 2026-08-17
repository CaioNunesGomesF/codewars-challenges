export function getLengthOfMissingArray(arrayOfArrays: any[]) {
  if (!arrayOfArrays || arrayOfArrays.length === 0) return 0;
  if (arrayOfArrays.some((arr) => !arr || arr.length === 0)) return 0;
  const sortedArray = arrayOfArrays
    .sort((a, b) => a.length - b.length)
    .map((value) => value.length);
  for (let i = 0; i < sortedArray.length - 1; i++) {
    if (sortedArray[i + 1] !== sortedArray[i] + 1) {
      return sortedArray[i] + 1;
    }
  }
  return 0;
}

console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]),
  3,
);
console.log(
  getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]),
  2,
);
console.log(getLengthOfMissingArray([[null], [null, null, null]]), 2);
console.log(
  getLengthOfMissingArray([
    ["a", "a", "a"],
    ["a", "a"],
    ["a", "a", "a", "a"],
    ["a"],
    ["a", "a", "a", "a", "a", "a"],
  ]),
  5,
);
console.log(getLengthOfMissingArray([]), 0);
