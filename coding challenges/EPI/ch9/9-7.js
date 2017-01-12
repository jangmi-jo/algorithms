/*
compute binary tree nodes in order of increasing depth

*/

const head = require('./binary_tree_ex.js');

const computeBinTree = (node) => {
  // time, space: O(n) where n is the number of nodes in tree
  if (!node) { return []; }
  let res = [];
  let queue = [node];
  while (queue.length) {
    let nextQ = [];
    let temp = [];
    queue.forEach((n) => {
      if (n) {
        temp.push(n.val);
        if (n.left) { nextQ.push(n.left); }
        if (n.right) { nextQ.push(n.right); }
      }
    });
    res.push(temp);
    queue = nextQ;
  }
  return res;
};

console.log(computeBinTree(head));
