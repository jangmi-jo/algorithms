const removeNthFromEnd = (head, n) => {
  // time: O(n)
  // space: O(n)
  // we could do better with get length and go one more time
  // time: O(n), space: (1)
  if (!head) { return head; }
  let arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }
  if (arr.length === n) {
    arr[0].next = null;
    return arr[1] ? arr[1] : [];
  } else {
    arr[arr.length - n - 1].next = arr[arr.length - n + 1];
    return arr[0];
  }
};
