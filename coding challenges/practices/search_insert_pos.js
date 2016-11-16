const bsearch = (arr, t) => {
  let i=0, j=arr.length;
  while (i < j) {
    let m = Math.floor((i + j) / 2);
    if (arr[m] < t) {
      i = m + 1;
    } else if (arr[m] > t) {
      j = m;
    } else {
      return m;
    }
  }
  return i;
};

console.log(bsearch([1,3,5,6], 7));
