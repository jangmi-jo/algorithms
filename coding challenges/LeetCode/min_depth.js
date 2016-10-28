const minDepthDFS = (root) => {
  // DFS way, O(n) where n is the number of nodes
  if (!root) { return 0; }
  // return 1 only if it is leaf
  if (!root.left && !root.right) {
    return 1;
  }
  let depths = [];
  // consider the depth only the child exists
  if (root.left) { depths.push(minDepth(root.left)); }
  if (root.right) { depths.push(minDepth(root.right)); }
  return Math.min(...depths) + 1;
};

const minDepth = (root) => {
  if (!root) { return 0; }
  // BFS should be faster
  // O(d) where d is the shortest depth
  let depth = 1;
  let queue = [root];
  while (queue.length) {
    let nextQueue = [];
    for (let i=0; i<queue.length; i++) {
      if (!queue[i].left && !queue[i].right) {
        return depth;
      }
      if (queue[i].left) { nextQueue.push(queue[i].left); }
      if (queue[i].right) { nextQueue.push(queue[i].right); }
    }
    depth++;
    queue = nextQueue;
  }
};
