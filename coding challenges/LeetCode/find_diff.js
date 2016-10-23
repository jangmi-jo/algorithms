const findTheDifference = (a, b) => {
  // time: O(n + m) where n is a's length and m is b's length
  // space: O(1)
  let res = 0;
  for (let i=0; i<a.length; i++) {
    res = res ^ a[i].charCodeAt();
  }
  for (let i=0; i<b.length; i++) {
    res = res ^ b[i].charCodeAt();
  }
  return String.fromCharCode(res);
};

console.log(findTheDifference("abcd", "abcde"));
