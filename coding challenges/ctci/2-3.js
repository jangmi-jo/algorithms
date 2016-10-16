
const { SinglyLinkedList, Link } = require('./../Data Structure/SinglyLinkedList.js');

let testList = new SinglyLinkedList();
testList.pushBack(1);
testList.pushBack(2);
testList.pushBack(3);
let four = testList.pushBack(4);
testList.pushBack(5);
testList.pushBack(6);

// [1, 2, 3, 4, 5]

// delete middle node
// in => [a b c d e f] , c
// in SinglyLinkedList

const deleteMiddle = (head, target) => {
  // time: O(1)
  // space: O(1)
  if (target === head || target.next === undefined) {
    return false;
  }
  target.value = target.next.value;
  target.next = target.next.next;
};

testList.display();

deleteMiddle(testList.topFront(), four);

testList.display();
