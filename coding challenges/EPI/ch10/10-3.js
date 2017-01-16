/*
compute the lowest common ancestor in binary tree
given the tree, node1, node2

1) think the values from the bottom of the tree
2) at the bottom, if the node is not one of a, b, we don't consider
3) if the node is one of a, b, we return 1
4) if the returned value from the last call(left/right) is a node instead of 0 or 1, return that node since that's the answer
5) if the sum of those values is 2, we found the node so return that one

*/
let { r, m, p } = require('./../ch9/binary_tree_ex.js');

const lowestCommonAncestor = (root, a, b) => {
  // time: O(n) where n is the number of nodes
  // space: O(logn) same as height of the tree
  if (!root) {
    return 0;
  } else if (root === a || root === b) {
    return 1;
  } else {
    let left = lowestCommonAncestor(root.left, a, b);
    let right = lowestCommonAncestor(root.right, a, b);
    if (![0, 1].includes(left)) {
      return left;
    } else if (![0, 1].includes(right)) {
      return right;
    } else if (left + right === 2) {
      return root;
    } else {
      return left + right;
    }
  }
};

console.log(lowestCommonAncestor(r, m, p));
