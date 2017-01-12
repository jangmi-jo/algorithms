/*
implement a circular queue

careful with the index off by 1
when enqueue, put the value in front of the start index
if the store is full, resize
when dequeue, get the last value in store
(get the last index adding start index and the length)
when resize, move all values from the start to the last value in order to new store
*/

class CircularQueue {
  constructor(capacity = 4) {
    this.store = new Array(capacity);
    this.start = 0;
    this.length = 0;
    this.capacity = capacity;
  }

  enqueue(val) {
    if (this.length === this.capacity) {
      this.resize();
    }
    let idx = this.start - 1;
    if (idx === -1) { idx = this.capacity - 1; }
    this.store[idx] = val;
    this.start = idx;
    this.length++;
  }

  dequeue() {
    if (this.length === 0) { return; }
    let idx = (this.start + this.length - 1) % this.capacity;
    let val = this.store[idx];
    this.store[idx] = undefined;
    this.length--;
    return val;
  }

  resize() {
    let newStore = new Array(this.capacity * 2);
    for (let i=0; i<this.length; i++) {
      let idx = (this.start + this.length - 1 - i) % this.capacity;
      newStore[newStore.length - 1 - i] = this.store[idx];
    }
    this.capacity *= 2;
    this.start = this.capacity - this.length;
    this.store = newStore;
  }
}

let q = new CircularQueue();
q.enqueue(1);
q.enqueue(2);
q.dequeue();
q.dequeue();

q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.enqueue(7);

console.log(q);
