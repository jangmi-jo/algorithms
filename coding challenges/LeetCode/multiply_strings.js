const nums = new Map();
for (let n=0; n<10; n++) {
  nums.set(n.toString(), n);
}

const multiply = (a, b) => {
  let res = [];
  a = a.split('');
  b = b.split('');
  for (let i=0; i<b.length; i++) {
    let temp = [];
    for (let j=0; j<a.length; j++) {
      temp.push(nums.get(b[i]) * nums.get(a[j]));
    }
    for (let z=0; z<b.length - 1 - i; z++) { temp.push(0); }
    res.push(temp);
  }
  let arr = [];
  while (res.some((r) => r.length)) {
    let sum = 0;
    res.forEach((r) => {
      sum += r.pop() || 0;
    })
    arr.push(sum);
  }

  let i = 0, carry;
  while (i < arr.length) {
    if (carry !== undefined) {
      arr[i] += carry;
      carry = undefined;
    }

    if (arr[i] > 9) {
      carry = Math.floor(arr[i] / 10);
      arr[i] %= 10;
    }
    i++;
  }
  if (carry) { arr.push(carry); }
  arr.reverse();
  return arr.join('');
};

console.log(multiply('123', '456'));
// insane approach.. It has to be something else..
