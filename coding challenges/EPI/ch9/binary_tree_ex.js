class Node {
  constructor(val) {
    this.val = val;
    this.left = undefined;
    this.right = undefined;
  }
}

let r = new Node(314);
let b = new Node(6);
let c = new Node(271);
let d = new Node(28);
let e = new Node(0);
let f = new Node(561);
let g = new Node(3);
let h = new Node(17);
let i = new Node(6);
let j = new Node(2);
let k = new Node(1);
let l = new Node(401);
let m = new Node(641);
let n = new Node(257);
let o = new Node(271);
let p = new Node(28);

r.left = b;
r.right = i;
b.left = c;
b.right = f;
c.left = d;
c.right = e;
f.right = g;
g.left = h;
i.left = j;
i.right = o;
o.right = p;
j.right = k;
k.left = l;
k.right = n;
l.right = m;

module.exports = {r, m, n};
