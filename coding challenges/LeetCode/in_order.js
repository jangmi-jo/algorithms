const inorderTraversal = (node) => {
  if (!node) { return []; }
  let res = [];
  res = res.concat(inorderTraversal(node.left));
  res.push(node.val);
  res = res.concat(inorderTraversal(node.right));
  return res;
};

const preorderTraversal = (node) => {
  if (!node) { return []; }
  let res = [];
  res.push(node.val);
  res = res.concat(preorderTraversal(node.left));
  res = res.concat(preorderTraversal(node.right));
  return res;
};
