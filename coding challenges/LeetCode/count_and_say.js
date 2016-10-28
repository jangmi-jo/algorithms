
const countAndSay = (n) => {
  // time: O(n**2)
  let res = ['', '1'];
  while (res.length <= n) {
    res.push(buildNextString(res[res.length - 1]));
  }
  return res[n];
};

const buildNextString = (str) => {
  let arr = [];
  let sliceCount = 0;
  while (str.length) {
    if (str[sliceCount] === str[0]) {
      sliceCount++;
    } else {
      arr.push(str.slice(0, sliceCount));
      str = str.slice(sliceCount);
      sliceCount = 0;
    }
  }
  for (let i=0; i<arr.length; i++) {
    arr[i] = arr[i].length + arr[i][0];
  }
  return arr.join('');
};

console.log(countAndSay(4));
