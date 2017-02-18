/*
find the k largest in bst
given a root of tree and an integer, k

first we need to go all the way to right
if we use recursion, we don't have to loop multiple times
when the current node doesn't have right node,
return the node itself in an array
(because we call the function with right node if there is right node)
that would be the largest node in tree
if current node has a right node,
we call the function with right node
then see if the result's length is same as k
if it is, don't do anything and just return the res
but if it is not, add the current node because it is the next largest
after that, if we have left node and still have more room in result,
call function with left and decreased k
and add the result in current result
finally we will have the right result

*/


const root = require('./bst_example.js');

const findKLargest = (node, k) => {
  // time: O(logn) where n is the number of nodes
  if (!node) { return []; }
  if (node.right) {
    let res = findKLargest(node.right, k);
    if (res.length === k) {
      return res;
    } else {
      res.push(node);
      if (node.left && res.length < k) {
        res = res.concat(findKLargest(node.left, k - res.length));
      }
      return res;
    }
  } else {
    return [node];
  }
};

const result = findKLargest(root, 5);
result.forEach((el) => {
  console.log(el.val);
});
