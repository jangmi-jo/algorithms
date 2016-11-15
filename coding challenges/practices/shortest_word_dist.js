// how about make a map with key as word, value as indexes
// get two words, get the closest pair in those two


const shortestWordDist = (arr, a, b) => {
  // time, space: O(n)
  let map = new Map();
  arr.forEach((w, i) => {
    map.set(w, (map.get(w) || []).concat(i));
  });
  // it is sorted indexes
  // start from both 0, set the diff
  // if a is smaller, move a pointer
  // if b is smaller, move b pointer
  let aIdxs = map.get(a);
  let bIdxs = map.get(b);
  let i = 0, j = 0;
  let dist = arr.length;
  while (i < aIdxs.length && j < bIdxs.length) {
    dist = Math.min(dist, Math.abs(aIdxs[i] - bIdxs[j]));
    if (aIdxs[i] < bIdxs[j]) {
      i++;
    } else {
      j++;
    }
  }
  return dist;
};

console.log(shortestWordDist(["practice", "makes", "perfect", "coding", "makes"], 'makes', 'coding'));
