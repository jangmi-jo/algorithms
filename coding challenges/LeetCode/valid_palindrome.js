const alphanumeric = new Map();
'qwertyuioplkjhgfdsazxcvbnm1234567890'.split('').forEach((chr) => {
  alphanumeric.set(chr, true);
});

const isPalindrome = (s) => {
  // time: O(n), space: O(1)
  let arr = s.toLowerCase().split('');
  arr = arr.filter((chr) => alphanumeric.get(chr));
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] !== arr[j]) { return false; }
    i++;
    j--;
  }
  return true;
};

console.log(isPalindrome('race a car'));
