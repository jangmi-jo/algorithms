
const generateParenthesis = (n) => {
  if (n === 0) {
    let empty = new Set();
    empty.add('');
    return empty;
  }
  let res = new Set();
  let prev = generateParenthesis(n - 1);
  prev.forEach((p) => {
    res.add(p + '()');
    res.add('(' + p + ')');
    res.add('()' + p);
  });
  return Array.from(res);
};

console.log(generateParenthesis(3));
