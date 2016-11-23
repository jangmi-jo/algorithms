// insert, delete, getRandom => O(1)

// store a map key: val, val: index
// store another map key: index, val: val

class Data {
  constructor() {
    this.valToIdx = new Map();
    this.idxToVal = new Map();
  }

  insert(val) {
    // if it's not there, add it
    if (this.valToIdx.get(val) === undefined) {
      this.valToIdx.set(val, this.valToIdx.size);
      this.idxToVal.set(this.idxToVal.size, val);
    }
  }

  remove(val) {
    // if it's there, remove it
    if (this.valToIdx.get(val) !== undefined) {
      let removeIdx = this.valToIdx.get(val);
      let lastIdx = this.idxToVal.size - 1;
      let lastEl = this.idxToVal.get(lastIdx);
      this.valToIdx.delete(val);
      this.idxToVal.delete(lastIdx);
      this.valToIdx.set(lastEl, removeIdx);
      this.idxToVal.set(removeIdx, lastEl);
      return true;
    }
    return false;
  }

  getRandom() {
    // return random val from store
    let randomIdx = Math.floor(Math.random() * this.valToIdx.size);
    return this.idxToVal.get(randomIdx);
  }
}
