// given an undirected graph
// n vertices, m edges
// return the number of connected components in it.

// from 1 to n vertices
// input `5 2
// 1 4
// 2 4`

// keep count = 1
// keep a unvisited set
// start from 1
// explore all the vertices that  is reachable from 1
// while exploring, take the vertex out of the unvisited set
// when we are done with DFS with the current vertex,
// increment count

const buildEdgeMap = (input) => {
  // time, space: O(V + E)
  // where m is the num of vertices,
  // n is the num of edges
  let map = new Map();
  input = input.split("\n").map((line) => line.split(" ").map(Number));
  let numOfVertex = input[0][0];
  for (let i=1; i<=numOfVertex; i++) {
    map.set(i, []);
  }
  for (let j=1; j<input.length; j++) {
    map.set(input[j][0], map.get(input[j][0]).concat(input[j][1]));
    map.set(input[j][1], map.get(input[j][1]).concat(input[j][0]));
  }
  return [map, numOfVertex];
};

const numOfExits = (input) => {
  // time: O(V + E)
  let [map, numOfVertex] = buildEdgeMap(input);
  let count = 0;
  let stack = [1];
  while (map.size) {
    let current = stack[stack.length - 1];
    let flag = false;
    map.get(current).forEach((v) => {
      if (map.has(v)) {
        stack.push(v);
        flag = true;
      }
    });
    map.delete(current);
    if (flag === false) {
      stack = [Array.from(map.keys())[0]];
      count++;
    }
  }
  return count;
};

console.log(numOfExits(`7 6
1 4
2 4
2 5
3 6
6 7
3 7`));
