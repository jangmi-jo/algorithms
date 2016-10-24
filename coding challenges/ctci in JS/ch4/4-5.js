// validate BST
// check if a binary tree is BST

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
//       4
//     2   6
//   1  3 7  5

// all the left nodes are smaller than root
// == maximum of all the left nodes = root.val
// all the right nodes are bigger than root
const isBST = (node, min, max) => {
  // validate this node
  // if this node has min or max, see if it violates the boundary
  // left subtree is BST && right subtree is BST
  // time: O(n) where n is the number of Nodes
  if (node === null) { return true; }
  if (min && node.val < min) { return false; }
  if (max && node.val > max) { return false; }

  return isBST(node.left, min, node.val) && isBST(node.right, node.val, max);
};

let four = new TreeNode(4);
let two = new TreeNode(2);
let six = new TreeNode(6);
let one = new TreeNode(1);
let thr = new TreeNode(3);
let five = new TreeNode(5);
let sev = new TreeNode(7);
four.left = two;
four.right = six;
two.left = one;
two.right = thr;
six.left = sev;
six.right = five;

console.log(isBST(four));
