// arr of nums, target
// not duplicated numbers in arr sum to target

// 1) sort the arr => avoid duplicates
// 2) go through the arr
// 3) assume that we picked each number and recurse
// [10, 1, 2, 7, 6, 1, 5], 8
// [1, 1, 2, 5, 6, 7, 10]
// I suggested the pointers like foursum/ threesum..
// we can do that foursum/threesum with pointers
// because we know how many elements that we have to look.

const combinationSum2 = (arr, t) => {
  if (t === 0) {
    return [[]];
  }
  arr.sort((a, b) => a - b);
  let res = [];
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === arr[i-1]) { continue; }
    if (t - arr[i] >= 0) {
      let local = combinationSum2(arr.slice(i+1), t - arr[i]);
      local.forEach((j) => {
        res.push(j.concat(arr[i]));
      });
    }
  }
  return res;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
