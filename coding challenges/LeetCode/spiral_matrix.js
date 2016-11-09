// 2D matrix
// set x = 0, y = 0
// x_lower, x_higher
// y_lower, y_higher

let direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];

const spiralOrder = (matrix) => {
  // time: O(mn) where m is rows, n is columns
  let res = [];
  let x = 0, y = 0;
  let d = 0;
  while (res.length < matrix.length * matrix[0].length) {
    res.push(matrix[y][x]);
    matrix[y][x] = undefined;
    let nextX = x + direction[d][1];
    let nextY = y + direction[d][0];
    if (nextX < 0 || nextX >= matrix[0].length ||
        nextY < 0 || nextY >= matrix.length ||
        matrix[nextY][nextX] === undefined) {
          d = (d + 1) % 4;
        }
    x += direction[d][1];
    y += direction[d][0];
  }
  return res;
};

console.log(spiralOrder([
 [ 1, 2, 3, 10],
 [ 4, 5, 6, 11],
 [ 7, 8, 9, 12],
 [13, 14, 15, 16]
]));
