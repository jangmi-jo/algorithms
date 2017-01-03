/*
reverse a single sublist
given a singly linked list, two integers s, e

reverse nodes from sth to eth inclusive

1) go to sth node
2) at sth, record before, record last, keep sth node as prev
3) from next node, set current's next to prev
4) set current as prev
5) when reaches eth, do the above process before
6) then set the before's next to eth
7) set the last's next to e+1th

*/
class Link {
  constructor(val) {
    this.val = val;
    this.next = undefined;
  }
}

const reverseSub = (node, s, e) => {
  // time: O(e), space: O(1)
  for (let i=0; i<s-1; i++) { node = node.next; }
  let before = node;
  // to make starting from 0 work
  if (s !== 0) { node = node.next; }
  let last = node, prev = node, temp;
  node = node.next;
  for (let i=0; i<e-s; i++) {
    temp = node.next;
    node.next = prev;
    if (i < e-s-1) {
      prev = node;
      node = temp;
    }
  }
  before.next = node;
  last.next = temp;
};

let a = new Link('a');
let b = new Link('b');
let c = new Link('c');
let d = new Link('d');
let e = new Link('e');
let f = new Link('f');
let g = new Link('g');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

reverseSub(a, 1, 3);

let i = a;
while (i) {
  console.log(i.val);
  i = i.next;
}
