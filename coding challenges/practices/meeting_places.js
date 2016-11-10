// given a grid
// '#' , ' ', char
//
// grid = ["#####", "##A  #"...]
// center pos => add all the x pos / length, add all the y pos / length

const meetingPlace = (grid) => {
  // time: O(i*j) where i is length of row, j is length of col
  // space: O(1)
  let x = 0, y = 0, count = 0;
  for (let i=0; i<grid.length; i++) {
    for (let j=0; j<grid[0].length; j++) {
      if (!["#", ' '].includes(grid[i][j])) {
        x += i;
        y += j;
        count++;
      }
    }
  }
  return [Math.floor(x/count), Math.floor(y/count)];
};

let grid = ["######", "##   #", "#   B#", "#    #", "#C   #", "######"];
// [1, 2], [2, 4], [4, 1]
grid.forEach((g) => {
  console.log(g);
});

console.log(meetingPlace(grid));
