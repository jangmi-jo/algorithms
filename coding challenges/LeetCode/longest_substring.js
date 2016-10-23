const lengthOfLongestSubstring = (str) => {
  let letterMap = new Map();
  let lastIdx = 0;
  let res = "";
  for (let i=0; i<=str.length; i++) {
    if (i === str.length || letterMap.get(str[i]) !== undefined) {
      let newStr = str.slice(lastIdx, i);
      lastIdx = Math.max(letterMap.get(str[i]) + 1, lastIdx);
      res = newStr.length > res.length ? newStr : res;
    }
    letterMap.set(str[i], i);
  }
  return res.length;
};

lengthOfLongestSubstring("pwwkew");
