
const generateBinaryArray = (str, len) => {
  let arr = [];
  for (let i=0; i<len - str.length; i++) {
    arr.push(0);
  }
  for (let i=0; i<str.length; i++) {
    arr.push(Number(str[i]));
  }
  return arr;
};

const addBinary = (a, b) => {
  // build the array of 0s and 1s with max length for both
  // add from the back
  // time: O(maxLength)
  let maxL = Math.max(a.length, b.length);
  a = generateBinaryArray(a, maxL);
  b = generateBinaryArray(b, maxL);
  for (let i=maxL - 1; i>=0; i--) {
    a[i] += b[i];
    if (i !== 0 && a[i] > 1) {
      a[i - 1]++;
      a[i] %= 2;
    }
  }
  if (a[0] > 1) {
    a[0] %= 2;
    a.unshift(1);
  }
  return a.join('');
};

console.log(addBinary('111', '111'));
