// Given an directed graph with possibly negative edge weights and with n vertices and m edges, check whether it contains a cycle of negative weight.
// Bellman-Ford algorithm
// keep a distMap key as vertex, value as dist
// process V-1 times
// in each process,
// go through all the vertices
// see the neighbors and
// if we find any better distance,
// update the distance map

const buildMap = (input) => {
  // return map
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
  return [map, input[0][0], input.slice(1)];
};

const detectNegativeCycle = (input) => {
  // time: O(V**2 + E)
  let [map, numOfV, edges] = buildMap(input);
  let distMap = new Map();
  distMap.set(1, 0);
  for (let i=0; i<numOfV - 1; i++) {
    for (let v=1; v<=numOfV; v++) {
      if (distMap.get(v) === undefined) {
        continue;
      }
      let distUntilHere = distMap.get(v);
      let neighbors = map.get(v);
      neighbors.forEach((ob) => {
        if (distMap.get(ob.v) === undefined || distMap.get(ob.v) > distUntilHere + ob.w) {
          distMap.set(ob.v, distUntilHere + ob.w);
        }
      });
    }
  }
  for (let i=0; i<edges.length; i++) {
    let aDist = distMap.get(edges[i][0]);
    let bDist = distMap.get(edges[i][1]);
    if (aDist + edges[i][2] < bDist) {
      return 1;
    }
  }
  return 0;
  // at the end of the all the process,
  // if it doesn't have negative cycle,
  // distMap should have shortest path for every vertex
  // go through the edges one more time
  // see if any edge makes better distance,
  // that means we have a negative cycle
};

const input1 = `4 4
1 2 -5
4 1 2
2 3 2
3 1 1`;

const input2 = `3 3
1 2 7
1 3 5
2 3 2`;

console.log(detectNegativeCycle(input2));
