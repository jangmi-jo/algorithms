/*
find the first key greater than a given value in a BST
given a root of a bst and a value
return the first key that is greater than the value

we can do something like binary search
compare the node's val with the target
if target is smaller, go to left
if target is bigger or equal, go to right
*/

const root = require('./bst_example.js');

const firstGreater = (node, t) => {
  // time: O(logn) where n is the number of nodes
  if (!node) { return ; }
  const nextNode = node.val > t ? node.left : node.right;
  return firstGreater(nextNode, t) || node;
};

console.log(firstGreater(root, 23));
