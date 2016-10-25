const intersection = (a, b) => {
  // time: O(a+b)
  // space: O(a+b)
  let map = new Map();
  let res = new Set();
  a.forEach((n) => {
    map.set(n, true);
  });
  b.forEach((n) => {
    if (map.get(n)) {
      res.add(n);
    }
  });
  return Array.from(res);
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
