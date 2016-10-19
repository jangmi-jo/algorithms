// partition a linked list around a value x
// such that all nodes less than x come before all nodes greater than or equal to x
// If x is contained
//
// in: [3, 5, 8, 5, 10, 2, 1] partition value = 5
// out: [3, 1, 2, 10, 5, 5, 8]

const { SinglyLinkedList, Link } = require('./../../Data Structure/SinglyLinkedList.js');

let testList = new SinglyLinkedList();
testList.pushBack(3);
testList.pushBack(5);
testList.pushBack(8);
testList.pushBack(5);
testList.pushBack(10);
testList.pushBack(2);
testList.pushBack(1);

const partition = (head, p) => {
  // time: O(n)
  // space: O(n)
  let left = new SinglyLinkedList();
  let right = new SinglyLinkedList();
  let current = head;
  while (current.next) {
    if (current.value < p) {
      left.pushBack(current.value);
    } else {
      right.pushBack(current.value);
    }
    current = current.next;
  }
  left.display();
  right.display();
  left.topBack().next = right.topFront();
  left.tail = right.tail;
  left.length += right.length;
  return left;
};

console.log(partition(testList.topFront(), 5));
