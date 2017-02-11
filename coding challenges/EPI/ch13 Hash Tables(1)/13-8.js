/*
find smallest subarray sequentially covering all values

given two arrays of strings, return the same thing
the order matters in this one

*/

const smallestSub = (arr, keywords) => {
  const map = new Map();
  keywords.forEach((k) => {
    map.set(k, []);
  });
  arr.forEach((el, i) => {
    if (map.has(el)) {
      map.set(el, map.get(el).concat(i));
    }
  });
  const values = Array.from(map.values()).map((a) => ({ idxs: a, i: 0 }));
  let pair = [];
  let diff = arr.length;
  const last = keywords.length - 1;
  while (values[0].i < values[0].idxs.length) {
    for (let i=1; i<values.length; i++) {
      while (values[i].idxs[values[i].i] < values[i-1].idxs[values[i-1].i]) {
        values[i].i++;
      }
    }
    let start = values[0].idxs[values[0].i];
    let end = values[last].idxs[values[last].i];
    if (end - start < diff) {
      pair = [start, end];
      diff = end - start;
    }
    values[0].i++;
  }
  return pair;
};

const e = ['a', 'b', 'a', 'a', 'd', 'c', 'a', 'd', 'b', 'a', 'c', 'd'];
const s = ['b', 'c', 'd'];

console.log(smallestSub(e, s));
