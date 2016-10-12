const maxRegion = (n, m, grid) => {
  let max = 0;
  console.log(getRegion(n, m, 0, 0, grid));
  // for (let i=0; i<n; i++) {
  //   for (let j=0; j<m; j++) {
  //     if (grid[i][j] === 1) {
  //       let newRegion = getRegion(n, m, i, j, grid);
  //       if (newRegion.length > max) {
  //         max = newRegion.length;
  //       }
  //     }
  //   }
  // }
};

const getRegion = (n, m, i, j, grid) => {
  let filledNeighbors = neighbors(n, m, i, j, grid);
  let region = [[i, j]];
  if (filledNeighbors.length) {
    grid[i][j] = 'X';
    filledNeighbors.forEach((pos) => {
      console.log(grid);
      region = region.concat(getRegion(n, m, pos[0], pos[1], grid));
    });
  }
  return region;
};

const neighbors = (n, m, i, j, grid) => {
  let neighborPos = [[i-1, j-1], [i-1, j], [i-1, j+1],
                     [i, j-1], [i, j+1],
                     [i+1, j-1], [i+1, j], [i+1, j+1]];
  neighborPos = neighborPos.filter((pos) => {
    return (pos[0] >= 0 && pos[0] < n &&
            pos[1] >= 0 && pos[1] < m && grid[pos[0]][pos[1]]);
  });
  return neighborPos;
};

let grid = `1 1 0 0
0 1 1 0
0 0 1 0
1 0 0 0`.split("\n").map((line) => line.split(" ").map(Number));

maxRegion(4, 4, grid);
