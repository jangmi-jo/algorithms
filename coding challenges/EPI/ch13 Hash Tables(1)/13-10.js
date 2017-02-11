/*
find the length of a longest contained interval

build a set
go through the arr again and look up each el's next in set
will take time, space : O(n)

*/

const longestInterval = (arr) => {
  const set = new Set(arr);
  let longest = 0;
  arr.forEach((el) => {
    let s = el;
    let e = el;
    while (set.has(s - 1) || set.has(e + 1)) {
      if (set.has(s - 1)) {
        set.delete(s);
        s--;
      }
      if (set.has(e + 1)) {
        set.delete(e);
        e++;
      }
    }
    longest = Math.max(longest, e - s + 1);
  });
  return longest;
};

const e = [10, 5, 3, 11, 6, 100, 4];

console.log(longestInterval(e));
