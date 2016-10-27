const swapPairs = (head) => {
  // could do this with one pointer but using two makes it more readable for me.
  // time: O(n) where n is the length
  // space: O(1)
  if (!head) { return head; }
  let newHead = head.next;
  let prev = null;
  let a = head;
  let b = head.next;
  while (a && b) {
    a.next = b.next;
    b.next = a;
    if (prev) {
      prev.next = b;
    }
    prev = a;
    a = a.next;
    b = a.next;
  }
  return newHead ? newHead : head;
};
