/*
implement a queue with max API

1) keep maxStore
2) when enqueue, if we have smaller values than the new value in maxStore, pop those values
3) so we only keep bigger values than the new value (which is newest so last out in each time)
4) when dequeue, if the dequeueing value is same as max, shift maxStore

*/

class Queue {
  constructor() {
    this.store = [];
    this.maxStore = [];
  }

  enqueue(val) {
    let last = this.maxStore.length-1;
    while (last !== -1 && this.maxStore[last] < val) {
      this.maxStore.pop();
      last--;
    }
    this.maxStore.push(val);
    this.store.push(val);
  }

  dequeue() {
    let val = this.store.shift();
    if (val === this.maxStore[0]) {
      this.maxStore.shift();
    }
    return val;
  }

  max() {
    return this.maxStore[0];
  }
}

let n = new Queue();
n.enqueue(7);
n.enqueue(5);
n.enqueue(8);
n.enqueue(1);
n.enqueue(6);
n.dequeue();
n.dequeue();
n.dequeue();

console.log(n.max());
