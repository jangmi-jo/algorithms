/*
the most visited pages problem
given an array, find the k most visited elements

build a bst
go through the arr
find each element
if it is there, increment the count
update the position
if it is not there, insert the element with count 1

this has to be self-balancing bst
or else, it will lose the advantage of time complexity O(k + log(distinct keys))

didn't build test case and self-balancing tree
*/

const mostVisited = (arr, k) => {
  const balancedBST = new BinarySearchTree((a, b) => b.count - a.count);
  arr.forEach((el) => {
    let node = balancedBST.find(el);
    if (node) {
      balancedBST.delete(el);
    }
    balancedBST.insert({el: el, count: (node ? node.count : 0) + 1});
  });
  return balancedBST.inOrder().slice(k);
};
