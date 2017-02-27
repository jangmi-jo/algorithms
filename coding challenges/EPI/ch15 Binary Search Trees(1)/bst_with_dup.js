class Node {
  constructor(val) {
    this.val = val;
  }
}

const root = new Node(108);
const b = new Node(108);
const c = new Node(-10);
const d = new Node(-14);
const e = new Node(2);
const f = new Node(108);
const g = new Node(285);
const h = new Node(243);
const i = new Node(285);
const j = new Node(401);

root.left = b;
root.right = g;
b.left = c;
b.right = f;
c.left = d;
c.right = e;
g.left = h;
g.right = i;
i.right = j;

module.exports = root;
