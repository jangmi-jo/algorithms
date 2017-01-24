/*
reconstruct a binary tree from a preorder with markers

1) make the first char as root
2) we need left and right subtree from the rest of the string
3) use helper function that returns those
4) in helper function, get the left subtree first
5) if the first el is not null, make that as node and recurse to get that node's left and right
6) if the first el is null, increase the starting index
7) I used s as starting index to reduce space complexity
otherwise, I had to pass new string or array. That way, I just pass reference of the original array
8) in the main function, set those returned values as left, right

*/


class Node {
    constructor(val) {
        this.val = val;
    }
}

const getNode = (arr, s) => {
    let node;
    if (arr[s]) {
        node = new Node(arr[s]);
        [node.left, node.right, s] = leftRightNodes(arr, s + 1);
    } else {
        s++;
    }
    return [node, s];
};

const leftRightNodes = (arr, s) => {
    if (s === arr.length - 1) {
        // this will not happen if the input is valid tree
        return [undefined, undefined, s];
    }
    let left;
    let right;
    [left, s] = getNode(arr, s);
    [right, s] = getNode(arr, s);
    return [left, right, s];
};

const reconstruct = (arr) => {
    // time: O(n) where n is the length of the arr
    // space: O(logn) because of the recursion call stack
    if (arr.length === 0) {
        return;
    }
    const root = new Node(arr[0]);
    [root.left, root.right] = leftRightNodes(arr, 1);
    return root;
};

console.log(reconstruct(['H', 'B', 'F', null, null, 'E', 'A', null, null, null, 'C', null, 'D', null, 'G', 'I', null, null, null]));
