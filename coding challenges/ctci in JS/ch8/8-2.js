// grid r rows, c columns
// robot will start from top left only can go right / down

const robotInAGrid = (grid) => {
  // bad assumption(making grid with 0 and -1)
  // time: O(r*c)
  grid[0][0] = 1;
  for (let r=0; r<grid.length; r++) {
    if (grid[r][0] === -1) {
      break;
    } else {
      grid[r][0] = 1;
    }
  }
  for (let c=0; c<grid[0].length; c++) {
    if (grid[0][c] === -1) {
      break;
    } else {
      grid[0][c] = 1;
    }
  }

  for (let r=1; r<grid.length; r++) {
    for (let c=1; c<grid[0].length; c++) {
      if (grid[r][c] === -1) { continue; }
      let top = grid[r - 1][c] === -1 ? 0 : grid[r-1][c];
      let left = grid[r][c - 1] === -1 ? 0 : grid[r][c-1];
      grid[r][c] = top + left;
    }
  }
  grid.forEach((line) => console.log(line));
};

let board = [
  [0, 0, -1, 0],
  [0, 0, 0, 0],
  [0, -1, 0, 0],
  [0, 0, 0, 0]
];

console.log(robotInAGrid(board));
