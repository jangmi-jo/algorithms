const parens = (n) => {
  // O(n**2)
  if (n === 0) {
    let set = new Set();
    set.add('');
    return set;
  }
  let res = new Set();
  let prev = parens(n-1);
  prev.forEach((p) => {
    res.add('(' + p + ')');
    res.add('()' + p);
    res.add(p + '()');
  });
  return res;
};

console.log(parens(3));
