// given an array of digits
// if the input is [1, 2, 9] => [1, 3, 0]

// add 1 to the last num
// start from the end
// add 1 if carry is true
// set carry to false
// if the num is 10
// carry = true
// make the num = 0

// shift 1 if carry is true
// return arr
const incrementInteger = (arr) => {
  // time: O(n)
  // spcae: O(1)
  arr[arr.length - 1]++;
  let carry = false;
  for (let i=arr.length - 1; i>=0; i--) {
    if (carry) {
      arr[i]++;
      carry = false;
    }
    if (arr[i] === 10) {
      carry = true;
      arr[i] = 0;
    }
  }
  if (carry) { arr.unshift(1); }
  return arr;
};


console.log(incrementInteger([0]));
