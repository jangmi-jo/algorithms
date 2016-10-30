const containsNearbyDuplicate = (arr, k) => {
  // check if there are dup in k range
  // make a set push k things
  // if there is dup, return true
  // when there are k things, delete i - k index
  // time: O(n) where n is length of arr
  // space: O(k)
  if (k === 0) { return false; }
  let set = new Set();
  for (let i=0; i<arr.length; i++) {
    if (set.has(arr[i])) { return true; }
    if (set.size === k) { set.delete(arr[i-k]); }
    set.add(arr[i]);
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 4, 1], 2));
