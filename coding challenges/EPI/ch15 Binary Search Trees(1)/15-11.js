/*
test if three BST nodes are totally ordered

given two nodes, and one middle node,
return boolean if the two nodes are properly ancestor/decendent or the middle

start from smaller one from two nodes
find the middle node's place
from there, find the next last one's place

*/

const {root, k, i, m, p, j} = require('./bst_example.js');

const findDecendent = (a, b) => {
  let node = a;
  while (node) {
    if (node.val === b.val) {
      return true;
    } else if (node.val < b.val) {
      node = node.right;
    } else {
      node = node.left;
    }
  }
  return false;
};

const isOrdered = (a, b, mid) => {
  // time: O(logn)
  if (a.val === mid.val || b.val === mid.val) {
    return false;
  }
  return (findDecendent(a, mid) && findDecendent(mid, b)) ||
    (findDecendent(b, mid) && findDecendent(mid, a));
};

console.log(isOrdered(root, k, j));
console.log(isOrdered(i, m, j));
console.log(isOrdered(i, p, j));
console.log(isOrdered(j, k, j));
