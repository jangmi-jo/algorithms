const isSymmetric = (root) => {
  // left queue, right queue
  // compare reversed order
  // time: O(n) where n is the number of all nodes
  // space: O(n)
  if (!root) { return true; }
  let leftQueue = [root.left];
  let rightQueue = [root.right];
  let i = 0;
  while (i < leftQueue.length) {
    if ((leftQueue[i] && !rightQueue[i]) ||
        (!leftQueue[i] && rightQueue[i]) ||
        leftQueue[i] && rightQueue[i] && leftQueue[i].val !== rightQueue[i].val) {
          return false;
    }
    if (leftQueue[i]) {
      leftQueue.push(leftQueue[i].left);
      leftQueue.push(leftQueue[i].right);
      rightQueue.push(rightQueue[i].right);
      rightQueue.push(rightQueue[i].left);
    }
    i++;
  }
  return true;
};
