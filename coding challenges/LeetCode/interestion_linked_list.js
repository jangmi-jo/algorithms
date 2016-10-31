const getIntersectionNode = (a, b) => {
  // get length of both
  // for the longer one, move the pointer diff amount
  // compare from there
  // time: O(n) where n is the longer length
  // space: O(1)
  let aLen = getLength(a);
  let bLen = getLength(b);
  let diff = aLen - bLen;
  for (let i=0; i<Math.abs(diff); i++) {
    if (diff > 0) {
      a = a.next;
    } else {
      b = b.next;
    }
  }

  while (a && b) {
    if (a === b) {
      return a;
    }
    a = a.next;
    b = b.next;
  }
  return a;
};

const getLength = (node) => {
  let len = 0;
  while (node) {
    len++;
    node = node.next;
  }
  return len;
};
