// minimal tree
// given a sorted array(increasing) uniq integers
// create BST with minimal height

class Node {
  constructor(val) {
    this.val = val;
    this.left = undefined;
    this.right = undefined;
  }
}

const minimalTree = (arr, sIdx, size) => {
  // time: O(n) where n is length of arr
  // space: O(n)
  if (size <= 0) {
    return;
  } else if (size === 1) {
    return new Node(arr[sIdx]);
  }
  let mid = sIdx + Math.floor(size / 2);
  let newNode = new Node(arr[mid]);
  let leftLen = Math.floor(size / 2);
  let rightLen = size - leftLen - 1;
  newNode.left = minimalTree(arr, sIdx, leftLen);
  newNode.right = minimalTree(arr, mid + 1, rightLen);
  return newNode;
};

let test = [1, 2, 3, 4, 5];
console.log(minimalTree(test, 0, test.length));
