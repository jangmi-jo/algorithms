// intersection
// return interesecting node

const { SinglyLinkedList, Link } = require('./../../Data Structure/SinglyLinkedList.js');

// [1, 2, 4, 5]
// [0, 9, 4, 5]

const intersection = (first, second) => {
  let hash = new Map();
  while (first || second) {
    if (hash[first]) {
      return first;
    } else if (hash[second]) {
      return second;
    }
    if (first && first.next) {
      hash[first] = true;
      first = first.next;
    } else {
      first = undefined;
    }

    if (second )
    hash[second] = true;
    second = second.next;
  }
};

let first = new Link(1);
let two = new Link(2);
let zero = new Link(0);
let nine = new Link(9);
let four = new Link(4);
let five = new Link(5);

first.next = two;
two.next = four;
four.next = five;
zero.next = nine;
nine.next = four;


console.log(intersection(first, zero));
