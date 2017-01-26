/*
given a nonnegative integer,
return n rows of pascal sequence
11 => 121 => 1331 => 14641

1) make an array start [1, 1]
2) generate next one in loop
3) keep adding into result

there's some very specific math formula for pascal though..
*/

const generatePascal = (n) => {
  // time, space: O(n**2) because 2+3+4+...+n+1 from process each row
  let res = [];
  while (res.length < n) {
    if (res.length === 0) {
      res.push([1, 1]);
    } else {
      res.push(nextPascal(res[res.length-1]));
    }
  }
  return res;
};

const nextPascal = (arr) => {
  // for each row, it takes the length of the row
  let next = [1];
  for (let i=0; i<arr.length-1; i++)  {
    next.push(arr[i] + arr[i+1]);
  }
  next.push(1);
  return next;
};

console.log(generatePascal(1));
