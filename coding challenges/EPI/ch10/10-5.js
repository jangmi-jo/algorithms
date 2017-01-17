/* global Set */
/*
sum the root to leaf paths in a binary tree

1) depth first traverse the tree carrying the prev path binary string
2) whenever the node doesn't have any child, return the prev + the leaf converted to decimal
3) when node doesn't exist, return 0
4) when node has child, get the decimal values from left, right child. add them and return

*/

let a = require('./binary_tree.js');

class Solution {
  constructor(root) {
    this.root = root;
  }

  dfs() {
    // only traverse all nodes once
    // time: O(n), space: O(logn)
    return this.explore(this.root, "");
  }

  explore(node, prev) {
    if (!node) { return 0; }
    if (node.left || node.right) {
      let left = this.explore(node.left, prev + node.val);
      let right = this.explore(node.right, prev + node.val);
      return left + right;
    } else {
      return parseInt(prev + node.val, 2);
    }
  }
}

let s = new Solution(a);
console.log(s.dfs());
