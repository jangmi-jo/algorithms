/*
Spiral ordering

1) set directions array
2) set start position
3) see the next element
4) if it's not undefined, go to the current direction
5) if it's undefined, change direction
6) do the process array's m * n times

*/

const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

const spiralOrdering = (grid) => {
  // time: O(nm) where n is num of rows, m is num of col
  const ordering = [];
  let i = 0, j = 0;
  let direction = 0;
  for (let k=0; k<grid.length * grid[0].length; k++) {
    ordering.push(grid[i][j]);
    grid[i][j] = undefined;
    let x = i + directions[direction][0];
    let y = j + directions[direction][1];
    if (grid[x] === undefined || grid[x][y] === undefined) {
      direction = (direction + 1) % 4;
    }
    i += directions[direction][0];
    j += directions[direction][1];
  }
  return ordering;
};

console.log(spiralOrdering([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]]));

// => [1, 2, 3, 6, 9, 8, 7, 4, 5]
