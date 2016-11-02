let hash = new Map();

const rob = (node) => {
  // this is too much..
  if (!node) { return 0; }
  let money = node.val;
  if (node.left) {
    if (hash.get(node.left.left) === undefined) {
      hash.set(node.left.left, rob(node.left.left));
    }
    if (hash.get(node.left.right) === undefined) {
      hash.set(node.left.right, rob(node.left.right));
    }
    money += hash.get(node.left.left) + hash.get(node.left.right);
  }
  if (node.right) {
    if (hash.get(node.right.left) === undefined) {
      hash.set(node.right.left, rob(node.right.left));
    }
    if (hash.get(node.right.right) === undefined) {
      hash.set(node.right.right, rob(node.right.right));
    }
    money += hash.get(node.right.left) + hash.get(node.right.right);
  }
  hash.set(node, money);
  if (hash.get(node.left) === undefined) {
    hash.set(node.left, rob(node.left));
  }
  if (hash.get(node.right) === undefined) {
    hash.set(node.right, rob(node.right));
  }
  return Math.max(hash.get(node.left) + hash.get(node.right), money);
};
