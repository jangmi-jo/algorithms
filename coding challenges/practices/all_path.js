class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

//      1
//   2      3
// 4  5    6

// left returned val ['2->4', '2->5']
// right returned val ['3->6']

// from node 2
// left ['4']
// right ['5']   => ['4', '5']

// []
// []  => []

const path = (node) => {
  // time: O(N) where N is the number of nodes
  // space: O(L) where L is the number of leaves of the tree
  if (!node) {
    return [];
  }
  let childrenPath = path(node.left).concat(path(node.right));
  if (childrenPath.length === 0) {
    childrenPath.push(node.val);
  } else {
    childrenPath = childrenPath.map((child) => `${node.val}->${child}`);
  }
  return childrenPath;
};
