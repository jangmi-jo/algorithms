const vowels = {};
'aeiouAEIOU'.split('').forEach((c) => {
  vowels[c] = true;
});

const reverseVowels = (s) => {
  // time: O(n)
  // space: O(n)
  let stack = [];
  let arr = s.split('');
  for (let i=0; i<s.length; i++) {
    if (vowels[arr[i]]) {
      stack.push(arr[i]);
      arr[i] = null;
    }
  }
  for (let i=0; i<s.length; i++) {
    if (!arr[i]) {
      arr[i] = stack.pop();
    }
  }
  return arr.join('');
};

reverseVowels('hello');
