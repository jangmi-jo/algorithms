/*
find the min and max simultaneously
given an array, get min, max without comparing 2(n-1) times

compare first two element
now we have initial min, max
compare next two elements then compare new min with old min
compare new max with old max
repeat

*/


const minmax = (arr) => {
  let i = arr.length % 2 ? 3 : 2;
  const init = arr.slice(0, i);
  init.sort((a, b) => a - b);
  let [min, max] = [init[0], init[init.length - 1]];
  while (i < arr.length) {
    let [x, y] = [arr[i], arr[i+1]].sort((a, b) => a - b);
    min = min > x ? x : min;
    max = max < y ? y : max;
    i += 2;
  }
  return [min, max];
};

const e = [3, 2, 1, 5, 4];

console.log(minmax(e));
