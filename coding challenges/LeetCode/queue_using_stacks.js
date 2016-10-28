class Queue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  push(val) {
    // enqueue
    // O(1)
    this.inStack.push(val);
  }

  pop() {
    // dequeue
    // time: ammortized O(1)
    if (this.outStack.length === 0) {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }

  peek() {
    // time: ammortized O(1)
    if (this.outStack.length === 0) {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack[this.outStack.length - 1];
  }

  empty() {
    // O(1)
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}
