// n-ary tree => each node can have n children

// recursion!
// get all the children's height
// get the maximum of them + 1

class TreeNode {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

//               1
//      2        3     4
//   5  6  7   8 9 10

// height means, from root to the farthest leaf

const getHeight = (node) => {
  // time: O(N) where N is the number of the nodes
  // space: O(h) where h is the height of the tree
  if (!node) {return 0; }
  if (node.children.length === 0) {
    return 1;
  }

  let max = 0;
  node.children.forEach((child) => {
    let height = getHeight(child);
    max = max < height ? height : max;
  });
  return max + 1;
};
