/*
given binary tree, test if the height is balanced

1) need getHeight helper method
2) using recursion, start from the root node
3) get left height, right height
4) check the abs(diff) is smaller or equal to 1
5) also check if left and right tree are balanced

*/

let unbalancedRoot = require('./../ch9/binary_tree_ex.js');
let balancedRoot = require('./balanced_tree.js');


const getHeight  = (node) => {
  if (!node) { return 0; }
  return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
};

const isHeightBalanced = (node) => {
  // time: O(n) where n is the number of nodes
  // space: O(logn) because of the call stack
  if (!node) { return true; }
  let leftHeight = getHeight(node.left);
  let rightHeight = getHeight(node.right);
  let diff = Math.abs(leftHeight - rightHeight);
  if (diff <= 1 && isHeightBalanced(node.left) && isHeightBalanced(node.right)) {
    return true;
  }
  return false;
};

console.log(isHeightBalanced(unbalancedRoot));
