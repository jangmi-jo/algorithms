
// since it's linked list,
// once we set a pointer to the last el,
// link the last one to head
// move k times,
// make the next null
// for those cases that k is bigger than the list,
// mod it by length

const rotateRight = (head, k) => {
  // time: O(N) where N is the length of the list
  // k doesn't matter because we run this k % length times
  if (!head) {return head;}
  let last;
  let len = 0;
  let current = head;
  while (current) {
    last = current;
    len++;
    current = current.next;
  }
  k = k % len;
  last.next = head;
  for (let i=0; i<len - k; i++) {
    last = last.next;
  }
  let newHead = last.next;
  last.next = null;
  return newHead;
};
