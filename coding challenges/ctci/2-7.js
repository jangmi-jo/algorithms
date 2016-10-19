// intersection
// return interesecting node

const { SinglyLinkedList, Link } = require('./../../Data Structure/SinglyLinkedList.js');


const getLength = (link) => {
  let length = 0;
  while (link) {
    length++;
    link = link.next;
  }
  return length;
};

const intersection = (first, second) => {
  // get both length and match it for the shorter one
  // starting from the matched length, if we find same link,
  // that's intersection. If not, it doesn't intersect
  // time: O(n+m) for get both length
  // space: O(1)
  let firstLength = getLength(first),
      secondLength = getLength(second);
  if (firstLength > secondLength) {
    let temp = first;
    first = second;
    second = temp;
  }
  for (let i=0; i<Math.abs(firstLength - secondLength); i++) {
    second = second.next;
  }
  while (first) {
    if (first === second) { return first; }
    first = first.next;
    second = second.next;
  }
};

// [1, 2, 3, 4, 5]
// [0, 9, 4, 5]

let first = new Link(1);
let two = new Link(2);
let three = new Link(3);
let zero = new Link(0);
let nine = new Link(9);
let four = new Link(4);
let five = new Link(5);

first.next = two;
two.next = three;
three.next = four;
four.next = five;
zero.next = nine;
nine.next = four;


console.log(intersection(first, zero));
