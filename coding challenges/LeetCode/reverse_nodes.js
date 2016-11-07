const reverseKGroup = (node, k) => {
  // time: O(N) where N is the length of nodes
  // space: O(1)
  let head = null;
  let last = null;
  while (node) {
    let reversedList = reverse(node, k);
    if (head) {
      last.next = reversedList[0];
    } else {
      head = reversedList[0];
    }
    last = reversedList[1];
    node = reversedList[2];
  }
  return head;
};

const reverse = (node, k) => {
  // return [reversedH, reversedT, next]
  // go through k - 1 times
  // set reversedH, reversedT
  // if reversedT doesn't exists, return right there
  // from reversedT to reversedH do the reversing
  let reversedH, reversedT = node;
  for (let i=1; i<k; i++) {
    node = node.next;
    if (node === null) {
      return [reversedT, null, null];
    }
  }
  reversedH = node;
  let nextNode = node.next;
  let pointer = reversedT;
  let prevNode = null;
  for (let i=0; i<k; i++) {
    let temp = pointer.next;
    pointer.next = prevNode;
    prevNode = pointer;
    pointer = temp;
  }
  return [reversedH, reversedT, nextNode];
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(reverseKGroup(a, 3));
