
class DynamicArray {
  constructor() {
    this.capacity = 8;
    this.store = new Array(this.capacity);
    this.length = 0;
  }

  get(i) {
    // O(1)
    this.inBoundValidation(i);
    return this.store[i];
  }

  set(i, val) {
    this.inBoundValidation(i);
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
    // O(n) to move all the elements to right
    this.ensureLengthAndResize();
    for (let i=this.length; i>0; i--) {
      this.set(i, this.get(i-1));
    }
    this.set(0, val);
  }

  shift() {
    // O(n) to move all the elements to left
    this.checkEmpty();
    let returnEl = this.get(0);
    for (let i=1; i<=this.length; i++) {
      this.set(i-1, this.get(i));
    }
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
    }
  }

  inBoundValidation(i) {
    if (i < 0 || i >= this.capacity) {
      throw 'Index is not in Bound';
    }
  }
}

module.exports = DynamicArray;
