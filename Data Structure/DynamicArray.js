
class DynamicArray {
  constructor() {
    this.capacity = 8;
    this.store = new Array(this.capacity);
    this.length = 0;
  }

  get(i) {
    return this.store[i];
  }

  set(i, val) {
    if (i < this.capacity && i >= 0) {
      this.store[i] = val;
    }
  }


}

module.exports = DynamicArray;
