const { Vertex, AdjacencyList, AdjacencyMatrix } = require('./Graph.js');

// build test case
// input : AdjacencyList / AdjacencyMatrix
// output : minimum spanning tree's length

// pick any vertex
// keep a visited hash to store explored vertex
// keep a candidates for the next possible edges
// find the shortest dist and visit that vertex
// add the vertex's unvisited edges to candidates
// sort the candidates with weight
// pick the next vertex
// keep doing that until candidates are all gone
// if there's a unvisited vertex after all, return false
// there's no possible minimum spanning tree

// store weight, keep the edges as candidates

const MinimumSpanningTreeWithList = (vertices, edges) => {
  let len = 0;
  let list = new AdjacencyList();
  edges.forEach((edge) => {
    list.insertEdge([edge[0], edge[1]], edge[2]);
  });
  let visited = new Map();
  let candidates = [];
  visited.set(vertices[0], true);
  list.relatedVertex(vertices[0]).forEach((link) => {
    if (link.value !== undefined) {
      candidates.push(link);
    }
  });
  while (candidates.length) {
    candidates.sort((a, b) => b.weight - a.weight);
    let nextLink = candidates.pop();
    while (visited.get(nextLink.value)) {
      nextLink = candidates.pop();
    }
    len += nextLink.weight;
    visited.set(nextLink.value, true);
    list.relatedVertex(nextLink.value).forEach((link) => {
      if (link.value !== undefined && visited.get(link.value) === undefined) {
        candidates.push(link);
      }
    });
  }
  return visited.size === vertices.length ? len : false;
};

const MinimumSpanningTreeWithMatrix = (vertices, edges) => {

};

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

console.log(MinimumSpanningTreeWithMatrix(vertices, edges));
