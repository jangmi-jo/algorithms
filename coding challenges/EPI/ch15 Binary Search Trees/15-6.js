/*
find the closest entries in three sorted arrays
given three sorted arrays
return one each from the arrays
to make smallest interval

keep three pointers
record the interval and save entries if we find smaller one
move the smallest one's pointer one

*/

const closestEntries = (a, b, c) => {
  // time: O(a+b+c), space: O(1)
  const indices = [0, 0, 0];
  let res = [];
  let interval;
  while (indices[0] < a.length ||
         indices[1] < b.length ||
         indices[2] < c.length) {
    const entry = [a[indices[0]], b[indices[1]], c[indices[2]]];
    let int = Math.abs(entry[0] - entry[1]) + Math.abs(entry[1] - entry[2]) + Math.abs(entry[0] - entry[2]);
    if (interval === undefined || interval > int) {
      interval = int;
      res = entry;
    }
    let temp = [];
    if (indices[0] < a.length) { temp.push([entry[0], 0]); }
    if (indices[1] < b.length) { temp.push([entry[1], 1]); }
    if (indices[2] < c.length) { temp.push([entry[2], 2]); }
    temp.sort((x, y) => x[0] - y[0]);
    indices[temp[0][1]]++;
  }
  return res;
};

console.log(closestEntries([5, 10, 15], [3, 6, 9, 12, 15], [8, 16, 24]));
