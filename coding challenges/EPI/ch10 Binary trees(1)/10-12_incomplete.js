/*
reconstruct binary tree from traversal data

come back to it later
seems like recursion would work great

*/

class Node {
    constructor(val) {
        this.val = val;
    }
}

const reconstruct = (inorder, preorder) => {
    const map = {};
    for (let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i;
    }
    const root = new Node(preorder[0]);
    let c = root;
    for (let i = 1; i < preorder.length; i++) {
        console.log('-------------------');
        console.log(`current: ${c.val}, ${map[c.val]}`);
        console.log(`new: ${preorder[i]}: ${map[preorder[i]]}`);
        console.log(root);
        console.log('-------------------');
        if (map[preorder[i]] < map[c.val]) {
            c.left = new Node(preorder[i]);
            c.left.parent = c;
            c = c.left;
        } else {
            while (c.parent &&
                map[c.parent.val] < map[preorder[i]]) {
                c = c.parent;
            }
            c.right = new Node(preorder[i]);
            c.right.parent = c;
            c = c.right;
        }
    }
    return root;
};

const inOrder = 'fbaehcdig'.toUpperCase();
const preOrder = 'hbfeacdgi'.toUpperCase();

console.log(reconstruct(inOrder, preOrder));
