/*
implement locking in a binary tree

keep a locked children field in node class
so locking/unlocking doesn't have to visit always all the way to leaves

didn't build the test case.

*/

class Node {
    constructor(val) {
        this.val = val;
        this.parent = undefined;
        this.left = undefined;
        this.right = undefined;
        this.lockedChildren = 0;
        this.locked = false;
    }

    lock() {
        // time: O(logn) height of the tree
        if (this.lockedChildren > 0 || this.locked) {
            return false;
        }

        let parent = this.parent;
        while (parent) {
            if (parent.locked) {
                return false;
            }
            parent = parent.parent;
        }

        this.changeParentLockCountBy(1);
        return true;
    }

    unlock() {
        // time: O(logn) height of the tree
        if (this.locked) {
            this.locked = false;
            this.changeParentLockCountBy(-1);
        }
    }

    isLocked() {
        return this.locked;
    }

    changeParentLockCountBy(amount) {
        let parent = this.parent;
        while (parent) {
            parent.lockedChildren += amount;
            parent = parent.parent;
        }
    }
}
