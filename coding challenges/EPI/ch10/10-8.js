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
  // time, space: O(n) where n is the number of nodes
  // how can we do better...?
  let stack = [root];
  let visited = {};
  visited[root] = true;
  visited[undefined] = true;
  while (stack.length) {
    let c = stack[stack.length - 1];
    if (visited[c.right] && visited[c.left]) {
      let p = stack.pop();
      // process the node.. I just logged
      console.log(p.val);
    }
    if (c.right) {
      stack.push(c.right);
      visited[c.right] = true;
    }
    if (c.left) {
      stack.push(c.left);
      visited[c.left] = true;
    }
  }
};

preOrder(f);
