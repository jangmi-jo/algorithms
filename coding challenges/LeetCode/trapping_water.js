const trap = (arr) => {
  // time: O(n)
  // space: O(n)
  let left = new Array(arr.length);
  let right = new Array(arr.length);
  let lMax = arr[0], rMax = arr[arr.length - 1];
  for (let i=0; i<arr.length; i++) {
    lMax = Math.max(arr[i], lMax);
    rMax = Math.max(arr[arr.length - 1 - i], rMax);
    left[i] = lMax;
    right[arr.length - 1 - i] = rMax;
  }
  let res = 0;
  for (let i=0; i<arr.length; i++) {
    res += Math.min(left[i], right[i]) - arr[i];
  }
  return res;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
