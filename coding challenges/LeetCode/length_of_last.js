const lengthOfLastWord = (s) => {
  // O(c) where c is the last word's length
  s = s.trim();
  let count = 0;
  for (let i=s.length-1; i>=0; i--) {
    if (s[i] === ' ') { return count; }
    count++;
  }
  return count;
};
