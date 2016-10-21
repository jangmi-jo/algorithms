const twoSum = (arr, target) => {
  // time: O(n)
  // space: O(n)
  let targetMap = new Map();
  for (let i=0; i<arr.length; i++) {
    let findVal = targetMap.get(arr[i]);
    if (findVal !== undefined && findVal !== i) {
      return [i, findVal];
    }
    targetMap.set(target - arr[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
