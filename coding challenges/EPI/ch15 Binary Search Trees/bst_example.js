class Node {
  constructor(val) {
    this.val = val;
  }
}

const root = new Node(19);
const b = new Node(7);
const c = new Node(3);
const d = new Node(2);
const e = new Node(5);
const f = new Node(11);
const g = new Node(17);
const h = new Node(13);
const i = new Node(43);
const j = new Node(23);
const k = new Node(37);
const l = new Node(29);
const m = new Node(31);
const n = new Node(41);
const o = new Node(47);
const p = new Node(53);

root.left = b;
root.right = i;
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

module.exports = {root, c, h};
