
const isIsomorphic = (s, t) => {
  // time: O(n)
  // space: O(n)
  let sMap = new Map();
  let tMap = new Map();
  for (let i=0; i<s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || []).concat(i));
    tMap.set(t[i], (tMap.get(t[i]) || []).concat(i));
  }
  let sArr = Array.from(sMap.values());
  let tArr = Array.from(tMap.values());
  for (let i=0; i<sArr.length; i++) {
    if (sArr[i].length !== tArr[i].length) { return false; }
    for (let j=0; j<sArr[i].length; j++) {
      if (sArr[i][j] !== tArr[i][j]) { return false; }
    }
  }
  return true;
};
