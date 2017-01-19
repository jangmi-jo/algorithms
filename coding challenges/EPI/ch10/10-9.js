/*
compute kth node in an inorder traversal
nodes have the number of nodes in subtree rooted at that node

1) start from root
2) see the left node's number, compare with k
3) if k is smaller, we move to left
4) if not, move to right with the k - left num as target
like bsearch

DIDN'T BUILD TEST CASE
*/

const kthNode = (root, k) => {
  // time, space: O(logn)
  if (!root || k < 1) { return false; }
  if (root.left.num === k) {
    return root.left;
  } else if (root.left.num < k) {
    return kthNode(root.right, k - root.left.num);
  } else {
    return kthNode(root.left, k);
  }
};
