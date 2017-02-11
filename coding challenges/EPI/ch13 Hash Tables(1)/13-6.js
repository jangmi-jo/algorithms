/*
find the nearest repeated entries in an array

given an array
find distance between a closest pair of equal entries

keep a diff = arr.length, map
go through the array
if the str already exists in map, see the diff between value and the new index
if the new diff is smaller than the diff, update it
set in map key as str, and index as value

*/

const findNearest = (arr) => {
  // time, space: O(n)
  const map = new Map();
  let diff = arr.length;
  arr.forEach((el, i) => {
    let lastIdx = map.get(el);
    if (lastIdx !== undefined) {
      diff = Math.min(diff, i - lastIdx);
    }
    map.set(el, i);
  });
  return diff;
};

console.log(findNearest("All work and no play makes for no work no fun and no results".split(' ')));
