
const oddEvenList = (node) => {
  if (!node) { return node; }
  let evenHead = null;
  let evenTail = null;
  let current = node;
  while (current) {
    if (current.next && current.next.val % 2 === 0) {
      let evenNode = current.next;
      current.next = current.next.next;
      evenNode.next = null;
      if (evenHead) {
        evenTail.next = evenNode;
      } else {
        evenHead = evenNode;
      }
      evenTail = evenNode;
    } else {
      current = current.next;
    }
  }
  current.next = evenHead;
  return node;
};
