const { BinarySearchTree, Node } = require('./BinarySearchTree.js');


let bst = new BinarySearchTree();
[7, 4, 9, 1, 6, 8, 10].forEach((n) => {
  bst.insert(n);
});

console.log(bst);
