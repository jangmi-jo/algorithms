/*
remove k-lastth node in singly linked list
given head link

1) set pointer a to the kth node, b to the head
2) if a become undefined in k, there's no k-lastth node
3) move both pointers forward
4) when a reaches to the last node, b is at k+1th
because the diff of a and b stays k from the beginning
5) remove k-lastth node

*/

const removeKLast = (node, k) => {
  // time: O(n), space: O(1)
  let [a, b] =  [node, node];
  for (let i=0; i<k; i++) {
    if (!a) { return false; }
    a = a.next;
  }
  if (!a) {
    // a is the one to remove which is head node
    b.val = b.next.val;
    b.next = b.next.next;
    return;
  }
  while (a.next) {
    a = a.next;
    b = b.next;
  }
  b.next = b.next.next;
};

class Link {
  constructor(val) {
    this.val = val;
    this.next = undefined;
  }
}


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

removeKLast(a, 7);


let i = a;
while (i) {
  console.log(i.val);
  i = i.next;
}
