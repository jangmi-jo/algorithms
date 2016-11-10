// not abs(a[i] - a[j]) > abs(i - j)
// dynamic programming
// we need to check every pair
// and pick the maximum

const pickNum = (arr) => {
  let res = [1];
  for (let i=1; i<arr.length; i++) {
    let max = 1;
    for (let j=i-1; j>=0; j--) {
      if (Math.abs(arr[i] - arr[j]) <= i - j) {
        max = res[j] + 1 > max ? res[j] + 1 : max;
      }
    }
    res.push(max);
  }
  return Math.max(...res);
};

console.log(pickNum([13, 5, 4, 16, 15]));
