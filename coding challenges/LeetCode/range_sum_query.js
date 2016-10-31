class NumArray {
  // since the array will not change, we can store
  // the sum until the index for each elements
  constructor(nums) {
    this.store = nums;
    this.map = new Map();
    this.map.set(-1, 0);
    this.map.set(0, this.store[0]);
    for (let i=1; i<this.store.length; i++) {
      this.map.set(i, this.map.get(i-1) + this.store[i]);
    }
  }

  sumRange(i, j) {
    return this.map.get(j) - this.map.get(i-1);
  }
}
