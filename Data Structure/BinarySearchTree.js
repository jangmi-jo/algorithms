
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

  inorder() {
    return BinarySearchTree.inorder(this.root);
  }

  preorder() {
    return BinarySearchTree.preorder(this.root);
  }

  postorder() {
    return BinarySearchTree.postorder(this.root);
  }

  deleteNode(key) {
    // set the root to the return value of the class method
    // for deleting root as well when requested
    this.root = BinarySearchTree.deleteNode(this.root, key);
  }

  deleteMin() {
    this.root = BinarySearchTree.deleteMin(this.root);
  }

  find(key) {
    return BinarySearchTree.find(this.root, key);
  }

  height() {
    return BinarySearchTree.height(this.root);
  }

  max() {
    return BinarySearchTree.max(this.root);
  }

  min() {
    return BinarySearchTree.min(this.root);
  }

  insert(key) {
    if (this.root) {
      return BinarySearchTree.insert(this.root, key);
    } else {
      let newNode = new Node(key);
      this.root = newNode;
      return this.root;
    }
  }

  static insert(node, key) {
    if (!node) {
      let newNode = new Node(key);
      return newNode;
    }
    if (key < node.key) {
      node.left = BinarySearchTree.insert(node.left, key);
    } else {
      node.right = BinarySearchTree.insert(node.right, key);
    }
    return node;
  }

  static min(node) {
    if (!node) { return undefined; }
    if (node.left) {
      return BinarySearchTree.min(node.left);
    } else {
      return node;
    }
  }

  static max(node) {
    if (!node) { return undefined; }
    if (node.right) {
      return BinarySearchTree.max(node.right);
    } else {
      return node;
    }
  }

  static find(node, key) {
    if (node) {
      if (key === node.key) {
        return node;
      } else if (key < node.key) {
        return BinarySearchTree.find(node.left, key);
      } else {
        return BinarySearchTree.find(node.right, key);
      }
    } else {
      return undefined;
    }
  }

  static height(node) {
    if (node) {
      let heights = [BinarySearchTree.height(node.left),
                     BinarySearchTree.height(node.right)];
      return Math.max(...heights) + 1;
    } else {
      return 0;
    }
  }

  static deleteMin(node) {
    if (!node) { return undefined; }
    if (node.left) {
      node.left = BinarySearchTree.deleteMin(node.left);
      return node;
    } else {
      return node.right ? node.right : undefined;
    }
  }

  static deleteNode(node, key) {
    if (!node) { return undefined; }
    if (node.key === key) {
      if (node.left && node.right) {
        let rightMin = BinarySearchTree.min(node.right);
        rightMin.right = BinarySearchTree.deleteMin(node.right);
        rightMin.left = node.left;
        return rightMin;
      } else if (node.left) {
        return node.left;
      } else if (node.right) {
        return node.right;
      } else {
        return undefined;
      }
    } else if (key < node.key) {
      node.left = BinarySearchTree.deleteNode(node.left, key);
    } else {
      node.right = BinarySearchTree.deleteNode(node.right, key);
    }
    return node;
  }

  static inorder(node) {
    if (!node) { return []; }
    let arr = [];
    arr = arr.concat(BinarySearchTree.inorder(node.left));
    arr.push(node.key);
    arr = arr.concat(BinarySearchTree.inorder(node.right));
    return arr;
  }

  static postorder(node) {
    if (!node) { return []; }
    let arr = [];
    arr = arr.concat(BinarySearchTree.postorder(node.left));
    arr = arr.concat(BinarySearchTree.postorder(node.right));
    arr.push(node.key);
    return arr;
  }

  static preorder(node) {
    if (!node) { return []; }
    let arr = [];
    arr.push(node.key);
    arr = arr.concat(BinarySearchTree.preorder(node.left));
    arr = arr.concat(BinarySearchTree.preorder(node.right));
    return arr;
  }
}

module.exports = { BinarySearchTree, Node };
