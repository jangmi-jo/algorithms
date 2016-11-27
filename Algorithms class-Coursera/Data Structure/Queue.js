const DoublyLinkedList = require('./DoublyLinkedList.js');

class QueueWithArray {
  constructor() {
    this.store = [];
  }

  enqueue(key) {
    this.store.push(key);
    return key;
  }

  dequeue() {
    let dequeuedVal = this.store[0];
    this.store.splice(0, 1);
    return dequeuedVal;
  }

  empty() {
    return this.store.length === 0;
  }
}

class QueueWithLinkedList {
  constructor() {
    this.store = new DoublyLinkedList();
  }

  display() {
    this.store.display();
  }

  enqueue(key) {
    return this.store.pushBack(key);
  }

  dequeue() {
    return this.store.popFront();
  }

  empty() {
    return this.store.empty();
  }
}
