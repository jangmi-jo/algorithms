// palindrome
// check if a linked list is a palindrome
// [1, 2, 3, 3, 2, 1]

// [3, 2, 1]

const { SinglyLinkedList, Link } = require('./../../Data Structure/SinglyLinkedList.js');

let testList = new SinglyLinkedList();
testList.pushBack(1);
testList.pushBack(2);
testList.pushBack(3);
testList.pushBack(4);
testList.pushBack(3);
testList.pushBack(2);
testList.pushBack(1);
testList.display();

const palindrome = (linkedList) => {
  let halfArr = [];
  let length = linkedList.length;
  for (let i=0; i<Math.floor(length / 2); i++) {
    halfArr.push(linkedList.popFront());
  }
  if (length % 2) { linkedList.popFront(); }
  for (let j=0; j<Math.floor(length / 2); j++) {
    if (halfArr.pop() !== linkedList.popFront()) {
      return false;
    }
  }
  return true;
};

console.log(palindrome(testList));
