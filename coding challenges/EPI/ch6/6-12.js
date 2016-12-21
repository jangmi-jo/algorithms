/*
given an integer k and stream of data
maintain uniform random subset of size k

1) until k, add new data into the res
2) for each data after k, replace one from res randomly
3) return the res

*/

const onlineSample = (k, arr) => {
  // time: O(n), space: O(k)
  let res = [];
  for (let i=0; i<arr.length; i++) {
    if (res.length < k) {
      res.push(arr[i]);
    } else {
      let idx = Math.floor(Math.random() * k);
      res[idx] = arr[i];
    }
  }
  return new Set(res);
};

console.log(onlineSample(3, [1, 2, 3, 4, 5, 6, 7]));
