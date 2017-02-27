/*
reconstruct a BST from traversal data
given the inorder traversal sequence,
all keys are distinct
is it possible to solve?

inorder
[2, 3, 4, 5, 6, 7, 8]
no, it is not.
inorder traversal would be always same for the same keys
with any root of those keys

preorder
[5, 3, 2, 4, 7, 6, 8]
it is possible.
start from beginning,
it's always the root of left subtree
if it's not bigger than the one before
when it is bigger, we know it's the root of right subtree

postorder
[2, 4, 3, 6, 8, 7, 5]
it is possible.
same thing from the back as preorder
*/

class Node {
  constructor(val) {
    this.val = val;
  }
}

const reconstructPreorder = (arr, i=0) => {
  if (i === arr.length) {
    return [undefined, ];
  }
  const node = new Node(arr[i]);
  let left, right;
  if (arr[i+1] < arr[i]) {
    [left, i] = reconstructPreorder(arr, i+1);
    node.left = left;
  }
  // how could we know if we violated the parent's parent?
  // we could save the parents but I don't think that's the best way
  // we can think about it more
  [right, i] = reconstructPreorder(arr, i+1);
  node.right = right;
  return [node, i];
};

console.log(reconstructPreorder([5, 3, 2, 4, 7, 6, 8]));
