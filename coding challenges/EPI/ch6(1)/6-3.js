// given two arrays
// return an array of integers representing product of thoses two
//
// [1, 2, 3], [4, 5]
// constraints : do not convert int to str
// or use other data structure


const product = (a, b) => {
  // time: O(a*b)
  let res = [];
  for (let j=b.length-1; j>=0; j--) {
    let temp = [];
    let carry;
    for (let i=a.length-1; i>=0; i--) {
      let el = b[j] * a[i];
      if (carry) {
        el += carry;
        carry = undefined;
      }
      if (el > 9) { carry = Math.floor(el / 10); }
      el %= 10;
      temp.push(el);
    }
    if (carry) {
      temp.push(carry);
      carry = undefined;
    }
    for (let k=0; k<b.length-1-j; k++) {
      temp.unshift(0);
    }
    temp.forEach((el, idx) => {
      res[idx] = (res[idx] || 0) + el;
      if (carry) {
        res[idx] += carry;
        carry = undefined;
      }
      if (res[idx] > 9) {
        carry = Math.floor(res[idx] / 10);
      }
      res[idx] %= 10;
    });
    if (carry) { res.push(carry); }
  }
  return res.reverse();
};

console.log(99 * 99);
console.log(product([9, 9], [9, 9]));
