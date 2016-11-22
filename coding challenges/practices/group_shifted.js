// ['abc', 'bcd', 'xyz', 'az', 'ba', 'acef', 'a', 'z']
//   101
// [
//   ["abc","bcd","xyz"],
//   ["az","ba"],
//   ["acef"],
//   ["a","z"]
// ]

// 1) make helper function to calculate the key depends on the difference
// 2) keep a map to store the words in array

// 'abc' => 101
const calculateKey = (word) => {
  // O(n) where n is the length or word
  let res = 0;
  for (let i=word.length - 1; i>0; i--) {
    let d = word.charCodeAt(i) - word.charCodeAt(i-1);
    if (d < 0) { d += 26; }
    res += Math.pow(10, (word.length - 1 - i) * 2) * d;
  }
  return res;
};

const groupShifted = (arr) => {
  // time: O(n**2) where n is the length of arr
  // space: O(n)
  let map = new Map();
  arr.forEach((word) => {
    let key = calculateKey(word);
    map.set(key, (map.get(key) || []).concat(word));
  });
  return Array.from(map.values());
};

console.log(groupShifted(['abc', 'bdfg', 'bcd', 'xyz', 'az', 'ba', 'acef', 'a', 'z', 'b', 'e', 'aza']));
