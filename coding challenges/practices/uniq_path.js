// for this one, just make the very first cell
// [0, 0] => 1
// then fill the every other cells depends on
// its left cell + top cell
// for the first line, need to check if the top line exists

const uniquePathsWithObstacles = (grid) => {
  // time: O(mn) where m is row, n is col
  // space: O(1) modify the grid
  for (let i=0; i<grid.length; i++) {
    for (let j=0; j<grid[0].length; j++) {
      if (grid[i][j] === 0) {
        if (i === 0 && j === 0) {
          grid[i][j] = 1;
        } else {
          grid[i][j] += grid[i-1] === undefined ? 0 : grid[i-1][j];
          grid[i][j] += grid[i][j-1] || 0;
        }
      } else {
        grid[i][j] = 0;
      }
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
};
