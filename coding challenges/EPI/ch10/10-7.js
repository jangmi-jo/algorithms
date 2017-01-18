/*
given a binary tree, inorder traversal
without recursion

implemented very weird way
need to work on again

*/

const f = require('./tree-traversal-sample.js');

const inOrder = (root) => {
    let stack = [root];
    let visited = new Set();
    visited.add(root);
    visited.add(undefined);
    while (stack.length) {
      let c = stack.pop();
      if ((visited.has(c.right) && visited.has(c.left)) || visited.has(c.left)) {
        visited.add(c);
        console.log(c.val);
        if (c.left === undefined && c.right) {
          stack.push(c.right);
        }
      } else {
        [c.right, c, c.left].forEach((el) => {
          if (el) { stack.push(el); }
        });
      }
    }
};

inOrder(f);
