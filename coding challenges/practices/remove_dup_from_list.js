// idea: keep last, current, next
// keep newHead, newLast
// if all three are different,
// put the current into the new List
// update the current.next to undefined


const deleteDuplicates = (head) => {
  // time: O(n) where n is the length of list
  // space: O(1) since we used existing ListNodes
  if (!head) { return head; }
  let newHead, newLast;
  let last = new ListNode(null), current = head, next = head.next || new ListNode(null);
  while (current.val !== null) {
    if (last.val !== current.val && current.val !== next.val) {
      if (newHead) {
        newLast.next = current;
        newLast = current;
      } else {
        newHead = current;
        newLast = current;
      }
      current.next = null;
    }
    last = current;
    current = next;
    next = next.next ? next.next : new ListNode(null);
  }
  return newHead ? newHead : [];
};
