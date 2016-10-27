const rob = (arr) => {
  // DP
  // time: O(n), space: O(n)
  let res = [];
  for (let i=0; i<arr.length; i++) {
    if (i === 0) {
      res.push(arr[i]);
    } else if (i === 1) {
      res.push(Math.max(arr[0], arr[1]));
    } else {
      res.push(Math.max(res[i-2] + arr[i], res[i-1]));
    }
  }
  return res.length ? res[res.length - 1] : 0;
};
