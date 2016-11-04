const { Vertex, AdjacencyList, AdjacencyMatrix } = require('./Graph.js');
const { makeSet, find, union } = require('../Data Structure/DisjointSet.js');

// in our edges, we sort the edges with weight
// pick the shortest edge for each time
// if it makes cycle, discard it
// if it doesn't, we select that one
// we do that until we don't have any edges left
// After all, we see if we visited all the vertices

// how to know if it makes cycle or not

const MinimumSpanningTree = (vertices, edges) => {
  // for connected undirected graph
  // time: O(ElogE + V)
  // space: O(V)
  let len = 0;
  edges.sort((a, b) => b[2] - a[2]);
  let setMap = new Map();
  vertices.forEach((v) => setMap.set(v, makeSet(v)));
  // build a map => key as vertex, val as Set
  while (edges.length) {
    let c = edges.pop();
    let aSet = setMap.get(c[0]);
    let bSet = setMap.get(c[1]);
    // find both compare their parent
    // if the parent is same, discard
    // if it's not,
    // union that to existing set
    // setMap.get(c[0])
    // setMap.get(c[1])
    let aParent = find(aSet);
    let bParent = find(bSet);
    if (aParent !== bParent) {
      union(aParent, bParent);
      len += c[2];
    }
    // if it makes cycle, discard it.
  }
  return len;
};


// a => b => e => c
//   => d


let a = new Vertex('a');
let b = new Vertex('b');
let c = new Vertex('c');
let d = new Vertex('d');
let e = new Vertex('e');
let f = new Vertex('f');
let g = new Vertex('g');

let vertices = [a, b, c, d, e, f, g];
// [node1, node2, weight]
let edges = [[a, b, 2], [a, c, 3], [a, d, 3], [b, c, 4], [b, e, 3], [c, d, 5], [c, e, 1], [e, f, 8], [c, f, 6], [d, f, 7], [f, g, 9]];

console.log(MinimumSpanningTree(vertices, edges));
