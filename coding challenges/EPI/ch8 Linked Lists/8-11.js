/*
given a singly linked list, check palindrome

1) go half of length and reversing the relation
2) from the half, go toward outside and check if it's palindrome

(if the list should be unchanged, I can change it back but I won't implement that here)

*/
const SinglyLinkedList = require('./8-9.js');

const isPalindrome = (list) => {
  // time: O(n), space: O(1)
  let half = Math.floor(list.length / 2);
  let prev = undefined;
  let node = list.head;
  for (let i=0; i<half; i++) {
    let temp = node.next;
    node.next = prev;
    prev = node;
    node = temp;
  }
  if (list.length % 2) { node = node.next; }
  while (node) {
    if (node.val !== prev.val) {
      return false;
    }
    prev = prev.next;
    node = node.next;
  }
  return true;
};

let n = new SinglyLinkedList();
n.addVal(1);
n.addVal(2);
n.addVal(3);
n.addVal(4);
n.addVal(3);
n.addVal(2);
n.addVal(1);

console.log(isPalindrome(n));
