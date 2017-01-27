/*
remove duplicates from sorted singly linked list

1) go through the list
2) remove the next node if the value is same as current

*/

const removeDup = (head) => {
  while (head) {
    if (head.next && head.val === head.next.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }
};

class Link {
  constructor(val) {
    this.val = val;
    this.next = undefined;
  }
}


let a = new Link('a');
let b = new Link('a');
let c = new Link('a');
let d = new Link('d');
let e = new Link('d');
let f = new Link('d');
let g = new Link('g');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

removeDup(a);

let i = a;
while (i) {
  console.log(i.val);
  i = i.next;
}
