// rotate matrix 90 degree clockwise

// input : 2d grid
// in-place
//

// [0, 0] => [0, 2] => [2, 2] =>
// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]

// [7, 4, 1]
// [8, 5, 2]
// [9, 6, 3]


// time: O(n**2)
// space: O(1)
const rotateHelper = (grid, i, j, n) => {
  let arr = [[j, n - 1 - i], [n - 1 - i, n - 1 - j], [n - 1 - j,  i], [i, j]];
  let queue = [grid[i][j]];
  for (let idx = 0; idx < 4; idx++) {
    queue.push(grid[arr[idx][0]][arr[idx][1]]);
    grid[arr[idx][0]][arr[idx][1]] = queue.shift();
  }
};

const rotateMatrix = (grid) => {
  let n = grid.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = i; j < n - 1 - i; j++) {
      rotateHelper(grid, i, j, n);
    }
  }
  grid.forEach((line) => {
    console.log(line);
  });
};

let fivebyfive = [[1, 2, 3, 4, 5],
  [7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26]];

let threebythree = [[1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]];

rotateMatrix(fivebyfive);
