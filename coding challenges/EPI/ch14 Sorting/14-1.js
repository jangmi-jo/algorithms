/*
compute the intersection of two sorted arrays

given two sorted arrays,
return a new intersection array
inputs may have duplicates
but output should be non-dup

keep a result array
use two pointers
start from both 0

if any is same as the one before, increment 1

compare a[0] and b[0] if they are same, add it to result and increment both
else, increment smaller one's pointer to the next

seems a bit messy.. feels like I can do better
but pass for today
*/

const intersection = (a, b) => {
  // time: O(a+b), space: O(res)
  const res = [];
  let i = 0;
  let j = 0;
  while (i < a.length - 1 || j < b.length - 1) {
    while (a[i-1] === a[i]) { i++; }
    while (b[j-1] === b[j]) { j++; }
    if (a[i] === b[j]) {
      res.push(a[i]);
      if (i < a.length - 1) { i++; }
      if (j < b.length - 1) { j++; }
    } else if (a[i] < b[j]) {
      i++;
    } else {
      j++;
    }
  }
  return res;
};


const a = [2, 3, 3, 5, 5, 6, 7, 7, 8, 12];
const b = [5, 5, 6, 8, 8, 9, 10, 10];
// res = [5, 6, 8]

console.log(intersection(a, b));
