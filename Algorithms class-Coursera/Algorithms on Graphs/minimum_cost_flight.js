// given directed graph with positive edge weights
// num of vertices, num of edges
// start vertex/end vertex
// find the shortest edge weight from s to e

// start from s
// keep a distance map => key as vertex, value as distance
// map[s] = 0
// keep a queue = [s]
// do the following until queue is empty
//
// map => {
  // 1: [{vertex: 2, weight: 1}]
// }
const buildMap = (input) => {
  // return map, s, e
  // time, space: O(V+E)
  let map = new Map();
  input = input.split("\n").map((line) => line.split(" ").map(Number));
  for (let i=1; i<=input[0][0]; i++) {
    map.set(i, []);
  }

  for (let i=1; i<=input[0][1]; i++) {
    let edge = {};
    edge.v = input[i][1];
    edge.w = input[i][2];
    map.set(input[i][0], map.get(input[i][0]).concat(edge));
  }
  let last = input[input.length - 1];
  return [map, ...last];
};

const minimumCost = (input) => {
  // time: O(V+E)
  let [map, s, e] = buildMap(input);
  let distMap = new Map();
  distMap.set(s, 0);
  let queue = [s];
  while (queue.length) {
    let current = queue.shift();
    let nextVs = map.get(current);
    let distUntilHere = distMap.get(current);
    nextVs.forEach((ob) => {
      if (distMap.get(ob.v) === undefined || distMap.get(ob.v) > distUntilHere + ob.w) {
        distMap.set(ob.v, distUntilHere + ob.w);
        queue.push(ob.v);
      }
    });
  }
  return distMap.get(e) === undefined ? -1 : distMap.get(e);
};

let input1 = `4 4
1 2 1
4 1 2
2 3 2
1 3 5
1 3`;

let input2 = `5 9
1 2 4
1 3 2
2 3 2
3 2 1
2 4 2
3 5 4
5 4 1
2 5 3
3 4 4
1 5`;

let input3 = `3 3
1 2 7
1 3 5
2 3 2
3 2`;

console.log(minimumCost(input3));
