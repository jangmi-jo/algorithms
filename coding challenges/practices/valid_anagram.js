
// first, return false if a, b's length is different
// make a charMap with a's chars (key as char, value as count)
// go through b if the b's char is in charMap,
// subtract 1 each time
// check if the charMap only has 0s in values
// time: O(a), space: O(a)

const validAnagram = (a, b) => {
  // time: O(a)
  // space: O(a)
  if (a.length !== b.length) { return false; }
  let charMap = new Map();
  for (let i=0; i<a.length; i++) {
    charMap.set(a[i], (charMap.get(a[i]) || 0) + 1);
  }
  for (let i=0; i<a.length; i++) {
    if (charMap.get(b[i]) >= 1) {
      charMap.set(b[i], charMap.get(b[i]) - 1);
    } else {
      return false;
    }
  }
  return Array.from(charMap.values()).every((c) => c === 0);
};

console.log(validAnagram('bcat', 'bac'));
