class Node {
  constructor(val) {
    this.val = val;
  }
}

let a = new Node(314);
let b = new Node(6);
let c = new Node(2);
let d = new Node(3);
let e = new Node(6);
let f = new Node(2);
let g = new Node(3);

a.left = b;
a.right = e;
b.right = c;
e.left = f;
c.right = d;
f.left = g;

module.exports = a;
