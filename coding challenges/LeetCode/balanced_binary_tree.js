const getHeight = (node) => {
  if (!node) { return 0; }
  return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
};

const isBalanced = (root) => {
  if (!root) { return true; }
  let diff = getHeight(root.left) - getHeight(root.right);
  if (Math.abs(diff) <= 1) {
    return isBalanced(root.left) && isBalanced(root.right);
  }
  return false;
};
