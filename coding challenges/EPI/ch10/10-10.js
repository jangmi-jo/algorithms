/*
compute successor
node has parent pointer

1) has right node
get right node's left-most node
2) doesn't have right node
go up until the node is not the right node
3) return the node

didn't build test case since it's too specific (with special assuming, like has parent) but pretty sure it will work
*/

const findSuccessor = (node) => {
  // time: O(logn), space: O(1)
  if (!node) { return false; }
  if (node.right) {
    node = node.right;
    while (node.left) {
      node = node.left;
    }
  } else {
    while (node.parent && node.parent.right === node) {
      node = node.parent;
    }
  }
  return node;
};
