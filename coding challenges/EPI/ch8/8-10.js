/*
even odd merge
given singly linked list,
order them by even index nodes first, then odd index nodes

1) keep a dummy singly linked list
2) for each process, add the next link to the dummy list
3) set current link's next to next.next
4) do the process if current link's next exists
5) at the end, add the dummy head to the current list's tail

*/

const SinglyLinkedList = require('./8-9.js');

const evenOddMerge = (list) => {
  // time: O(n) where n is the length of list
  // space: O(1) since I used the links as they were
  if (list.length === 0) { return list; }
  let oddList = new SinglyLinkedList();
  let node = list.head;
  let last = list.head;
  while (node && node.next) {
    let temp = node.next.next;
    oddList.append(node.next);
    node.next = temp;
    last = temp || node;
    node = node.next;
  }
  last.next = oddList.head;
  list.tail = oddList.tail;
  return list;
};


let n = new SinglyLinkedList();
n.addVal('a');
n.addVal('b');
n.addVal('c');
n.addVal('d');
n.addVal('e');
n.addVal('f');
n.addVal('g');
evenOddMerge(n).display();
