const frequencySort = (s) => {
  // time: O(nlogn)
  // space: O(n)
  let charHash = new Map();
  for (let i=0; i<s.length; i++) {
    charHash.set(s[i], (charHash.get(s[i]) || 0) + 1);
  }
  let keys = Array.from(charHash.keys());
  keys.sort((a, b) => charHash.get(b) - charHash.get(a));
  keys = keys.map((key) => key.repeat(charHash.get(key)));
  return keys.join('');
};

console.log(frequencySort('Aabb'));
