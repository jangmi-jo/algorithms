// loop detection
// in linked list, return the beginning of the loop

const { Link } = require('./../../../Data Structure/SinglyLinkedList.js');

// [1, 2, 3, 4, 5, 3, 4, 5, 3, ...]

let first = new Link(1);
let two = new Link(2);
let three = new Link(3);
let four = new Link(4);
let five = new Link(5);

first.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = first;


const loopDetectionWithHash = (link) => {
  // time: O(n)
  // space: O(n) to save all links in hash
  let hash = new Map();
  while (link) {
    if (hash.get(link)) { return link; }
    hash.set(link, true);
    link = link.next;
  }
};

const loopDetectionWithPointer = (link) => {
  // assuming that we always have cycle
  // find the length that has more than two cicle
  // start from beginning in the length and find the first cyclic link
  // time: O(n)
  // space: O(1)
  let p1 = link, p2 = link;
  let length = 0;
  while (p1 && p2) {
    p1 = p1.next;
    p2 = p2.next.next;
    length += 2;
    if (p1 === p2) { break; }
  }
  let count = 0;
  p1 = link;
  p2 = link.next;
  while (count !== length) {
    for (let i=count; i<length; i++) {
      if (p1 === p2) { return p1; }
      p2 = p2.next;
    }
    p1 = p1.next;
  }
};

console.log(loopDetectionWithPointer(first));
