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
    // returning the SinglyLinkedList
    return this.store[this.indexMap.get(node)];
  }

  removeEdge(nodes) {
    // O(n)
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
    // time: O(1)
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

class AdjacencyMatrix {
  // space : O(V**2)
  // time: for all O(1)
  constructor() {
    this.indexMap = new Map();
    this.store = [];
    this.idx = 0;
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
    if (aIdx === undefined || bIdx === undefined) {
      return;
    }
    this.store[aIdx][bIdx] = 0;
    this.store[bIdx][aIdx] = 0;
  }

  insertEdge(nodes, w = 1) {
    let [a, b] = nodes;
    let aIdx = this.indexMap.get(a);
    let bIdx = this.indexMap.get(b);
    if (aIdx === undefined) {
      this.indexMap.set(a, this.idx);
      let newArr = [];
      for (let i=0; i<=this.idx; i++) {
        if (this.store[i] && this.store[i].length <= this.idx) {
          this.store[i].push(0);
        }
        newArr.push(0);
      }
      aIdx = this.idx;
      this.store.push(newArr);
      this.idx++;
    }

    if (bIdx === undefined) {
      this.indexMap.set(b, this.idx);
      let newArr = [];
      for (let i=0; i<=this.idx; i++) {
        if (this.store[i] && this.store[i].length <= this.idx) {
          this.store[i].push(0);
        }
        newArr.push(0);
      }
      bIdx = this.idx;
      this.store.push(newArr);
      this.idx++;
    }

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

module.exports = { Vertex, AdjacencyList, AdjacencyMatrix };
