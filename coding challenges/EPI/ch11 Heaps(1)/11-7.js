/*
implement stack using heap

when insert a value, add an integer index
use max heap
*/

const Heap = require('./11-1.js');

class Stack {
  constructor() {
    this.store = new Heap([], (a, b) => b.idx - a.idx);
    this.idx = 0;
  }

  get length() {
    return this.store.store.length;
  }

  push(val) {
    this.store.insert({val: val, idx: this.idx++});
  }

  pop() {
    return this.store.extract().val;
  }

  peak() {
    return this.store[0].val;
  }
}
