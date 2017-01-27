/*
test for overlapping lists - may have cycle

for this, we can use both of 8-3 and 8-4 solutions.
first we check both lists if they have cycle
if no cycle, use 8-4 solution
if one of them has cycle, there's no way there could be overlapping nodes
if both of them has cycle,
  if the starting cycle nodes are same, get the longer list, move longer one's pointer forward by difference (like 8-4)
  if not, get the difference of two cycles move one pointer by difference (like 8-3)

We could do that with time O(a+b), additional space: O(1)
or we could do with time(a+b), additional space: O(a+b) with set/map
*/

const {cycleLength, testCyclicity} = require('./8-3.js');
const {cycleFreeOverlappingLists, getLength} = require('./8-4.js');


const getFirstNode = (a, b, len) => {
  for (let i=0; i<len; i++) { b = b.next; }
  while (a !== b) {
    a = a.next;
    b = b.next;
  }
  return a;
};

const overlappingLists = (a, b) => {
  let aCycle = testCyclicity(a);
  let bCycle = testCyclicity(b);
  if (aCycle && bCycle) {
    if (aCycle === bCycle) {
      // just end the cycle there and do the cycleFree check
      aCycle.next = undefined;
      return cycleFreeOverlappingLists(a, b);
    } else {
      // make two lists same length (before cycle starting)
      let aLen = getLength(a, aCycle);
      let bLen = getLength(b, bCycle);
      let diff =  aLen - bLen;
      if (diff > 0) {
        while (diff > 0) {
          a = a.next;
          diff--;
        }
      } else {
        while (diff < 0) {
          b = b.next;
          diff++;
        }
      }
      return getFirstNode(a, b, cycleLength(aCycle));
    }
  } else if (aCycle || bCycle) {
    return false;
  } else {
    return cycleFreeOverlappingLists(a, b);
  }
};
