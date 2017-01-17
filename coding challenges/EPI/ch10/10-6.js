/*
find a root to leaf path  with specified sum

use SAME dfs trick as last one
same time, space complexity
*/

let a = require('./../ch9/binary_tree_ex.js');

class Solution {
  constructor(root, i) {
    this.root = root;
    this.i = i;
  }

  dfs() {
    return this.explore(this.root, 0);
  }

  explore(node, prev) {
    if (!node) { return false; }
    if (node.left || node.right) {
      return this.explore(node.left, prev + node.val) || this.explore(node.right, prev + node.val);
    } else {
      return this.i === prev + node.val;
    }
  }
}

let n = new Solution(a, 619);
console.log(n.dfs());
