const paintFill = (grid, pos, color) => {
  // O(N) where n is the number of adjacent original color cells
  let neighbors = getNeighbor(grid, pos, grid[pos[0]][pos[1]].color);
  grid[pos[0]][pos[1]].color = color;
  // DFS
  neighbors.forEach((n) => {
    paintFill(grid, n, color);
  });
};

const getNeighbor = (grid, pos, originColor) => {
  let [x, y] = pos;
  let neighbors = [[x-1, y-1], [x-1, y], [x-1, y+1],
                   [x, y-1], [x, y+1],
                   [x+1, y-1], [x+1, y], [x+1, y+1]];
  return neighbors.filter((i, j) => {
    return i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j].color === originColor;
  });
};
