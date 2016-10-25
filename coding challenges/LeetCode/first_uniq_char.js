const firstUniqChar = (s) => {
  let map = {};
  for (let i=0; i<s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = i;
    } else {
      map[s[i]] = -1;
    }
  }
  let keys = Object.keys(map).filter((k) => map[k] !== -1);
  keys.sort((a, b) => map[a] - map[b]);
  return map[keys[0]] !== undefined ? map[keys[0]] : -1;
};

firstUniqChar('loveleetcode');
