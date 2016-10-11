
const processData = (input) => {
  let arr = input.split("\n");
  let q = Number(arr.shift());
  for (let i=0; i<q; i++) {
    let nm = arr.shift().split(" ").map(Number);
    let edges = [];
    for (let j=0; j<nm[1]; j++) {
      edges.push(arr.shift().split(" ").map(Number));
    }
    let start = Number(arr.shift());
    console.log(shortestPath(nm[0], edges, start));
  }
};

const generateEdgeHash = (edges) => {
  let edgeHash = {};
  edges.forEach((e) => {
    if (!edgeHash[e[0]]) {
      edgeHash[e[0]] = [];
    }
    if (!edgeHash[e[1]]) {
      edgeHash[e[1]] = [];
    }
    edgeHash[e[0]].push(e[1]);
    edgeHash[e[1]].push(e[0]);
  });
  return edgeHash;
};
//
// const generateEdgeHash = (edges) => {
//   return edges.reduce((memo, e) => {
//     if (!memo[e[0]]) {
//       memo[e[0]] = [];
//     }
//     if (!memo[e[1]]) {
//       memo[e[1]] = [];
//     }
//     memo[e[0]].push(e[1]);
//     memo[e[1]].push(e[0]);
//     return memo;
//   }, {});
// };


const shortestPath = (numOfNodes, edges, start) => {
  let edgeHash = generateEdgeHash(edges);
  let queue = [start];
  let paths = {};
  paths[start] = 0;
  while (queue.length) {
    let current = queue.shift();
    let nextDist = paths[current] + 6;
    edgeHash[current].forEach((node) => {
      if (paths[node] === undefined) { queue.push(node); }
      if (paths[node] === undefined || paths[node] > nextDist) {
        paths[node] = nextDist;
      }
    });
  }
  let result = [];
  for (let n=1; n<= numOfNodes; n++) {
    if (n !== start) {
      result.push(paths[n] === undefined ? -1 : paths[n]);
    }
  }
  return result.join(" ");
};

let file = `2
4 2
1 2
1 3
1
3 1
2 3
2`;

processData(file);
