

const merge = (a, m, b, n) => {
  let lastIdx = m + n - 1;
  let aLast = m - 1;
  let bLast = n - 1;
  while (b.length) {
    if (a[aLast] > b[bLast]) {
      a[lastIdx] = a[aLast];
      aLast--;
    } else {
      a[lastIdx] = b.pop();
      bLast--;
    }
    lastIdx--;
  }
};
