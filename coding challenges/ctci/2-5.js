// sum lists

// input : two linked lists
// [7, 1, 6] => 617
// [5, 9, 2] => 295
// out : 912 => [2, 1, 9]

const { SinglyLinkedList, Link } = require('./../../Data Structure/SinglyLinkedList.js');

const sumLists = (first, second) => {
  // assume both linked list has more than 0 links
  if (first.length < second.length) {
    let temp = first;
    first = second;
    second = first;
  }
  let firstCurrent = first.topFront();
  let secondCurrent = second.topFront();
  for (let i=0; i<first.length; i++) {
    let newVal = firstCurrent.value;
    newVal += (i < second.length) ? secondCurrent.value : 0;
    if (newVal > 9) {
      if (i === first.length - 1) {
        first.pushBack(Math.floor(newVal / 10));
      } else {
        firstCurrent.next.value += Math.floor(newVal / 10);
      }
      newVal %= 10;
    }
    firstCurrent.value = newVal;
    firstCurrent = firstCurrent.next;
    if (i < second.length) {
      secondCurrent = secondCurrent.next;
    }
  }
  return first;
};

let first = new SinglyLinkedList();
let second = new SinglyLinkedList();
first.pushBack(1);
second.pushBack(9);
second.pushBack(9);
second.pushBack(9);

sumLists(second, first);
// 356
