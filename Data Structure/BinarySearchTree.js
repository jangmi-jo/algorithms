class Node {
  constructor(key) {
    this.key = key;
    this.left = undefined;
    this.right = undefined;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = undefined;
  }

  insert(key) {
    let newNode = new Node(key);
    if (this.root) {
    } else {
      this.root = newNode;
    }
  }
}

let bst = new BinarySearchTree();



// insert, find, inorder, preorder, postorder,
// height, min, max,
// delete,
