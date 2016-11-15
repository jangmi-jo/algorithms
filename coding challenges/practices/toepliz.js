// 6789  => [[6, 7, 8, 9], [4, 6, 7, 8], ..]
// 4678
// 3467
// idea: check every elements in matrix
// see if it's same as matrix[i][j] === matrix[i+1][j+1]

// assume matrix is array of arrays
const toepliz = (matrix) => {
  // time: O(m*n), space: O(1)
  for (let i=0; i<matrix.length - 1; i++) {
    for (let j=0; j<matrix[0].length - 1; j++) {
      if (matrix[i][j] !== matrix[i+1][j+1]) {
        return false;
      }
    }
  }
  return true;
};
