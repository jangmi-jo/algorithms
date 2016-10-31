const convert = (s, n) => {
  // time: O(m * n) where m is the length of the string
  // space: O(n**2)
  let arr = [];
  let long = true;
  let idx = 0;
  while (idx < s.length) {
    if (long) {
      arr.push(s.slice(idx, idx + n).split(''));
      idx += n;
      long = false;
    } else {
      let temp = [];
      for (let i=idx; i<idx + n - 2; i++) {
        temp.push(s[i]);
      }
      if (temp.length === 0) {
        long = true;
        continue;
      }
      temp.push('');
      temp.reverse();
      temp.push('');
      arr.push(temp);
      idx += n - 2;
      long = true;
    }
  }
  let res = [];
  for (let i=0; i<n; i++) {
    for (let j=0; j<arr.length; j++) {
      res.push(arr[j][i]);
    }
  }
  return res.join('');
  // trying to find pattern..
  // it is probably possible...
  // let res = "";
  // let i = 0;
  // while (i < n) {
  //   let sIdx = i;
  //   while (sIdx < s.length) {
  //     res += s[sIdx];
  //     if (![0, n-1].includes(sIdx % (n + n - 2)) && s[sIdx + n - 1]) {
  //       res += s[sIdx + n - 1];
  //     }
  //     sIdx += (n + n - 2);
  //   }
  //   i++;
  // }
  // return res;
};
