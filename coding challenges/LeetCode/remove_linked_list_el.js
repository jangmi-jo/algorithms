const removeElements = (head, val) => {
  // go through the list
  // if the head is val, set the head to the next
  // start looping
  // if the next one's val is target,
  // set this one's next to the next one's next
  // time: O(n), space: O(1)
  if (!head) { return head; }
  while (head && head.val === val) {
    head = head.next;
  }
  let pointer = head;
  while (pointer) {
    if (pointer.next && pointer.next.val === val) {
      pointer.next = pointer.next.next;
    } else {
      pointer = pointer.next;
    }
  }
  return head;
};
