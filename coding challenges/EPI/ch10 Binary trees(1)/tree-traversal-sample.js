
class Node {
  constructor(val) {
    this.val = val;
  }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
let g = new Node('g');
let h = new Node('h');
let i = new Node('i');

f.left = b;
f.right = g;
b.left = a;
b.right = d;
d.left = c;
d.right = e;
g.right = i;
i.left = h;

a.parent = b;
b.parent = f;
c.parent = d;
e.parent = d;
d.parent = b;
h.parent = i;
i.parent = g;
g.parent = f;

module.exports = f;
