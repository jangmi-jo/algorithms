const longestPalindrome = (s) => {
  let len = 0;
  let set = new Set();
  // whenever see a pair, add it to length
  // and get rid of that pair
  for (let i=0; i<s.length; i++) {
    if (set.has(s[i])) {
      len += 2;
      set.delete(s[i]);
    } else {
      set.add(s[i]);
    }
  }
  return set.size ? len + 1 : len;
};

longestPalindrome('abccccdd');
