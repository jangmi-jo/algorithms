const hasCycleWithExtraSpace = (head) => {
  // with extra space
  let visited = new Map();
  while (head) {
    if (visited.get(head)) {
      return true;
    }
    visited.set(head, true);
    head = head.next;
  }
  return false;
};

const hasCycle = (head) => {
  // without extra space
  // time: O(n)
  if (!head) { return false; }
  let a = head, b = head;
  while (a && b) {
    a = a.next;
    if (b.next) {
      b = b.next.next;
    } else {
      return false;
    }
    if (a === b) { return true; }
  }
  return false;
};
