// sort the array
// go through the arr
// for each el, t - el and run the two_sum
// two_sum takes O(n) using map,
// total running time is O(n**2)

// fourSum is same as threeSum

const threeSum = (arr, t) => {
  if (arr.length < 3) { return []; }
  arr.sort((a, b) => a - b);
  let res = [];

  for (let i=0; i<arr.length-2; i++) {
    if (arr[i] === arr[i - 1]) {
      continue;
    }
    let j = i+1;
    let k = arr.length - 1;
    while (j<k) {
      if (arr[i] + arr[j] + arr[k] === t) {
        res.push([arr[i], arr[j], arr[k]]);
        while (arr[j] === arr[j+1]) { j++; }
        while (arr[k] === arr[k-1]) { k--; }
        j++;
        k--;
      } else if (arr[i] + arr[j] + arr[k] < t) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};

console.log(threeSum([0, 0, 0, 0, 0, 0], 0));
