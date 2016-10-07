
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
      BinarySearchTree.insert(this.root, key);
    } else {
      this.root = newNode;
    }
  }

  static insert(node, key) {
    console.log("class method");
  }

  static min(node) {

  }

  static max(node) {

  }

  static find(node, key) {

  }

  static height(node) {

  }

  static deleteMin(node) {

  }

  static deleteNode(node) {

  }

  static inorder(node) {

  }

  static postorder(node) {

  }

  static preorder(node) {

  }
}

module.exports = {BinarySearchTree, Node };

// insert, find, inorder, preorder, postorder,
// height, min, max,
// delete,
