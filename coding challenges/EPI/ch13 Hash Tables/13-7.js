/*
find the smallest subarray covering all values
given an array of strings and a set of strings
return the starting and ending index of a shortest subarray of given array that covers the set

build a map with key as str from set, value as array of indices
get the values and sort them by first element
get the min and max and record it
from the first array, shift
and repeat the process until any of the array is empty

[1, 8], [5, 10], [4, 7, 11] => [1, 5]
[8], [5, 10], [4, 7, 11] => [4, 8]
[8], [5, 10], [7, 11] => [5, 8]
...

*/

const smallestSub = (arr, set) => {
  const map = new Map();
  arr.forEach((el, i) => {
    if (set.has(el)) {
      map.set(el, (map.get(el) || []).concat(i));
    }
  });
  if (map.size < set.size) {
    // means the arr lacks any of the strings from set
    return false;
  }
  const values = Array.from(map.values());
  const last = set.size - 1;
  let pair = [];
  let diff = arr.length;
  while (values[0].length) {
    values.sort((a, b) => a[0] - b[0]);
    let newDiff = values[last][0] - values[0][0];
    if (newDiff < diff) {
      pair = [values[0][0], values[last][0]];
      diff = newDiff;
    }
    values[0].shift();
  }
  return pair;
};

const e = ['a', 'b', 'a', 'a', 'd', 'c', 'a', 'd', 'b', 'a', 'c', 'd'];
const s = new Set(['b', 'c', 'd']);

console.log(smallestSub(e, s));
