
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

module.exports = { Node, Edge };
