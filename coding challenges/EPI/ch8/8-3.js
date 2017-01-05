/*
test cyclicity

given a head of singly linked list,
return false if it doesn't have cycle
return the first node of cycle if it has cycle

we could do it so easily set a map or set and use O(n) additional space but if it's necessary not to use additional space, we can use two pointers

1) set both pointers(a, b) to head
2) move a one node forward, move b two nodes forward each time
3) keep move pointers while a && b
4) if a === b, we found cycle
5) get the length of cycle
6) move both pointers to the head
7) forward b the length of the cycle
8) to make the distance of those two pointers be always the length of the cycle
9) move both pointers one node at a time until we find the first same node

*/


class Link {
  constructor(val) {
    this.val = val;
    this.next = undefined;
  }
}

const cycleLength = (node) => {
  let len = 1;
  let [a, b] = [node, node.next];
  while (a !== b) {
    b = b.next;
    len++;
  }
  return len;
};

const getFirstNode = (head, len) => {
  let [a, b] = [head, head];
  for (let i=0; i<len; i++) { b = b.next; }
  while (a !== b) {
    a = a.next;
    b = b.next;
  }
  return a;
};

const testCyclicity = (head) => {
  // time: O(n), space: O(1)
  let [a, b] = [head, head];
  while (a && b) {
    a = a.next;
    b = b.next ? b.next.next : b.next;
    if (a === b) {
      return getFirstNode(head, cycleLength(a));
    }
  }
  return false;
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
g.next = c;

// console.log(testCyclicity(a));

module.exports = testCyclicity;
