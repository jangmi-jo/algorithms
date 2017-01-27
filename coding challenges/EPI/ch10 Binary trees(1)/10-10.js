/*
compute successor
node has parent pointer

1) has right node
get right node's left-most node
2) doesn't have right node
go up until the node is not the right node
3) return the node

*/


const f = require('./tree-traversal-sample.js');

const findSuccessor = (node) => {
  // time: O(logn), space: O(1)
  if (!node) { return false; }
  if (node.right) {
    node = node.right;
    while (node.left) {
      node = node.left;
    }
  } else {
    while (node.parent && node.parent.right === node) {
      node = node.parent;
    }
  }
  return node;
};


console.log(findSuccessor(f));
