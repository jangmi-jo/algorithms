const intersect = (a, b) => {
  // if the arrays are sorted,
  // time: O(n) where n is shorter length
  // space: O(m) where m is the intersect nums
  let i = 0, j = 0;
  let res = [];
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      res.push(a[i]);
      i++;
      j++;
    } else if (a[i] > b[j]) {
      j++;
    } else {
      i++;
    }
  }
  return res;

  // Not sorted, time: O(a+b), space: O(n)
  // let map = new Map();
  // let res = [];
  // a.forEach((n) => {
  //   map.set(n, (map.get(n) || 0) + 1);
  // });
  // b.forEach((n) => {
  //   if (map.get(n) && map.get(n) >= 1) {
  //     res.push(n);
  //     map.set(n, map.get(n) - 1);
  //   }
  // });
  // return res;
};

console.log(intersect([1, 2, 2, 3, 4, 5], [2, 2, 3]));
