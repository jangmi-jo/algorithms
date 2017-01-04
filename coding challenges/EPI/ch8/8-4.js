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

const overlappingLists = (a, b) => {
  // DIDN'T implement test case but it should work
  // time: O(longer length in a and b)
  // space: O(1)
  [a, b] = [a, b].sort((x, y) => x.length - y.length);
  let [aHead, bHead] = [a.head, b.head];
  for (let i=0; i<b.length - a.length; i++) {
    bHead = bHead.next;
  }
  while (aHead && bHead) {
    if (aHead === bHead) { return aHead; }
    aHead = aHead.next;
    bHead = bHead.next;
  }
  return false;
};
