/*
compute the LCA(Lowest Common Ancestor), optimizing for close ancestors

we can store the nodes from both end
when we find one already in it, break the process there
*/

const lowestCommonAncestor = (a, b) => {
  // time: O(longer depth between a and b)
  // space: O(a from root + b from root)
  const set = new Set();
  while (a || b) {
    if (a) {
      if (set.has(a)) { return a; }
      set.add(a);
      a = a.parent;
    }
    if (b) {
      if (set.has(b)) { return b; }
      set.add(b);
      b = b.parent;
    }
  }
};


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

console.log(lowestCommonAncestor(c, b).val);
