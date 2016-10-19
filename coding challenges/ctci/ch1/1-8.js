// Zero matrix
// if an element in M*N matrix is zero, its entire row and column are set to 0

//  input = [[1, 2, 3], [4, 5, 0]] ==> [1, 2]
// output = [[1, 2, 0], [0, 0, 0]]

const zeroMatrix = (grid) => {
  let n = grid.length, m = grid[0].length;
  let zeroPos = [];
  // time: O(m*n)
  // space: O(n)
  for (let i=0; i<n; i++) {
    for (let j=0; j<m; j++) {
      if (grid[i][j] === 0) { zeroPos.push([i, j]);}
    }
  }
  zeroPos.forEach((pos) => {
    for (let i=0; i<n; i++) {
      grid[i][pos[1]] = 0;
    }
    for (let j=0; j<m; j++) {
      grid[pos[0]][j] = 0;
    }
  });
  return grid;
};

console.log(zeroMatrix([[0, 2, 3], [4, 5, 0], [7, 8, 9]]));
