/*
compute the union of intervals

given sets of intervals with integer endpoints
the problem says that it could be inclusive or exclusive for both ends
but I don't think that matters so much in this problem
so I'm going to solve it as if it is both inclusive

keep a counter start from 0
we can sort the array by starting
go through the array and if one and the next one is collapsing,
we make the next one as combined one
when it's not collapsing, update the arr[counter] to the current
and increment counter
when we are done with the array,
pop arr.length - counter from the array
and return the array

*/

const isCollapsed = (a, b) => {
  return !(!b || a[1] < b[0] || b[1] < a[0]);
};

const unionIntervals = (arr) => {
  // time: O(nlogn), space: O(1)
  arr.sort((a, b) => a[0] - b[0]);
  let c = 0;
  for (let i=0; i<arr.length; i++) {
    if (isCollapsed(arr[i], arr[i+1])) {
      arr[i+1][0] = Math.min(arr[i][0], arr[i+1][0]);
      arr[i+1][1] = Math.max(arr[i][1], arr[i+1][1]);
    } else {
      arr[c] = arr[i];
      c++;
    }
  }
  while (c < arr.length) { arr.pop(); }
  return arr;
};

const e = [[0, 3], [1, 1], [2, 4], [3, 4], [5, 7], [7, 8],
           [8, 11], [9, 11], [12, 14], [12, 16], [13, 15], [16, 17]];

console.log(unionIntervals(e));
