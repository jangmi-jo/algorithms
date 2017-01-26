/*
implement an inorder traversal with O(1) space

1) do the algorithm until we have no more nodes left
2) see if the node has left node
3) if it does, move to left
4) if it doesn't, process the node (here, we just logged)
5) see if it has right node
6) if it does, move to right
7) if it doesn't, see if it's right child of its parent
8) if it is, move up until the node is left child
9) process the parent and move to right

*/

const f = require('./tree-traversal-sample.js');

const inOrder = (node) => {
    // time: O(n), space: O(1)
    while (node) {
        if (node.left) {
            node = node.left;
        } else {
            console.log(node.val);
            if (node.right) {
                node = node.right;
            } else {
                if (node.parent && node.parent.right === node) {
                    while (node.parent && node.parent.left !== node) {
                        node = node.parent;
                    }
                }
                node = node.parent;
                console.log(node.val);
                node = node.right;
            }
        }
    }
};

inOrder(f);
