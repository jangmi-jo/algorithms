class Edge {
  constructor(label) {
    this.label = label;
  }
}

class Node {
  constructor(indegree) {
    this.indegree = indegree;
    this.edges = [];
  }
}

class Trie {
  constructor(patterns) {
    this.root = new Node(0);
  }
}
