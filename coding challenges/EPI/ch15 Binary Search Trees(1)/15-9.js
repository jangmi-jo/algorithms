/*
build a minimum height BST from a sorted array

we want to make the middle one as root
and keep doing the same thing

*/

class Node {
  constructor(val) {
    this.val = val;
  }
}

const buildTree = (arr, s = 0, e = arr.length) => {
  // time: O(n) where n is the length of arr
  if (s >= e) { return; }
  let m = Math.floor((s + e) / 2);
  let node = new Node(arr[m]);
  if (s === e - 1) {
    return node;
  }
  node.left = buildTree(arr, s, m);
  node.right = buildTree(arr, m + 1, e);
  return node;
};

const e = [2, 3, 5, 7, 11, 13, 17, 19, 23];
console.log(buildTree(e));
