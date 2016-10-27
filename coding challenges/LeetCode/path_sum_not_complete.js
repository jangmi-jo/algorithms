class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


const pathSum = (root, sum) => {
  // find the paths
  if (!root) { return 0; }
  let hash = new Map();
  hash.set(root, [root.val]);
  let queue = [root];
  let paths = root.val === sum ? 1 : 0;
  while (queue.length) {
    let current = queue.shift();
    let prevArr = hash.get(current).concat(0);
    if (current.left) {
      let left = prevArr.map((n) => {
        let temp = n + current.left.val;
        if (temp === sum) { paths++; }
        return temp;
      });
      hash.set(current.left, left);
      queue.push(current.left);
    }
    if (current.right) {
      let right = prevArr.map((n) => {
        let temp = n + current.right.val;
        if (temp === sum) { paths++; }
        return temp;
      });
      hash.set(current.right, right);
      queue.push(current.right);
    }
  }
  console.log(hash);
  console.log(paths);
};


const pathSum2 = (root, sum) => {
  let paths = 0;
  let sums = [root.val];
  let queue = [root];
  while (queue.length) {
    let current = queue.shift();
    if (current.left) { sums.push(current.val + current.left.val)}
  }
  // paths += pathSum2(root.left, sum);
  // paths += pathSum2(root.right, sum);
  return paths;
};

let a = new TreeNode(1);
// let b = new TreeNode(5);
// let c = new TreeNode(-3);
// let d = new TreeNode(3);
// let e = new TreeNode(2);
// let f = new TreeNode(11);
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

pathSum(a, 1);
