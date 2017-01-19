/*
given a binary tree, inorder traversal
without recursion

1) keep a stack and current node
2) if current node is there, push that to stack and move to left
3) if not, take one from stack and process it and move to that's right
basically mimic the recursion
*/

const f = require('./tree-traversal-sample.js');

const inOrder = (root) => {
  // time: O(n), space: O(logn)
  let stack = [];
  let c = root;
  while (stack.length || c) {
    if (c) {
      stack.push(c);
      c = c.left;
    } else {
      c = stack.pop();
      console.log(c.val);
      c = c.right;
    }
  }

  // let stack = [root];
  // let visited = new Set();
  // visited.add(root);
  // visited.add(undefined);
  // while (stack.length) {
  //   let c = stack.pop();
  //   if ((visited.has(c.right) && visited.has(c.left)) || visited.has(c.left)) {
  //     visited.add(c);
  //     console.log(c.val);
  //     if (c.left === undefined && c.right) {
  //       stack.push(c.right);
  //     }
  //   } else {
  //     [c.right, c, c.left].forEach((el) => {
  //       if (el) { stack.push(el); }
  //     });
  //   }
  // }
};

inOrder(f);
