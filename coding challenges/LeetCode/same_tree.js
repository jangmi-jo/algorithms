const isSameTree = (a, b) => {
  // recursive way
  // when a and b exist, we check the value is same
  // and recursively call the func with left tree and right tree
  // when both doesn't exist, return true
  // time: O(N) where N is smaller tree's number of nodes
  // space: O(h) for the call stack where h is shorter tree's height
  if (a && b) {
    if (a.val === b.val) {
      return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
    }
  } else if (!a && !b) {
    return true;
  }
  return false;
};
