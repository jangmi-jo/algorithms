// Given an undirected graph and two distinct vertices a and b, check if there is a path between a and b.
// returns boolean

// first line number of vertices, number of edges
// from second line, two vertices

// 1) keep visited map, queue
// 2) start from one vertex (a)
// 3) visit the first vertex in our queue
// 4) if the neighbors of the current vertex is not visited, add it to queue

// make a edge map with the input so we can easily look up the neighbors

const buildEdgeMap = (input) => {
  // time: O(E)
  let arr = input.split("\n").map((line) => line.split(' '));
  let map = new Map();
  for (let i=1; i<arr.length - 1; i++) {
    let [a, b] = arr[i];
    map.set(a, (map.get(a) || []).concat(b));
    map.set(b, (map.get(b) || []).concat(a));
  }
  let [s, e] = arr[arr.length - 1];
  return [map, s, e];
};

const mazeSolver = (input) => {
  // time, space: O(V + E)
  let [edgeMap, s, e] = buildEdgeMap(input);
  let visited = new Map();
  visited.set(s, true);
  let queue = [s];
  while (queue.length) {
    let c = queue.shift();
    edgeMap.get(c).forEach((neighbor) => {
      if (visited.get(neighbor) === undefined) {
        queue.push(neighbor);
        visited.set(neighbor, true);
      }
    });
    if (visited.get(e) !== undefined) {
      return true;
    }
  }
  return false;
};

console.log(mazeSolver(`4 4
1 2
3 2
4 3
1 4
1 5`));
