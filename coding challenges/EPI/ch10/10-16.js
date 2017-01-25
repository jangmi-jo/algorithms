/*
compute the right sibling tree

use breadth first traverse
for each depth, get all nodes and set its nextLevel to the next node
*/

const a = require('./balanced_tree.js');

const setNextLevels = (root) => {
    // time, space: O(n)
    let queue = [root];
    while (queue.length) {
        const nextQueue = [];
        for (let i=0; i<queue.length; i++) {
            if (queue[i+1]) {
                queue[i].nextLevel = queue[i+1];
            }
            if (queue[i].left) {
                nextQueue.push(queue[i].left);
            }
            if (queue[i].right) {
                nextQueue.push(queue[i].right);
            }
        }
        queue = nextQueue;
    }
};

setNextLevels(a);
console.log(a);
