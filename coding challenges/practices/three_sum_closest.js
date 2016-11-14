// two pointers from start/end
// set diff and update if the other diff is smaller
// if there's the exact target, return t right away
// if not, since it's sorted,
// we can increment j if the sum is smaller than target
// else, decrement k


const threeSumClosest = (arr, t) => {
  // time: O(n**2), spcae: O(1)
  if (arr.length < 3) { return []; }
  arr.sort((a, b) => a - b);
  let diff;
  let res;
  for (let i=0; i<arr.length-2; i++) {
    if (arr[i] === arr[i - 1]) {
      continue;
    }
    let j = i+1;
    let k = arr.length - 1;
    while (j<k) {
      if (diff === undefined || Math.abs(t - (arr[i] + arr[j] + arr[k])) < diff) {
        diff = Math.abs(t - (arr[i] + arr[j] + arr[k]));
        res = arr[i] + arr[j] + arr[k];
      }
      if (arr[i] + arr[j] + arr[k] === t) {
        return t;
      } else if (arr[i] + arr[j] + arr[k] < t) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};
