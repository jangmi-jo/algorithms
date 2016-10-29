const getDepth = (node) => {
  let depth = 0;
  while (node) {
    node = node.parent;
    depth++;
  }
  return depth;
};

const firstCommonAncestor = (a, b) => {
  // with parent pointer
  // get depth both of them
  // for the longer length, go through and compare
  let aDepth = getDepth(a);
  let bDepth = getDepth(b);
  let diff = aDepth - bDepth;
  if (diff < 0) {
    for (let i=0; i<-diff; i++) {
      b = b.parent;
    }
  } else {
    for (let i=0; i<diff; i++) {
      a = a.parent;
    }
  }

  while (a !== b) {
    a = a.parent;
    b = b.parent;
  }
  return a;
};

const recursion = (a, b, root) => {
  // without parent link
  // time: O(n) where n is the number of nodes
  // space: O(h) where h is the height of the tree
  if (!root) { return false; }
  if (root === a || root === b) { return true; }
  let left = recursion(a, b, root.left);
  let right = recursion(a, b, root.right);
  if (left && right) {
    return root;
  }
  return left || right;
};

class Node {
  constructor(val) {
    this.val = val;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
let h = new Node('h');

a.left = b;
a.right = c;
c.left = f;
b.left = d;
b.right = e;
d.left = h;

console.log(recursion(h, e, a));
