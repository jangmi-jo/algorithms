
class Node {
  constructor(key) {
    this.key = key;
  }
}

class BinarySearchTree {
  constructor(getVal = (val) => val) {
    this.root = undefined;
    this.getVal = getVal;
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
    this.root = BinarySearchTree.deleteNode(this.root, key);
  }

  deleteMin() {
    this.root = BinarySearchTree.deleteMin(this.root);
  }

  find(key) {
    return BinarySearchTree.find(this.root, key, this.getVal);
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
    if (this.find(key)) { return; }
    if (this.root) {
      return BinarySearchTree.insert(this.root, key, this.getVal);
    } else {
      this.root = new Node(key);
      return this.root;
    }
  }

  static insert(node, key, getVal) {
    if (!node) {
      return new Node(key);
    }
    if (getVal(key) < getVal(node.key)) {
      node.left = BinarySearchTree.insert(node.left, key, getVal);
    } else {
      node.right = BinarySearchTree.insert(node.right, key, getVal);
    }
    return node;
  }

  static min(node) {
    if (!node) { return ; }
    if (node.left) {
      return BinarySearchTree.min(node.left);
    } else {
      return node;
    }
  }

  static max(node) {
    if (!node) { return ; }
    if (node.right) {
      return BinarySearchTree.max(node.right);
    } else {
      return node;
    }
  }

  static find(node, key, getVal) {
    if (node) {
      if (getVal(key) === getVal(node.key)) {
        return node;
      } else if (getVal(key) < getVal(node.key)) {
        return BinarySearchTree.find(node.left, key, getVal);
      } else {
        return BinarySearchTree.find(node.right, key, getVal);
      }
    } else {
      return ;
    }
  }

  static height(node) {
    if (node) {
      const heights = [BinarySearchTree.height(node.left),
                     BinarySearchTree.height(node.right)];
      return Math.max(...heights) + 1;
    } else {
      return 0;
    }
  }

  static deleteMin(node) {
    if (!node) { return ; }
    if (node.left) {
      node.left = BinarySearchTree.deleteMin(node.left);
      return node;
    } else {
      return node.right ? node.right : undefined;
    }
  }

  static deleteNode(node, key) {
    if (!node) { return ; }
    if (node.key === key) {
      if (node.left && node.right) {
        const rightMin = BinarySearchTree.min(node.right);
        rightMin.right = BinarySearchTree.deleteMin(node.right);
        rightMin.left = node.left;
        return rightMin;
      } else if (node.left) {
        return node.left;
      } else if (node.right) {
        return node.right;
      } else {
        return ;
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
    const arr = [];
    arr = arr.concat(BinarySearchTree.inorder(node.left));
    arr.push(node.key);
    arr = arr.concat(BinarySearchTree.inorder(node.right));
    return arr;
  }

  static postorder(node) {
    if (!node) { return []; }
    const arr = [];
    arr = arr.concat(BinarySearchTree.postorder(node.left));
    arr = arr.concat(BinarySearchTree.postorder(node.right));
    arr.push(node.key);
    return arr;
  }

  static preorder(node) {
    if (!node) { return []; }
    const arr = [];
    arr.push(node.key);
    arr = arr.concat(BinarySearchTree.preorder(node.left));
    arr = arr.concat(BinarySearchTree.preorder(node.right));
    return arr;
  }
}

module.exports = BinarySearchTree;
