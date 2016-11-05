class TreeNode() {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const sortedArrayToBST = (arr, s = 0, e = arr.length - 1) => {
  // time: O(n) where n is the length of arr
  if (s === e) {
    return new TreeNode(arr[s]);
  } else if (s > e) {
    return null;
  }
  let mid = Math.floor((s + e) / 2);
  let node = new TreeNode(arr[mid]);
  node.left = sortedArrayToBST(arr, s, mid-1);
  node.right = sortedArrayToBST(arr, mid+1, e);
  return node;
};

console.log(sortedArrayToBST([1, 2, 3, 4, 5]));
