/*
compute the running median

keep a store
whenever insert a value, push it to store
sort the store
(store's length will never be more than 4 so this will take O(1))
depends on the length, do the action specified
when 1, return the 0th value
when 2, return the average of two values
when 3, return the 1st value
when 4, get rid of the first and the last value
        and return the average of two left values
*/

class Median {
  constructor() {
    this.store = [];
  }

  insert(n) {
    // time: O(n) where n is the total length of the input
    // since sorting will take O(1)
    // space: O(1) we don't store more than 4 in store
    this.store.push(n);
    this.store.sort((a, b) => a - b);
    switch (this.store.length) {
      case 1:
        return this.store[0];
      case 2:
        return (this.store[0] + this.store[1]) / 2;
      case 3:
        return this.store[1];
      case 4:
        this.store = this.store.slice(1, 3);
        return (this.store[0] + this.store[1]) / 2;
      default:
        return false;
    }
  }
}

const e = [1, 0, 3, 5, 2, 0, 1];
const s = new Median();
e.forEach((n) => {
  console.log(s.insert(n));
});
// [1, 0.5, 1, 2, 2, 1.5, 1]
