/*
max stack implementation
push/pop/peak/max => O(1)

when add new value, get the new max at the moment
and store it with the value

*/

class MaxStack {
  constructor() {
    this.store = [];
  }
  push(val) {
    let newVal = {
      val: val
    };
    if (this.max() === undefined) {
      newVal.max = val;
    } else {
      newVal.max = Math.max(this.max(), val);
    }
    this.store.push(newVal);
    return val;
  }
  pop() {
    if (this.store.length === 0) { return; }
    return this.store.pop().val;
  }
  peak() {
    if (this.store.length === 0) { return; }
    return this.store[this.store.length - 1].val;
  }
  max() {
    if (this.store.length === 0) { return; }
    return this.store[this.store.length - 1].max;
  }
}
