// use pre-order
// in-order, post-order will give us sorted order which is not useful in this case

const preOrder = (node) => {
  if (!node) { return null; }
  let res = [];
  res.push(node);
  if (node.left || node.right) {
    res = res.concat(preOrder(node.left));
    res = res.concat(preOrder(node.right));
  }
  return res;
};

const checkSubtree = (a, b) => {
  let aArr = preOrder(a);
  let bArr = preOrder(b);
  let startIdx = aArr.indexOf(bArr[0]);
  if (startIdx === -1) { return false; }
  for (let i=0; i<bArr.length; i++) {
    if (aArr[i+startIdx] !== bArr[i]) {
      return false;
    }
  }
  return true;
};
