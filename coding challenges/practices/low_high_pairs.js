
const inBound = (n, low, high) => {
  return n >= low && n <= high;
};

const lowHighPairs = (arr, low, high) => {
  // if (arr.length <= 1) { return []; }
  let i = 0, j = 0, s = arr[0];
  let res = [];
  while (i < arr.length && j < arr.length) {
    // it skips certain things..
    // doesn't work
    // don't think it's possible to get it done in O**2
    if (inBound(s, low, high)) {
      res.push([i, j]);
    }

    if (s < high) {
      j++;
      s += arr[j];
    } else {
      //  s > high
      s -= arr[i];
      i++;
    }

    // if (inBound(s, low, high)) {
    //   res.push([i, j]);
    //   if (j === arr.length - 1) {
    //     s -= arr[i];
    //     i++;
    //   } else {
    //     j++;
    //     s += arr[j];
    //   }
    // } else {
    //   if (i === arr.length - 1) {
    //     j++;
    //     s += arr[j];
    //   } else {
    //     s -= arr[i];
    //     i++;
    //   }
    // }
  }

  return res;
};
console.log(lowHighPairs([1, 2, 3, 4, 5, 6, 7], 3, 7));
