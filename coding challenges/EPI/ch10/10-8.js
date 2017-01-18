/*
given a binary tree,
implement preorder traversal without recursion
which means dfs

1) keep a stack, visited hash
2) to make the undefined node checking cleaner, set undefined to true
3) start with the root,
4) see the last el in stack, if it doesn't have children or both children are visited, pop it and process the node
5) if not, push children in stack

*/

const f = require('./tree-traversal-sample.js');

const preOrder = (root) => {
  // time: O(n) where n is the number of nodes
  // space: O(1)
  let stack = [root];
  while (stack.length) {
    let c = stack.pop();
    console.log(c.val);
    if (c.right) {
      stack.push(c.right);
    }
    if (c.left) {
      stack.push(c.left);
    }
  }
};

preOrder(f);
