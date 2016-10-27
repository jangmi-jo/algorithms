const generate = (n) => {
  // time: O(n**2)
  let res = [];
  while (res.length < n) {
    if (res.length) {
      res.push(nextArr(Array.from(res[res.length - 1])));
    } else {
      res.push([1]);
    }
  }
  return res;
};

const nextArr = (arr) => {
  // time: O(n)
  for (let i=arr.length - 1; i>0; i--) {
    arr[i] += arr[i-1];
  }
  arr.push(1);
  return arr;
};
