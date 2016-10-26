const deleteDuplicates = (head) => {
  // time: O(n) where n is the length of the list
  // space: O(1)
  let current = head;
  while (current) {
    // delete next link when next link exists,
    // the next link's value is same as current value
    // go to the next link only if the values are not same
    // (or next link is null)
    if (current.next && current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
