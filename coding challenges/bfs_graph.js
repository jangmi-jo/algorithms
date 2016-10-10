
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
    edgeHash[e[0]].push(e[1]);
  });
  return edgeHash;
};

const shortestPath = (numOfNodes, edges, start) => {
  let edgeHash = generateEdgeHash(edges);
  let visited = {};
  let distanceHash = {};
  distanceHash[start] = 0;
  let queue = [start];
  while (queue.length) {
    let currentNode = queue.shift();
    visited[currentNode] = true;
    if (edgeHash[currentNode]) {
      edgeHash[currentNode].forEach((n) => {
        if (!visited[n]) {
          queue.push(n);
          distanceHash[n] = distanceHash[currentNode] + 6;
        }
      });
    }
  }
  let result = [];
  for (let i = 1; i <= numOfNodes; i++) {
    if (i !== start) {
      if (distanceHash[i]) {
        result.push(distanceHash[i]);
      } else {
        result.push(-1);
      }
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
