class Node {
  constructor(val) {
    this.val = val;
  }
}

let a = new Node(1);
let b = new Node(0);
let c = new Node(0);
let d = new Node(0);
let e = new Node(1);
let f = new Node(1);
let g = new Node(1);
let h = new Node(0);
let i = new Node(1);
let j = new Node(0);
let k = new Node(0);
let l = new Node(1);
let m = new Node(1);
let n = new Node(0);
let o = new Node(0);
let p = new Node(0);

a.left = b;
a.right = i;
b.left = c;
b.right = f;
c.left = d;
c.right = e;
f.right = g;
g.left = h;
i.left = j;
i.right = o;
j.right = k;
k.left = l;
k.right = n;
l.right = m;
o.right = p;

module.exports = a;
