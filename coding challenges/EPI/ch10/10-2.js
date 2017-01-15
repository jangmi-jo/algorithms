/*
given binary tree, check if it's symmetric

1) keep left, right queue
2) start with left and right node
3) while one of them has el, keep processing
4) get the first el, compare, if they are not same, return false
5) add next one properly (for right queue, it needs to be added opposite way)

we could use recursion
it needs helper
1) get the root, call helper with left, right
2) in helper, compare left and right
3) if they both exist and have same value,
4) call the helper with left/right , right/left symmetrically

*/

let symmetricRoot = require('./symmetric_tree.js');
let nonSymmetricRoot = require('./balanced_tree.js');

const isSymmetric = (node) => {
  // time, space: O(n) where n is the number of nodes
  if (!node) { return true; }
  let leftQueue = [node.left];
  let rightQueue = [node.right];
  while (leftQueue.length || rightQueue.length) {
    let left = leftQueue.shift();
    let right = rightQueue.shift();
    if (left && right) {
      if (left.val !== right.val) {
        return false;
      }
      leftQueue.push(left.left);
      leftQueue.push(left.right);
      rightQueue.push(right.right);
      rightQueue.push(right.left);
    } else if (left !== right) {
      return false;
    }
  }
  return true;
};

const symmetricRec = (node) => {
  // this takes less space, less time
  // because if one of them is undefined,
  // it doesn't process there anymore (nor store undefined in stack)
  // with queue, it stores and process undefined nodes
  // time: O(n), space: O(logn) with callstack
  if (!node) { return true; }
  return isSymmetricRec(node.left, node.right);
};

const isSymmetricRec = (left, right) => {
  if (left && right) {
    if (left.val !== right.val) { return false; }
    return isSymmetricRec(left.left, right.right) && isSymmetricRec(left.right, right.left);
  } else if (left !== right) {
    return false;
  }
  return true;
};

console.log(symmetricRec(nonSymmetricRoot));
