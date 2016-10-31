// get the length first
// go through the linked list half way
// swap the next variables
// when we get to half, we can compare both ways

const isPalindrome = (head) => {
  // time: O(n), space: O(1)
  if (!head) { return true; }
  let len = 0;
  let pointer = head;
  while (pointer) {
    len++;
    pointer = pointer.next;
  }
  let next = null;
  for (let i=0; i<Math.floor(len/2); i++) {
    let temp = head.next;
    head.next = next;
    next = head;
    head = temp;
  }

  if (len % 2) { head = head.next; }
  for (let i=0; i<Math.floor(len/2); i++) {
    if (head.val !== next.val) { return false; }
    head = head.next;
    next = next.next;
  }
  return true;
};
