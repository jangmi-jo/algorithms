const { Node, Edge } = require('../Data Structure/Graph.js');

// it allows the negative weight edge

// find the shortestPath for every vertex
// basic idea : the farthest would be the visit every node
// V - 1 iterations

// keep a distHash key as vertex, value as { last: vertex, dist: distance}
// set the s vertex to {last: null, dist: 0}
// for each vertices,
// if vertex is visited, distHash[vertex] !== undefined
// if we can update any vertex's distance, update that.
// we update when we find the shorter path
// if vertex is not visited, skip that

const shortestPath = (vertices, s, e) => {
  let distHash = new Map();
  distHash.set(s, {last: null, dist: 0});
  for (let i=0; i<vertices.length - 1; i++) {
    vertices.forEach((v) => {
      if (distHash.get(v) !== undefined) {
        let untilThisNodeDist = distHash.get(v).dist;
        v.outEdges.forEach((edge) => {
          let newDist = untilThisNodeDist + edge.weight;
          let oldDistObject = distHash.get(edge.toNode);
          if (oldDistObject === undefined || oldDistObject.dist > newDist) {
            distHash.set(edge.toNode, {last: v, dist: newDist});
          }
        });
      }
    });
  }

  return distHash.get(e).dist;
};

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let s = new Node('s');

// [node1, node2, weight]
let edges = [[a, c, 2], [b, a, 1], [c, b, -2], [d, c, -1], [d, a, -4], [e, d, 1], [s, e, 8], [s, a, 10]];

edges.forEach((edge) => {
  new Edge(edge[0], edge[1], edge[2]);
});

let vertices = [a, b, c, d, e, s];

console.log(shortestPath(vertices, s, d));
