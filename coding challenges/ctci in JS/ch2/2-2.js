// return kth to last

const { SinglyLinkedList, Link } = require('./../Data Structure/SinglyLinkedList.js');

let testList = new SinglyLinkedList();
testList.pushBack(1);
testList.pushBack(2);
testList.pushBack(3);
testList.pushBack(4);
testList.pushBack(5);

// [1, 2, 3, 4, 5]
// 3 => 3


const kthLast = (k, head) => {
  // time: O(n)
  // space: O(1)
  let length = 0;
  let current = head;
  while (current.next) {
    length++;
    current = current.next;
  }
  current = head;
  for (let i=0; i<length-k; i++) {
    current = current.next;
  }
  return current.value;
};

console.log(kthLast(3, testList.topFront()));
