/*
rotate grid

1) figure out where do I need to process in 4-way rotation
2) process rotate!

*/

const processRotate = (grid, i, j, n) => {
  let temp = [grid[i][j]];
  let arr = [[j, n-1-i], [n-1-i, n-1-j], [n-1-j,  i], [i, j]];
  for (let a=0; a<4; a++) {
    temp.push(grid[arr[a][0]][arr[a][1]]);
    grid[arr[a][0]][arr[a][1]] = temp.shift();
  }
};

const rotateGrid = (grid) => {
  // time: O(n**2), space: O(1)
  // needs to be careful about the position to perform rotation
  let n = grid.length;
  for (let i=0; i<Math.floor(n/2); i++) {
    for (let j=i; j<n-i-1; j++) {
      processRotate(grid, i, j, n);
    }
  }
};

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]];

rotateGrid(arr);

console.log(arr);

/*
[7, 4, 1]
[8, 5, 2]
[9, 6, 3]
*/
