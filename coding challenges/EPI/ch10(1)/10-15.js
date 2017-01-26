/*
compute the exterior of a binary tree

keep the most left and the most right (both start from the root)
keep a result array starts with the root
traverse the tree depth first way
and when traverse, if the node is the most left node's left,
update most left node and push it to result
if the node doesn't have children, push it to the result
then, same thing to the right node as left node

the order matters since we do the depth first traverse,
if we do the above order, it will arrange nicely

*/

const a = require('./balanced_tree.js');

class Solution {
    // time: O(n) where n is the number of nodes
    constructor(root) {
        this.root = root;
        this.left = this.root;
        this.right = this.root;
        this.result = [root.val];
    }

    getExterior() {
        this.explore(this.root);
        return this.result;
    }

    explore(node) {
        if (!node) {
            return;
        }
        if (!node.left && !node.right) {
            this.result.push(node.val);
        } else {
            if (this.left && this.left.left === node) {
                this.left = node;
                this.result.push(node.val);
            }
        }
        this.explore(node.left);
        this.explore(node.right);
        if (this.right && this.right.right === node) {
            this.right = node;
            this.result.push(node.val);
        }
    }
}

const s = new Solution(a);
console.log(s.getExterior());
