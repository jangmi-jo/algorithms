const isSubsequence = (s, t) => {
  // time: O(N) where N is the length of t
  let sIdx = 0;
  for (let i=0; i<s.length; i++) {
    let nextIdx = index(sIdx, t, s[i]);
    if (nextIdx === -1) {
      return false;
    }
    sIdx = nextIdx + 1;
  }
  return true;
};

const index = (start, string, target) => {
  for (let i=start; i<string.length; i++) {
    if (string[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(isSubsequence('axc', 'ahbgdc'));
