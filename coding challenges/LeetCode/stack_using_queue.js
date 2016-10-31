
// we could make push more expensive and get pop and top cheaper

class Stack {
  constructor() {
    // only using push, shift, store[0], length, length === 0
    this.store = [];
  }

  push(n) {
    this.store.push(n);
  }

  pop() {
    // time: O(n)
    for (let i=0; i<this.store.length - 1; i++) {
      this.store.push(this.store.shift());
    }
    return this.store.shift();
  }

  top() {
    // O(n)
    let t = this.store[0];
    for (let i=0; i<this.store.length; i++) {
      t = this.store[0];
      this.store.push(this.store.shift());
    }
    return t;
  }

  empty() {
    return this.store.length === 0;
  }
}

let a = new Stack();
a.push(1);
a.push(2);
console.log(a.top());
console.log(a);
