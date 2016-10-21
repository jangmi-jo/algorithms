const { SinglyLinkedList, Link } = require('./../Data Structure/SinglyLinkedList.js');

let testList = new SinglyLinkedList();
testList.pushBack(4);
testList.pushBack(2);
testList.pushBack(6);
testList.pushBack(1);
testList.pushBack(2);
testList.pushBack(4);

testList.display();
// [4, 2, 6, 1, 2, 4]

// remove dups
// remove duplicates from an unsorted linked list
// don't make temporary buffer

const removeDup = (linkedList) => {
  // time : O(n)
  // space : O(n)
  let uniqHash = new Map();
  let currentLink = linkedList.topFront();
  while (currentLink) {
    if (uniqHash.get(currentLink.value)) {
      linkedList.remove(currentLink.value);
    } else {
      uniqHash.set(currentLink.value, true);
    }
    currentLink = currentLink.next;
  }
  linkedList.display();
};

removeDup(testList.topFront());
