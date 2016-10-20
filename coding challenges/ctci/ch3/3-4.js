// Queue via stacks
// implement a MyQueue class using two stacks
// push / pop

class MyQueue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(val) {
    // O(1)
    this.inStack.push(val);
  }

  dequeue() {
    // time : amortized O(1)
    if (this.outStack.length === 0) {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }
}

let queue = new MyQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue());
queue.enqueue(6);
queue.enqueue(7);

console.log(queue.inStack);
console.log(queue.outStack);
