// get the children's max Depth and add 1 for current node's depth
// if the node doesn't exist, it has 0 depth (base case)

const maxDepth = (root) => {
  if (root === null) { return 0; }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
