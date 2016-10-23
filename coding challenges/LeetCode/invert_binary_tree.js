const invertTree = (root) => {
  if (root === null) { return root; }
  let temp = invertTree(root.left);
  root.left = invertTree(root.right);
  root.right = temp;
  return root;
};
