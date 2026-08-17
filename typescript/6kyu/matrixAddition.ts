type matrix = number[][];
export function matrixAddition(a: matrix, b: matrix): matrix {
  const primaryMatrix = a.map((row, i) => row.map((val, j) => val + b[i][j]));
  return primaryMatrix;
}

console.log(matrixAddition(  [ [1, 2, 3],
        [3, 2, 1],
        [1, 1, 1] ],
    //      +
      [ [2, 2, 1],
        [3, 2, 3],
        [1, 1, 3] ] ),)