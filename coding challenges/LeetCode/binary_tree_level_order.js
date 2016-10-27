const levelOrder = (root) => {
  // time: O(n)
  if (!root) { return []; }
  let res = [];
  let queue = [root];
  while (queue.length) {
    let nextQueue = [];
    res.push(queue.map((n) => {
      if (n.left) { nextQueue.push(n.left);}
      if (n.right) { nextQueue.push(n.right);}
      return n.val;
    }));
    queue = nextQueue;
  }
  return res;
};
