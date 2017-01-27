/*
sudoku checker
write a function that checks if the sudoku board is valid

1) check row
2) check col
3) check the region

*/

const hasDup = (arr) => {
  const set = new Set();
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === 0) { continue; }
    if (set.has(arr[i])) {
      return true;
    } else {
      set.add(arr[i]);
    }
  }
};

const isValid = (grid) => {
  // since sudoku board is only 9 * 9
  // time: O(1)
  for (let i=0; i<grid.length; i++) {
    if (hasDup(grid[i])) { return false; }
    if (hasDup(grid.map((row) => row[i]))) { return false; }
  }
  // don't love this code but I can't think better way right now
  // Everything has same time complexity and long code
  // Not sure how can I do better than this
  for (let a=0; a<3; a++) {
    for (let b=0; b<3; b++) {
      let temp = [];
      for (let c=0; c<3; c++) {
        for (let d=0; d<3; d++) {
          temp.push(grid[a*3+c][b*3+d]);
        }
      }
      if (hasDup(temp)) { return false; }
    }
  }
  return true;
};

console.log(isValid([[1, 2, 3, 4, 5, 6, 7, 8, 9],
         [0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 1, 0, 0, 0, 0],
         [0, 0, 0, 1, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0]]));
