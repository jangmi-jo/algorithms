const DoublyLinkedList = require('./DoublyLinkedList.js');

class StackWithArray {
  constructor() {
    this.store = [];
    this.lastIndex = -1;
  }

  push(key) {
    this.lastIndex += 1;
    this.store.push(key);
  }

  top() {
    return this.store[this.lastIndex];
  }

  pop() {
    let popedVal = this.store[this.lastIndex];
    this.store.splice(this.lastIndex, 1);
    this.lastIndex -= 1;
    return popedVal;
  }

  empty() {
    return this.lastIndex === -1;
  }
}

class StackWithLinkedList {
  constructor() {
    this.store = new DoublyLinkedList();
  }

  display() {
    this.store.display();
  }

  push(key) {
    return this.store.pushBack(key);
  }

  pop() {
    return this.store.popBack();
  }

  top() {
    return this.store.topBack();
  }

  empty() {
    return this.store.empty();
  }
}
