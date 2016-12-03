// bipartite => all the vertices can be colored with two colors
// such that every edge's both ends have different colors

const buildInput = (input) => {
  input = input.split("\n").map((line) => line.split(" ").map(Number));
  let map = new Map();
  for (let i=1; i<=input[0][0]; i++) { map.set(i, []); }
  for (let i=1; i<input.length; i++) {
    let a = input[i][0];
    let b = input[i][1];
    map.set(a, map.get(a).concat(b));
    map.set(b, map.get(b).concat(a));
  }
  return map;
};

const checkBipartite = (input) => {
  let map = buildInput(input);
  let colorMap = new Map();
  let currentColor = true;
  let queue = [1];
  while (queue.length) {
    let nextQueue = [];
    for (let i=0; i<queue.length; i++) {
      colorMap.set(queue[i], currentColor);
      let neighbors = map.get(queue[i]);
      for (let n=0; n<neighbors.length; n++) {
        if (colorMap.get(neighbors[n]) === currentColor) {
          return 0;
        }
        if (map.get(neighbors[n])) {
          nextQueue.push(neighbors[n]);
        }
      }
      map.delete(queue[i]);
    }
    currentColor = !currentColor;
    queue = nextQueue;
  }
  return 1;
};

let input1 = `4 4
1 2
4 1
2 3
3 1`;

let input2 = `5 4
5 2
4 2
3 4
1 4`;

console.log(checkBipartite(input2));
