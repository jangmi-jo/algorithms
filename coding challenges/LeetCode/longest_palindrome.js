const longestPalindrome = (s) => {
  // LOTS of edge cases
  // if there's one character, if it's even/odd
  // if it's just same characters only(even/odd)
  // basic idea is if we find palindrome,
  // just get the length of it and store longer one
  // palindrome starts when two same characters are next to each other
  // or two same characters are one character away
  // time: O(n)
  //
  let max = "";
  let local = "";
  for (let i=0; i<s.length; i++) {
    if (s[i-1] && s[i+1] && s[i-1] === s[i+1]) {
      local = getPalindromeLength(s, i-1, i+1);
      max = max.length < local.length ? local : max;
    }
    if (s[i-1] && s[i] === s[i-1]) {
      local = getPalindromeLength(s, i-1, i);
      max = max.length < local.length ? local : max;
    }
  }
  max = s.length && !max.length ? s[0] : max;
  return max;
};

const getPalindromeLength = (s, left, right) => {
  while (s[left] && s[right] && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.slice(left+1, right);
};
