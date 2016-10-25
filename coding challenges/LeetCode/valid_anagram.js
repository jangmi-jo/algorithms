const isAnagram = (s, t) => {
  if (s.length !== t.length) { return false; }
  // make a map to keep all the counts
  // iterate once and add 1 for s subtract 1 for t
  // time: O(n) where n is the length of string
  // space: O(s + t)
  let map = new Map();
  for (let i=0; i<s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    map.set(t[i], (map.get(t[i]) || 0) - 1);
  }
  return Array.from(map.values()).every((v) => v === 0);
};
