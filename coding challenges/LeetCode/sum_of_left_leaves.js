
const sumOfLeftLeaves = (root) => {
  // BFS and find the left leaf
  // time: O(n) where n is the nodes
  // Feels like I can do better..
  let queue = [root];
  let res = 0;
  while (queue.length) {
    let c = queue.shift();
    if (c !== null) {
      queue.push(c.left);
      queue.push(c.right);

      if (c.left && c.left.left === null && c.left.right === null) {
        res += c.left.val;
      }
    }
  }
  return res;
};
