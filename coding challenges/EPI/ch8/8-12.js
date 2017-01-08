/*
list pivoting
given a list, integer k

1) make three dummy lists (smaller, same, bigger)
2) go through the original list
3) if the value is smaller than k, append it to smaller
4) if the value is same as k, append it to same
5) if the value is bigger than k, append it to bigger
6) at the end, merge them with custom merge method

*/

const SinglyLinkedList = require('./8-9.js');

const listPivoting = (list, k) => {
  // time: O(n) where n is the length of original list
  // space: O(1) since we don't make extra. we re-use all the links by appending them
  let smaller = new SinglyLinkedList();
  let same = new SinglyLinkedList();
  let bigger = new SinglyLinkedList();

  let current = list.head;
  while (current) {
    let temp = current.next;
    if (current.val === k) {
      same.append(current);
    } else if (current.val < k) {
      smaller.append(current);
    } else {
      bigger.append(current);
    }
    current = temp;
  }
  // merge takes time, space O(1)
  let merged = SinglyLinkedList.merge(smaller, same);
  return SinglyLinkedList.merge(merged, bigger);
};

let n = new SinglyLinkedList();
n.addVal(1);
n.addVal(2);
n.addVal(3);
n.addVal(4);
n.addVal(3);
n.addVal(2);
n.addVal(1);

let res = listPivoting(n, 3);
res.display();
