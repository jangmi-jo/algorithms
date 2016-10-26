

const reverseList = (head) => {
  // draw picture to visualize
  // see what I have to change
  // time: O(n) where n is the length of the list
  // space: O(1)
  let prev = null, next;
  while (head.next) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return head;
};
