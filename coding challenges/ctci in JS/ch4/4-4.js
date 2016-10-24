// check balance
// a binary tree is balanced
// a balanced tree is defined to be a tree such that the heights difference of the two subtrees are not more than 1


class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const isBalanced = (node) => {
  // height diff between left subtree and right subtree is <= 1
  // left subtree is balanced
  // right subtree is balanced
  // time: O(n) where n is the num of Nodes
  if (node === null) { return true; }
  let diff = Math.abs(getHeight(node.left) - getHeight(node.right));
  if (diff <= 1) {
    return isBalanced(node.left) && isBalanced(node.right);
  }
  return false;
};

const getHeight = (node) => {
  // time: O(n) where n is the number of Nodes
  // space: O(h) where h is the height of the tree
  if (node === null) { return 0; }
  return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
};


//     a
//   b   c
// d
//e


let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
a.left = b;
a.right = c;
b.left = d;
d.left = e;


console.log(isBalanced(a));
