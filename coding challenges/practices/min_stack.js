// Stack is a data structure that has a rule FILO
// [{val: 2, min: 2}, {val: 5, min: }]
// [2, 5, 1, 6]
class MinStack {
  constructor() {
    this.store = [];
  }

  push(x) {
    // time: O(1)
    let newEl = {val: x};
    if (this.store.length === 0) {
      newEl.min = x;
    } else {
      newEl.min = Math.min(this.top().min, x);
    }
    this.store.push(newEl);
  }

  pop() {
    // O(1)
    return this.store.pop().val;
  }

  top() {
    // O(1)
    return this.store[this.store.length - 1].val;
  }

  getMin() {
    // O(1)
    return this.top().min;
  }
}
