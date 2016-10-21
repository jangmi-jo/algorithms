
class Node {
  constructor(value) {
    this.value = value;
    this.inEdges = [];
    this.outEdges = [];
  }
}

class Edge {
  // directed edges.
  constructor(fromNode, toNode, weight = 1) {
    this.fromNode = fromNode;
    this.toNode = toNode;
    this.weight = weight;
    this.fromNode.outEdges.push(this);
    this.toNode.inEdges.push(this);
  }

  destroy() {
    this.fromNode.outEdges.splice(this.fromNode.outEdges.indexOf(this), 1);
    this.toNode.inEdges.splice(this.toNode.inEdges.indexOf(this), 1);
    this.fromNode = undefined;
    this.toNode = undefined;
  }
}
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);

new Edge(one, two);
new Edge(three, two);
new Edge(two, four);
new Edge(two, five);
new Edge(five, one);

console.log(one);
