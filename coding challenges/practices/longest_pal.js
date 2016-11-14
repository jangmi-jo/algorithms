// go through the string and make a map
// key => chr, value => count
// go through the map
// make res
// store single char = a
// res << abcccddea
// if single char exists, add it, start the going backward from length - 1
// {a: 3, b: 2, c: 6, d: 5, e: 2}
//
const longestPal = (str) => {
  // time: O(n) where n is the length of str
  // space: O(characters) if it is only lower characters, 26 => O(1)
  let map = new Map();
  for (let i=0; i<str.length; i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
  }
  let left = "";
  let right = "";
  let single;
  map.forEach((v, k) => {
    while (v >= 2) {
      left += k;
      right = k + right;
      v -= 2;
    }
    if (v === 1 && single === undefined) {
      single = k;
      v--;
    }
  });
  return left + (single || "") + right;
};

console.log(longestPal('gggaaa'));
