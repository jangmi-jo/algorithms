
class Node {
  constructor(i) {
    this.i = i;
    this.edges = new Map();
    // key as label, value as next Node
  }
}

class Trie {
  constructor(patterns) {
    this.root = new Node(0);
    this.indegree = 0;
    patterns.forEach((p) => {
      let currentNode = this.root;
      for (let i=0; i<p.length; i++) {
        if (currentNode.edges.get(p[i]) === undefined) {
          this.indegree++;
          currentNode.edges.set(p[i], new Node(this.indegree));
        }
        currentNode = currentNode.edges.get(p[i]);
      }
    });
  }

  display() {
    // BSF display
    let queue = [this.root];
    while (queue.length) {
      let nextQueue = [];
      console.log(queue.map((n) => {
        console.log(n.i);
        return Array.from(n.edges.keys());
      }));
      queue.forEach((n) => {
        nextQueue = nextQueue.concat(Array.from(n.edges.values()));
      });
      queue = nextQueue;
    }
  }
}

let t = new Trie(["ATAGA", "ATC", "GAT"]);
t.output();
// t.display();
