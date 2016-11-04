class Node {
  constructor(val) {
    // creates a singleton set x
    this.val = val;
  }
}

const makeSet = (x) => {
  // using tree structure to build DisjointSet
  let set = new Node(x);
  set.parent = set;
  set.rank = 0;
  return set;
};

const find = (x) => {
  // time: O(logn) where n is the depth of the tree
  return x.parent === x ? x : find(x.parent);
};

const union = (x, y) => {
  // merges two sets containing x and y
  let rootX = find(x);
  let rootY = find(y);
  if (rootX !== rootY) {
    if (rootX.rank < rootY.rank) {
      rootX.parent = rootY;
    } else if (rootX.rank > rootY.rank) {
      rootY.parent = rootX;
    } else {
      rootY.parent = rootX;
      rootX.rank++;
    }
  }
};

module.exports = { makeSet, find, union };
