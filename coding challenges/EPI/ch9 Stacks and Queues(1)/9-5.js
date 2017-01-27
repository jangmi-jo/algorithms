/*
search a postings list
given a postings list, compute the jump-first order
each node has an integer valued field that holds the order,
initialized to -1

1) need to implement the Link, List
2) keep an order, start from 1
3) go through the list from head, set the order
4) see the jump field and check if the order is set
5) if it is, next node is the next
6) if it's not, next node is the jump
7) keep doing that until the node is undefined

*/

class Link {
  constructor(val) {
    this.val = val;
    this.order = -1;
    this.jump = undefined;
    this.next = undefined;
  }
}

class PostingsList {
  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  addVal(val) {
    let link = new Link(val);
    this.append(link);
    return link;
  }

  append(link) {
    this.length++;
    link.next = undefined;
    if (this.head) {
      this.tail.next = link;
      this.tail = link;
    } else {
      this.head = link;
      this.tail = link;
    }
  }

  display() {
    let c = this.head;
    while (c) {
      console.log(c.val);
      c = c.next;
    }
  }
}

const searchPostings = (list) => {
  // time: O(n) where n is the length of list
  // space: O(1)
  // I don't quite get why it's in stack part though...
  let order = 1;
  let link = list.head;
  while (link) {
    link.order = order++;
    if (link.jump && link.jump.order === -1) {
      link = link.jump;
    } else {
      link = link.next;
    }
  }
};

let list = new PostingsList();
let a = list.addVal('a');
let b = list.addVal('b');
let c = list.addVal('c');
let d = list.addVal('d');
a.jump = c;
b.jump = d;
c.jump = b;
d.jump = d;

searchPostings(list);

console.log(list);
