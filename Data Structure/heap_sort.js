const BinaryHeap = require('./BinaryHeap.js');

Array.prototype.heapSort = function(comparator = (a, b) => a - b) {
  // set the comparator to the opposite for optimizing
  let opposite = (a, b) => comparator(b, a);

  // build heap opposite order
  for (let i=this.length - 1; i>=0; i--) {
    BinaryHeap.heapifyUp(i, this, opposite);
  }

  for (let i=this.length - 1; i>=0; i--) {
    // swap the last element with the first element
    let temp = this[0];
    this[0] = this[i];
    this[i] = temp;
    // heapify down with new first element exclude the sorted elements
    BinaryHeap.heapifyDown(0, this, opposite, i - 1);
  }

};

let test = [6, 2, 1, 5, 3, 4, 7];
test.heapSort();
console.log(test);
