// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// target = 5
// if the arr[0] === target
// i = 0
// 2**i
// i++

const solution = (isBadVersion) => {
  let search = (n) => {
    // time: O(n)
    if (n === 1) { return 1; }
    let i = 1;
    let start;
    while (!start && Math.pow(2, i) <= n) {
      if (isBadVersion(Math.pow(2, i))) {
        start = Math.pow(2, i-1);
      } else {
        i++;
      }
    }
    start = start ? start: Math.pow(2, i-1);
    for (let j=start; j<=n; j++) {
      if (isBadVersion(j)) { return j; }
    }
  };
  return search;
};
