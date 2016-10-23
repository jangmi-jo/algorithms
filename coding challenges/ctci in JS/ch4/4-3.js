// list of depths
// given a binary tree,
// create linked list of all the nodes at each depth

//      a
//   b    c
// d  e  f  g

// a, b => c, d => e => f => g

const { SinglyLinkedList } = require('../../../Data Structure/SinglyLinkedList.js');


class Node {
  constructor(val) {
    this.val = val;
    this.left = undefined;
    this.right = undefined;
  }

  children() {
    let res = [this.left, this.right];
    return res.filter((node) => node !== undefined);
  }
}


const listOfDepth = (root) => {
  // time: O(N) where N is the total nodes
  // space: O(N) where N is the total nodes
  let res = [];
  let queue = [root];
  while (queue.length) {
    let temp = [];
    let newList = new SinglyLinkedList();
    queue.forEach((node) => {
      newList.pushBack(node);
      temp = temp.concat(node.children());
    });
    queue = temp;
    res.push(newList);
  }
  return res;
};

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
let g = new Node('g');

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.left = f;
c.right = g;

listOfDepth(a).forEach((list) => {
  list.display();
});
// [[a], [b, c], [d, e, f, g]]
