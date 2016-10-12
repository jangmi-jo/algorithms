const maxRegion = (n, m, grid) => {
  grid = [].concat(...grid);
  let max = 0;
  for (let i=0; i<grid.length; i++) {
    if (grid[i] === 1) {
      let newRegion = getRegion(n, m, i, grid);
      if (max < newRegion.length) { max = newRegion.length; }
    }
  }
  return max;
};

const getRegion = (n, m, i, grid) => {
  let region = [i];
  grid[i] = 'X';
  let idx = 0;
  while (idx < Object.keys(region).length) {
    neighbors(n, m, region[idx], grid).forEach((neighbor) => {
      grid[neighbor] = 'X';
      region.push(neighbor);
    });
    idx++;
  }
  return region;
};

const neighbors = (n, m, i, grid) => {
  let left = [i - 1 - m, i - 1, i - 1 + m];
  let right = [i + 1 - m, i + 1, i + 1 + m];
  let all = [i - m, i + m];
  if (i % m !== 0) { all = all.concat(left); }
  if (i % m !== m - 1) { all = all.concat(right); }
  all = all.filter((idx) => {
    return idx >= 0 && idx < grid.length && grid[idx] === 1;
  });
  return all;
};

let grid = `1 1 0 0 0
0 1 1 0 0
0 0 1 0 1
1 0 0 0 1
0 1 0 1 1`.split("\n").map((line) => line.split(" ").map(Number));

console.log(maxRegion(5, 5, grid));
