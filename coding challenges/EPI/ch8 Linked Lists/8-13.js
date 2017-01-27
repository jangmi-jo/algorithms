/*
add list based integers

ex) 314 + 709 = 0231
least significant digit comes first

using carry, add from the beginning

*/

const SinglyLinkedList = require('./8-9.js');

const addListBasedIntegers = (aList, bList) => {
  // time: O(length of longer list), space: O(1)
  let carry;
  [aList, bList] = [aList, bList].sort((x, y) => x.length - y.length);
  // bList is always longer
  let a = aList.head, b = bList.head;
  while (b) {
    let newVal = b.val;
    if (a) {
      newVal += a.val;
      a = a.next;
    }
    if (carry) {
      newVal++;
      carry = undefined;
    }
    if (newVal > 9) {
      carry = 1;
      newVal %= 10;
    }
    b.val = newVal;
    b = b.next;
  }
  if (carry) { bList.addVal(carry); }
  return bList;
};

let first = new SinglyLinkedList();
[9, 9, 1].forEach((v) => {
  first.addVal(v);
});
let second = new SinglyLinkedList();
[1].forEach((v) => {
  second.addVal(v);
});

let added = addListBasedIntegers(first, second);
added.display();
