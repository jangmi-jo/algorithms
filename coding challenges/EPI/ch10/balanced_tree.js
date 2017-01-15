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
let j = new Node('j');
let k = new Node('k');
let l = new Node('l');
let m = new Node('m');
let n = new Node('n');
let o = new Node('o');

a.left = b;
b.left = c;
b.right = h;
c.left = d;
d.left = e;
d.right = f;
c.right = g;
h.left = i;
h.right = j;
a.right = k;
k.left = l;
l.left = m;
l.right = n;
k.right = o;

module.exports = a;
