
const hasPathSum = (root, sum) => {
  // time: O(N) where N is the number of nodes
  // space: O(d) where d is the depth of the tree
  if (!root) { return false; }
  if (!root.left && !root.right) {
    return root.val === sum;
  }

  if (root.left) { root.left.val += root.val; }
  if (root.right) { root.right.val += root.val; }
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};
