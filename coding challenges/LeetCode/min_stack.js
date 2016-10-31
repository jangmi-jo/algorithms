class MinStack {
  constructor() {
    this.store = [];
  }

  push(n) {
    let newMin = [n];
    let prev = this.store[this.store.length - 1];
    if (prev) {
      newMin.push(prev.min);
    }
    newMin = Math.min(...newMin);
    this.store.push({val: n, min: newMin});
  }

  pop() {
    return this.store.pop().val;
  }

  top() {
    return this.store[this.store.length - 1].val;
  }

  getMin() {
    return this.store[this.store.length - 1].min;
  }
}
