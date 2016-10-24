const deleteNode = (node) => {
  // make this node as the next one
  // delete next node
  // time: O(1)
  node.val = node.next.val;
  node.next = node.next.next;
};
