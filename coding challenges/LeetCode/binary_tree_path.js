const binaryTreePaths = (root, path = []) => {
  // need DFS
  // more practice is needed. Took too long to code
  if (!root) { return []; }
  let res = [];
  let newPath = path.concat(root.val);
  if (!root.left && !root.right) { return [newPath.join('->')]; }
  if (root.left) {
    res = res.concat(binaryTreePaths(root.left, newPath));
  }
  if (root.right) {
    res = res.concat(binaryTreePaths(root.right, newPath));
  }
  return res;
};
