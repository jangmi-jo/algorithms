/*
test for overlapping lists - cycle-free

given two singly linked lists
return false if there's no common node
return the first common node if there is

1) move the head pointer of the longer list the difference of those two lists
if there's same node, from then, the length of the rest should be same
2) move both head pointers one by one and check if they are same
3) if same, return that node

*/


const getLength = (start, fin) => {
  // inclusive
  let len = 1;
  while (start) {
    if (start === fin) { return len; }
    start = start.next;
    len++;
  }
};

const cycleFreeOverlappingLists = (a, b) => {
  // time: O(max(a, b))
  // space: O(1)
  a.length = getLength(a);
  b.length = getLength(b);
  [a, b] = [a, b].sort((x, y) => x.length - y.length);
  for (let i=0; i<b.length - a.length; i++) {
    b = b.next;
  }
  while (a && b) {
    if (a === b) { return a; }
    a = a.next;
    b = b.next;
  }
  return false;
};

module.exports = {cycleFreeOverlappingLists, getLength};
