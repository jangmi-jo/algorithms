/*
test if a binary tree satisfies the BST property
given a root of tree

use recursion
check recursively if left and right child is proper
if it's not, return false
if it is, keep checking

*/

const root = require('./bst_example.js');

const isProper = (node) => {
  // time: O(n) where n is the number of nodes in tree
  if (!node) { return true; }
  if ((node.left && node.left.val > node.val) ||
       (node.right && node.right.val < node.val)) {
    return false;
  }
  return isProper(node.left) && isProper(node.right);
};

console.log(isProper(root));
