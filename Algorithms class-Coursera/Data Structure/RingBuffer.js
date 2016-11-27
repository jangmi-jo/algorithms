class RingBuffer {
  constructor() {
    this.capacity = 8;
    this.store = new Array(this.capacity);
    this.length = 0;
    this.startIdx = 0;
  }

  get(i) {
    // O(1)
    this.inBoundValidation(i);
    i = (this.startIdx + i) % this.capacity;
    return this.store[i];
  }

  set(i, val) {
    this.inBoundValidation(i);
    i = (this.startIdx + i) % this.capacity;
    if (this.store[i] === undefined) {
      // set new element => addition
      this.ensureLengthAndResize();
      this.length++;
    }
    if (val === undefined) {
      // set element to undefined => deletion
      this.length--;
    }
    this.store[i] = val;
  }

  push(val) {
    // O(1) ammortized
    this.ensureLengthAndResize();
    this.set(this.length, val);
  }

  unshift(val) {
    // O(1)
    this.ensureLengthAndResize();
    this.startIdx = (this.startIdx - 1) % this.capacity;
    if (this.startIdx < 0) { this.startIdx = this.capacity + this.startIdx; }
    this.set(0, val);
  }

  shift() {
    // O(1)
    this.checkEmpty();
    let returnEl = this.get(0);
    this.set(0, undefined);
    this.startIdx = (this.startIdx + 1) % this.capacity;
    if (this.startIdx < 0) { this.startIdx = this.capacity + this.startIdx; }
    return returnEl;
  }

  pop() {
    // O(1)
    this.checkEmpty();
    let returnEl = this.get(this.length - 1);
    this.set(this.length - 1, undefined);
    return returnEl;
  }

  checkEmpty() {
    if (this.length === 0) {
      throw 'Store is empty.';
    }
  }

  ensureLengthAndResize() {
    // O(n) to resize the array
    if (this.length === this.capacity) {
      let newStore = new Array(this.capacity * 2);
      for (let i=0; i<this.capacity; i++) {
        newStore[i] = this.get(i);
      }
      this.capacity *= 2;
      this.store = newStore;
      this.startIdx = 0;
    }
  }

  inBoundValidation(i) {
    if (i < 0 || i >= this.capacity) {
      throw 'Index is not in Bound';
    }
  }
}

module.exports = RingBuffer;
