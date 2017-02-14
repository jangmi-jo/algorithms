/*
merging intervals
the intervals are disjoint set already

when we find any collided interval, update the new interval
and when we find the proper position for the new interval,
add it in the result
*/

const mergingIntervals = (arr, t) => {
  // time, space: O(n) where n is the length of arr
  const res = [];
  for (let i=0; i<arr.length; i++) {
    if (t && t[1] < arr[i][0]) {
      res.push(t);
      t = undefined;
    }
    if (!t || arr[i][0] > t[1] || arr[i][1] < t[0] ||
        t[0] > arr[i][1] || t[1] < arr[i][0]) {
      // didn't collide
      res.push(arr[i]);
    } else {
      t[0] = Math.min(arr[i][0], t[0]);
      t[1] = Math.max(arr[i][1], t[1]);
    }
  }
  if (t) { res.push(t); }
  return res;
};

const e = [[-4, -1], [0, 2], [3, 6], [7, 9], [11, 12], [14, 17]];
const added = [-7, -5];

console.log(mergingIntervals(e, added));
