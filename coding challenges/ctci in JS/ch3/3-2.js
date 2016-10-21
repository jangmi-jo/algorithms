// Minimum Stack
// in addition to push and pop,
// min function should be in O(1) operation time

class MinimumStack {
  constructor() {
    this.store = [];
    this.length = 0;
  }

  push(val) {
    // time: O(1)
    // space: O(1)
    let newMin;
    if (this.length === 0) {
      newMin = val;
    } else {
      let lastMin = this.store[this.length - 1].min;
      newMin = lastMin < val ? lastMin : val;
    }
    this.store.push({value: val, min: newMin});
    this.length++;
    return val;
  }

  pop() {
    // O(1)
    this.length--;
    return this.store.pop();
  }

  min() {
    // O(1)
    return this.store[this.length - 1].min;
  }
}

let minStack = new MinimumStack();
minStack.push(3);
minStack.push(6);
minStack.push(2);
minStack.push(4);
minStack.push(1);
minStack.push(9);
console.log(minStack.store);

console.log(minStack.pop());

console.log(minStack.store);
