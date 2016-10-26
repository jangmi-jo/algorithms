const lowestCommonAncestor = (root, a, b) => {
  // time: O(logn)
  if (a.val === b.val) { return a; }
  while (true) {
    if (root.val < a.val && root.val < b.val) {
      root = root.right;
    } else if (root.val > a.val && root.val > b.val) {
      root = root.left;
    } else {
      return root;
    }
  }
};
