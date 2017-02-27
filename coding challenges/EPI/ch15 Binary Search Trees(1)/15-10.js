/*
insertion and deletion in BST
both operations time: O(height of tree)
which is O(logn) when the tree is balanced
in non_dup_bst.js

both are done with recursion and binary search mechanism
see the root
go to left/right
keep doing that until find the right place

deletion is more difficult
it needs 4 cases when we get the target key
the important part in here is it works with return value
need to think of stack and the bottom stacks stay there
until upper ones return the value
1) the target node has both children
  delete the right subtree's minimum and return the node
2) has left child
  return the left child
3) has right child
  return the right child
4) no child
  return undefined
then we get this returned value
and assign to the right place in the lower stack
(when the target is smaller or bigger,
we assign node's left or right to the recursive function call)
that basically replace the target node with anything we returned
so the target node will be deleted

*/
