// since we know the first el
// get the middle el compare with first one
// if it is bigger than the first el,
// it is sorted correct way
// so the target is in the right
// if it is smaller than the first el,
// the target is in the left

// [4, 5, 6, 7, 0, 1, 2]

const findMin = (arr) => {
  let i = 0, j = arr.length;
  let first = arr[i];
  while (i<j) {
    let m = Math.floor((i+j)/2);
    if (arr[m] > arr[m+1]) {
      return arr[m+1];
    }
    if (arr[m] < first) {
      j = m;
    } else {
      i = m+1;
      first = arr[i];
    }
  }
  return arr[0];
};
