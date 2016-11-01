const { SinglyLinkedList } = require('./../Data Structure/SinglyLinkedList.js');

class Vertex {
  constructor(val) {
    this.val = val;
  }
}

class AdjacencyList {
  constructor() {
    this.indexMap = new Map();
    this.store = [];
    this.idx = 0;
  }

  relatedVertex(node) {
    return this.store[this.indexMap.get(node)];
  }

  removeEdge(nodes) {
    let [a, b] = nodes;
    let aIdx = this.indexMap.get(a);
    let bIdx = this.indexMap.get(b);
    if (aIdx === undefined || bIdx === undefined) {
      return;
    }
    this.store[aIdx].remove(b);
    this.store[bIdx].remove(a);
  }

  insertEdge(nodes, w = 1) {
    let [a, b] = nodes;
    let aIdx = this.indexMap.get(a);
    let bIdx = this.indexMap.get(b);
    if (aIdx === undefined) {
      this.indexMap.set(a, this.idx);
      aIdx = this.idx;
      this.idx++;
      this.store.push(new SinglyLinkedList());
    }
    let bLink = this.store[aIdx].pushBack(b);
    bLink.weight = w;

    if (bIdx === undefined) {
      this.indexMap.set(b, this.idx);
      bIdx = this.idx;
      this.idx++;
      this.store.push(new SinglyLinkedList());
    }
    let aLink = this.store[bIdx].pushBack(a);
    aLink.weight = w;
  }

  display() {
    let keys = Array.from(this.indexMap.keys());
    this.store.forEach((list, idx) => {
      console.log(`${keys[idx].val} : ${list.display().map((v) => v.val).join(' ')}`);
    });
  }
}

let a = new Vertex('a');
let b = new Vertex('b');
let c = new Vertex('c');
let d = new Vertex('d');
let list = new AdjacencyList();

list.insertEdge([a, b]);
list.insertEdge([b, c]);
list.insertEdge([a, d]);
list.display();


class AdjacencyMatrix {
  // space : O(V**2)
  // time: for all O(1)
  constructor(vertices) {
    this.indexMap = new Map();
    this.store = [];
    vertices.forEach((v, i) => {
      this.indexMap.set(v, i);
      let temp = [];
      for (let t=0; t<vertices.length; t++) { temp.push(0); }
      this.store.push(temp);
    });
  }

  isRelated(nodes) {
    let [a, b] = nodes;
    let aIdx = this.indexMap.get(a);
    let bIdx = this.indexMap.get(b);
    return this.store[aIdx][bIdx] !== 0;
  }

  removeEdge(nodes) {
    let [a, b] = nodes;
    let aIdx = this.indexMap.get(a);
    let bIdx = this.indexMap.get(b);
    this.store[aIdx][bIdx] = 0;
    this.store[bIdx][aIdx] = 0;
  }

  insertEdge(nodes, w = 1) {
    let [a, b] = nodes;
    let aIdx = this.indexMap.get(a);
    let bIdx = this.indexMap.get(b);
    this.store[aIdx][bIdx] = w;
    this.store[bIdx][aIdx] = w;
  }

  display() {
    let keys = Array.from(this.indexMap.keys()).map((k) => k.val);
    console.log(`   ${keys.join(' ')}`);
    this.store.forEach((arr, i) => {
      console.log(`${keys[i]} :${arr.join(' ')}`);
    });
  }
}
