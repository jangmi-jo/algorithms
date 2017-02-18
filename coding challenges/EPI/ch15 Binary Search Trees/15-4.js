/*
compute LCA in a BST

we want to find the node that lies in between the two nodes
if both node's value are bigger then current,
move to right and check
if both are smaller, move to left
when smaller node is smaller than the current
and bigger node is bigger than the current
we found the LCA
*/


const {root, c, h} = require('./bst_example.js');

const computeLCA = (node, a, b) => {
  // time: O(logn) where n is the number of nodes
  // change a and b if a is bigger (not in order)
  if (a.val > b.val) { [a, b] = [b, a]; }
  if (node.val >= a.val && node.val <= b.val) {
    return node;
  } else if (a.val < node.val && b.val < node.val) {
    return computeLCA(node.left, a, b);
  } else {
    return computeLCA(node.right, a, b);
  }
};

console.log(computeLCA(root, c, h));
