// given a graph, find a minimum num of edges from a to b
// return the length of edges
// keep a unvisited set
// keep a counter = 0
// keep a queue
// start from a => put a in visited set / put a in queue
// in loop process,
// process all the vertices in current queue
// build the next queue in the loop
// increment the counter in each loop

const buildInput = (input) => {
  input = input.split("\n").map((line) => line.split(" ").map(Number));
  let map = new Map();
  for (let i=1; i<=input[0][0]; i++) { map.set(i, []); }
  for (let i=1; i<input.length - 1; i++) {
    let a = input[i][0];
    let b = input[i][1];
    map.set(a, map.get(a).concat(b));
    map.set(b, map.get(b).concat(a));
  }
  return [map, ...input[input.length - 1]];
};

const minimumFlight = (input) => {
  // time, space: O(V + E)
  let [map, s, e] = buildInput(input);
  let count = 0;
  let queue = [s];
  while (queue.length) {
    count++;
    let nextQueue = [];
    for (let v=0; v<queue.length; v++) {
      let neighbors = map.get(queue[v]);
      if (neighbors) {
        for (let n=0; n<neighbors.length; n++) {
          if (neighbors[n] === e) { return count; }
          if (map.get(neighbors[n])) {
            nextQueue.push(neighbors[n]);
          }
        }
      }
      map.delete(queue[v]);
    }
    queue = nextQueue;
  }
  return -1;
};

let input1 = `4 4
1 2
4 1
2 3
3 1
2 4`;

let input2 = `5 4
5 2
1 3
3 4
1 4
3 5`;
console.log(minimumFlight(input2));
