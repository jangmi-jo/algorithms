/*
implement a queue using stack

stack has push/pop/peak so use those to build Queue

1) using two stacks (in, out)
2) when enqueue, push value to in stack
3) when dequeue, pop value from out stack
4) if out stack is empty, pop and push everything from in to out

*/

class Queue {
  constructor() {
    this.in = [];
    this.out = [];
  }

  enqueue(val) {
    // time: O(1)
    this.in.push(val);
  }

  dequeue() {
    // time: amortized O(1)
    if (this.out.length === 0) {
      while (this.in.length) { this.out.push(this.in.pop()); }
    }
    return this.out.pop();
  }
}
