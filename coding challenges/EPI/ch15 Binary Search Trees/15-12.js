/*
the range lookup problem
given a BST and a interval
return the keys in that interval

look for starting and ending node
and if we find any key in the interval, recurse from that
because it's possible a node has required value and
both of its children has required value

*/

const root = require('./bst_example.js');

const rangeLookUp = (node, t, res = []) => {
  // time: O(logn + result)
  if (!node) { return []; }
  if (node.val >= t[0] && node.val <= t[1]) {
    res.push(node);
    rangeLookUp(node.left, t, res);
    rangeLookUp(node.right, t, res);
  } else if (node.val < t[0]) {
    rangeLookUp(node.right, t, res);
  } else if (node.val > t[1]) {
    rangeLookUp(node.left, t, res);
  }
  return res;
};

console.log(rangeLookUp(root, [16, 31]).map((n) => n.val));
