const findAnagrams = (s, p) => {
  let idxs = [];
  let targetMap = new Map();
  for (let i=0; i<p.length; i++) {
    targetMap.set(p[i], (targetMap.get(p[i]) || 0) + 1);
  }
  let current = new Map();
  for (let i=0; i<=s.length - p.length; i++) {
    if (current.length < p.length) {
      current.set(s[i], (current.get(s[i]) || 0) + 1);
    } else {
      current.set(s[i - p.length], current.get(s[i - p.length]) )
    }
  }
  return idxs;
};

const isAnagram = (s, i, len, map) => {
  for (let idx=i; idx<i+len; idx++) {
    if (!map.get(s[idx])) {
      return false;
    } else {
      map.set(s[idx], map.get(s[idx]) - 1);
    }
  }
  return true;
};

console.log(findAnagrams('abab', 'ab'));
