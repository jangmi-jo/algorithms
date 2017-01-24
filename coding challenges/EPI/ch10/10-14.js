/*
form a linked list from the leaves of a binary tree

use depth first algorithm and traverse the tree
record when the node has no children

*/

const tree = require('./10-13.js');

class Solution {
    // time: O(n) where n is the number of nodes
    constructor(root) {
        this.root = root;
        this.leaves = [];
    }

    dfs() {
        this.explore(this.root);
    }

    explore(node) {
        if (!node) {
            return;
        }
        if (!node.left && !node.right) {
            this.leaves.push(node);
        }
        this.explore(node.left);
        this.explore(node.right);
    }
}

const s = new Solution(tree);
s.dfs();
console.log(s);
