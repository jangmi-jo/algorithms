/*
merge two sorted singly linked list
given two head nodes

keep head, tail
1) get the smaller node from two nodes
if head is not there yet, make that as head and tail
if head exists, make that as tail
2) set the smaller node's pointer to the next one
3) return head

*/

class Link {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
}

const mergeSortedLists = (a, b) => {
  // time: O(a+b), space: O(1)
  let head, tail;
  while (a || b) {
    let temp = [a, b].filter((el) => el).sort((x, y) => x.value - y.value);
    if (!head) {
      head = temp[0];
      tail = temp[0];
    } else {
      tail.next = temp[0];
      tail = temp[0];
    }
    if (a && a.value === temp[0].value) {
      a = a.next;
    } else {
      b = b.next;
    }
  }
  return head;
};

let one = new Link(1);
let two = new Link(2);
let three = new Link(3);
let four = new Link(4);
let five = new Link(5);
let six = new Link(6);

one.next = two;
two.next = three;
three.next = four;
five.next = six;
