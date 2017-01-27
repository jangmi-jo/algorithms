/*
lowest common ancestor when we have parent pointer

it's same as find common node in singly linked list
1) get the both node's depth to the root
2) move up the longer one by diff of depth
3) from there, go up by one both node pointer and find same one

** I'm not going to build test case

*/

const getDepth = (node) => {
  let d = 0;
  while (node) {
    d++;
    node = node.parent;
  }
  return d;
};

const lowestCommonAncestor = (a, b) => {
  // time: O(longer depth in a and b)
  // space: O(1)
  let aDepth = getDepth(a);
  let bDepth = getDepth(b);
  if (aDepth > bDepth) {
    [a, b] = [b, a];
    [aDepth, bDepth] = [bDepth, aDepth];
  }
  for (let i=0; i<bDepth - aDepth; i++) {
    b = b.parent;
  }
  while (a !== b) {
    a = a.parent;
    b = b.parent;
  }
  return a;
};
