const { Node, Edge } = require('../Data Structure/Graph.js');
// we provide s here but in topological sort,
// we pick whatever node that doesn't have in edges
// which means the node should be the start

// keep visited hash, key as the node, value as an object
// which has last node and the distance
// for back tracking
// start from s
// visit all out edges
// if the node is unvisited or
// the current distance + next cost is shorter than other path,
// update the value

// after all process, get the e node from the distance hash
// and backtrack with the last node in value

const shortestPath = (s, e) => {
  let distHash = new Map();
  distHash.set(s, {last: null, dist: 0});
  let queue = [s];
  while (queue.length) {
    let nextQueue = [];
    queue.forEach((node) => {
      node.outEdges.forEach((edge) => {
        let untilThisNode = distHash.get(node).dist;
        let newDist = untilThisNode + edge.weight;
        let oldDistValue = distHash.get(edge.toNode);
        if (oldDistValue === undefined || newDist < oldDistValue.dist) {
          distHash.set(edge.toNode, {last: node, dist: newDist});
          nextQueue.push(edge.toNode);
        }
      });
      queue = nextQueue;
    });
  }
  if (distHash.get(e) === undefined) { return 'No path'; }
  let track = [e.value];
  let c = distHash.get(e);
  while (c) {
    if (c.last) {
      track.push(c.last.value);
    }
    c = distHash.get(c.last);
  }
  track.reverse();
  return track;
};


let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
let g = new Node('g');
let h = new Node('h');
let i = new Node('i');

// [node1, node2, weight]
let edges = [[a, b, 1], [b, d, 1], [a, c, 3], [c, a, 3], [a, e, 8], [b, e, 7], [c, f, 1], [f, h, 1], [h, g, 2], [f, g, 4], [e, g, 2], [g, d, 4]];

edges.forEach((edge) => {
  new Edge(edge[0], edge[1], edge[2]);
});

console.log(shortestPath(a, i));
