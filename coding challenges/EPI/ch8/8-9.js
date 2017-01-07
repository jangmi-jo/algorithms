/*
cyclic right shift singly linked list
given a list, k

1) assure k is smaller than length of list (using modulo)
2) get the tail and set the tail's next to head
3) from head, move k-1 forward
4) set the node as tail
5) set the next node as head
6) set tail's next to undefined

*/

class Link {
  constructor(val) {
    this.val = val;
    this.next = undefined;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  addVal(val) {
    let link = new Link(val);
    this.append(link);
  }

  append(link) {
    this.length++;
    link.next = undefined;
    if (this.head && this.tail) {
      this.tail.next = link;
      this.tail = link;
    } else if (this.head) {
      this.tail = link;
      this.head.next = this.tail;
    } else {
      this.head = link;
    }
  }

  display() {
    let c = this.head;
    while (c) {
      console.log(c.val);
      c = c.next;
    }
  }
}

const rightShift = (list, k) => {
  // time: O(k), space: O(1)
  k = k % list.length;
  list.tail.next = list.head;
  let head = list.head;
  for (let i=0; i<k-1; i++) { head = head.next; }
  list.tail = head;
  list.head = head.next;
  list.tail.next = undefined;
  return list;
};
//
// let n = new SinglyLinkedList();
// n.addVal('a');
// n.addVal('b');
// n.addVal('c');
// n.addVal('d');
// n.addVal('e');
// n.addVal('f');
// n.addVal('g');
//
// rightShift(n, 10);
//
// n.display();

module.exports = SinglyLinkedList;
