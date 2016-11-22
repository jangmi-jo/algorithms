// ["bat", "tab", "cat"]
// pick two words which make a palindrome when we put it together
// iterate through the arr once and make a map
// {'bat': 0, 'tab': 1, 'cat': 2}
// iterate through the arr one more time and see if there's the reversed word is in map.

const palindromePairs = (arr) => {
  // time: O(n**2)
  // space: O(n)
  let map = new Map();
  let res = [];
  arr.forEach((word, i) => {
    map.set(word, i);
  });
  arr.forEach((word, i) => {
    let reversed = word.split('').reverse().join('');
    if (map.get(reversed) !== undefined) {
      res.push([map.get(reversed), i]);
    }
  });
  return res;
};

console.log(palindromePairs(["bat", "tab", "cat"]));
