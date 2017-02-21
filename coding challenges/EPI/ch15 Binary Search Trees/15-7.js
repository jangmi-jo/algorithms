/*
enumerate numbers of the form a + b sqrt(2)
given k, find k smallest numbers formatted a + b sqrt(2)
non-negative

how about using minHeap (by value)
start with the a = 0 , b = 0
heap value would be an object has an array of a, b and the value
in loop, extract one
add it to res, generate two next numbers and insert them in heap
0, 0
1, 0 => 2, 0 / 1, 1
0, 1 => 1, 1 / 0, 2
we could try with minHeap ensure no duplication
but since this is BST section,
same thing can happen in BST so we will build BST

*/

const BinarySearchTree = require('./non_dup_bst.js');

const enumerateNum = (k) => {
  // time: O(k*logk), space: O(k)
  const res = [];
  const rootTwo = Math.sqrt(2);
  const bst = new BinarySearchTree((key) => key.a + key.b * rootTwo);
  bst.insert({a: 0, b: 0});
  while (res.length < k) {
    let { a, b } = bst.min().key;
    res.push(`${a}+${b} R2`);
    bst.deleteMin();
    bst.insert({a: a+1, b: b});
    bst.insert({a: a, b: b+1});
  }
  return res;
};

console.log(enumerateNum(10));
