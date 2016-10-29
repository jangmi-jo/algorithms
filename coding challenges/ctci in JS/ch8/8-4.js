const powerSet = (set) => {
  // time: O(n*2**n)
  if (set.size === 0) {
    let base = new Set();
    base.add(set);
    return base;
  }
  let arr = [...set];
  let first = arr[0];
  set.delete(first);
  let prev = powerSet(set);
  let next = new Set();
  prev.forEach((s) => {
    let n = new Set(s);
    n.add(first);
    next.add(n);
  });
  next.forEach((n) => {
    prev.add(n);
  });
  return prev;
};
