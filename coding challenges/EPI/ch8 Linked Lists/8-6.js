/*
delete a node from singly linked list
given the node to delete
it is guaranteed the node is not a tail node

1) change the node's value to the next node's value
2) change the node's next to the next node's next

*/

const deleteThisNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};
