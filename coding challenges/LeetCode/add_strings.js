
const generateArray = (str, len) => {
  let arr = [];
  let numHash = {};
  for (let i=0; i<10; i++) { numHash[i] = i; }
  for (let i=0; i<len - str.length; i++) {
    arr.push(0);
  }
  for (let i=0; i<str.length; i++) {
    arr.push(numHash[str[i]]);
  }
  return arr;
};

const addString = (a, b) => {
  // solved same as add binary
  // time: O(maxL)
  // space: O(maxL) to generate arrays
  let maxL = Math.max(a.length, b.length);
  a = generateArray(a, maxL);
  b = generateArray(b, maxL);
  for (let i=maxL - 1; i>=0; i--) {
    a[i] += b[i];
    if (i !== 0 && a[i] > 9) {
      a[i - 1] += Math.floor(a[i] / 10);
      a[i] %= 10;
    }
  }
  if (a[0] > 9) {
    a.unshift(Math.floor(a[0] / 10));
    a[1] %= 10;
  }
  return a.join('');
};

// const addString = (num1, num2) => {
//   // naive solution without thinking bignum
//   let numHash = {};
//   for (let i=0; i<10; i++) { numHash[i] = i; }
//   let res = 0;
//   num1.split('').forEach((digit, idx) => {
//     res += (numHash[digit] * Math.pow(10, num1.length - 1 - idx));
//   });
//   num2.split('').forEach((digit, idx) => {
//     res += numHash[digit] * Math.pow(10, num2.length - 1 - idx);
//   });
//   return res;
// };

addString("9333852702227987", "85731737104263");
