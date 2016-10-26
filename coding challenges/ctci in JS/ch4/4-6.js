// successor
// white boarding (without testing)

const successor = (node) => {
  // time: O(h) where h is the height of tree
  // space: O(1)
  if (node.right) {
    // return the left most node in the right tree
    node = node.right;
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  } else {
    let current = node.val;
    // go up to parent while the parent is smaller than node
    while (node.val <= current) {
      node = node.parent;
    }
    return node;
  }
};
