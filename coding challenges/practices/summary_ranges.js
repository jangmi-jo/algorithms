// since input is sorted and no duplicates,
// we can go through the arr
// get the range for each, when the next one is not consecutive,
// add it to the result

const summaryRanges = (arr) => {
  // time: O(n)
  // space: O(res)
  let res = [];
  let s = arr[0], e = arr[0];
  for (let i=1; i<=arr.length; i++) {
    if (e + 1 === arr[i]) {
      e++;
    } else {
      res.push(s === e ? `${s}` : `${s}->${e}`);
      s = arr[i];
      e = arr[i];
    }
  }
  return res;
};

console.log(summaryRanges([]));
