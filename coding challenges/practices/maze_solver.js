const { maze1, maze2, maze3, maze4 } = require('./maze_ex.js');

// 1) start from the s
// 2) fill with num(distance from s) all the empty cells reachable from s
// 3) keep a count starting from 0
// 4) when we are done, the count is last distance
// 5) from the last count, find the count - 1 number and mark as +

const buildMazeArr = (lines) => {
  const maze = lines.split("\n").map((line) => line.split(""));
  const s = maze[0].indexOf(" ");
  const e = maze[maze.length - 1].indexOf(" ");
  return [maze, s, e];
};

const neighbors = (loc, maze, mark) => {
  const [x, y] = loc;
  let res = [[x-1, y], [x+1, y], [x, y-1], [x, y+1]];
  return res.filter((p) => p[0] >= 0 && p[0] < maze.length && p[1]>=0 && p[1] <maze[0].length && maze[p[0]][p[1]] === mark);
};

const mazeSolver = (input) => {
  const [maze, s, e] = buildMazeArr(input);
  let count = 0;
  let queue = [[0, s]];
  // find the shortest path
  while (queue.length) {
    let nextQueue = [];
    queue.forEach((c) => {
      maze[c[0]][c[1]] = count;
      neighbors(c, maze, ' ').forEach((n) => nextQueue.push(n));
    });
    count++;
    queue = nextQueue;
  }
  let pos = [maze.length - 1, e];
  let num = maze[pos[0]][pos[1]];
  while (maze[pos[0]][pos[1]]) {
    num--;
    maze[pos[0]][pos[1]] = "+";
    pos = neighbors(pos, maze, num)[0];
  }
  maze[pos[0]][pos[1]] = "+";
  return maze.map((row) => {
    return row.map((col) => {
      return typeof col === 'number' ? ' ' : col;
    }).join("");
  }).join("\n");
};


console.log(mazeSolver(maze3));
