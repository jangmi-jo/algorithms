// Route Between Nodes
// given two nodes
// directed graph
// check if there is route between two nodes

const { Node, Edge } = require('../../../Data Structure/Graph.js');

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);
let ten = new Node(10);

new Edge(one, three);
new Edge(one, five);
new Edge(three, four);
new Edge(four, one);
new Edge(two, four);
new Edge(five, eight);
new Edge(eight, nine);
new Edge(nine, ten);
new Edge(nine, seven);
new Edge(ten, four);

const routeBetweenNodes = (a, b) => {
  // time: O(E) where E is the connected edges to Node a
  // space: O(N) where N is the connected nodes to Node a
  let visited = new Map();
  visited.set(a, true);
  let queue = [a];
  while (queue.length) {
    let current = queue.shift();
    let outEdges = current.outEdges;
    for (let i=0; i<outEdges.length; i++) {
      if (visited.get(outEdges[i].toNode)) {
        return true;
      } else {
        queue.push(outEdges[i].toNode);
        visited.set(outEdges[i].toNode, true);
      }
    }
  }
  return false;
};

console.log(routeBetweenNodes(one, ten));
