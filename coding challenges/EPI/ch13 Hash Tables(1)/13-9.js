/*
find the longest subarray with distinct entries

given an array, return the length of a longest distinct subarray

keep a startIdx, length, a map
key as the element and value as the index of the element
go through the arr and put elements in map
when the element is already in map,
we can update the start index to the index + 1 in map
since we want to start new length from after the duplicate one
(only when the index is after the current start index)
and record the length if it's longer
*need to remember about the lasting length

*/

const longestSub = (arr) => {
  // time, space: O(n)
  let s = 0;
  let length = 0;
  const map = new Map();
  for (let i=0; i<arr.length; i++) {
    if (map.get(arr[i]) === undefined) {
      map.set(arr[i], i);
    } else {
      length = Math.max(i - s, length);
      if (map.get(arr[i]) >= s) {
        s = map.get(arr[i]) + 1;
        map.set(arr[i], i);
      }
    }
  }
  return Math.max(length, arr.length - s);
};

const e = 'fsfetwenweqasdfgh'.split(''); // 10
console.log(longestSub(e));
