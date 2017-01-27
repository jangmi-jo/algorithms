/*
Test palindrome
given a string and return boolean
string has character, non-character
ignore non-character

1) make all downcase
2) set i = 0, j = str.length-1
3) while i < j, move i and j if it's pointing non-character
4) return false if s[i] !== s[j]

*/

const chars = new Set('qwertyuioplkjhgfdsazxcvbnm'.split(''));

const isPal = (s) => {
  // time: O(n), space: O(1)
  s = s.toLowerCase();
  let i = 0, j = s.length - 1;
  while (i < j) {
    while (!chars.has(s[i]) && i < j) { i++; }
    while (!chars.has(s[j]) && i < j) { j--; }
    if (s[i] !== s[j]) { return false; }
    i++;
    j--;
  }
  return true;
};

console.log(isPal('Able was I, ere I saw Elba!'));
