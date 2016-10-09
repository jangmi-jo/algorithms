
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
    if (this.root) {
      BinarySearchTree.insert(this.root, key);
    } else {
      let newNode = new Node(key);
      this.root = newNode;
    }
  }

  static insert(node, key) {
    if (!node) {
      let newNode = new Node(key);
      return newNode;
    }
    if (key < node.key) {
      node.left = BinarySearchTree.insert(node.left, key);
      return node;
    } else {
      node.right = BinarySearchTree.insert(node.right, key);
      return node;
    }
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

module.exports = { BinarySearchTree, Node };

// insert, find, inorder, preorder, postorder,
// height, min, max,
// delete,
