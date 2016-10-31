const bsearch = (arr, s, e, target) => {
  if (s > e) { return -1; }
  let mid = Math.floor((s + e) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    let res = bsearch(arr, mid+1, e, target);
    return res !== -1 ? res: -1;
  } else {
    return bsearch(arr, s, mid - 1, target);
  }
};

const twoSum = (arr, target) => {
  // time: O(nlogn), space: O(1)
  for (let i=0; i<arr.length; i++) {
    let res = bsearch(arr, i+1, arr.length - 1, target - arr[i]);
    if (res !== -1) {
      return [i+1, res+1];
    }
  }
};

let a = [2, 7, 11, 15];
console.log(twoSum(a, 9));
