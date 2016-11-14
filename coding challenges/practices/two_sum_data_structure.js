// add, find
// we can ask which operation should be more efficient

// this version works
// add O(1), find O(n) where n is the number of keys
// we can make add O(n), find O(1)
// by making all the sum when add a number and save it
// in set

// in solution, it considered about the case that
// duplicate keys (which I didn't consider in here)

class TwoSum {
  constructor() {
    this.keys = new Set();
    this.arr = [];
  }

  add(n) {
    // add the n to the keys if it doesn't have
    // also keep an arr of keys to iterate the keys by order
    if (!this.keys.has(n)) {
      this.keys.add(n);
      this.arr.push(n);
    }
  }

  find(t) {
    // go through all the keys and find the target - key in set
    for (let i=0; i<this.arr.length; i++) {
      if (this.keys.has(t - this.arr[i])) {
        return true;
      }
    }
    return false;
  }
}
