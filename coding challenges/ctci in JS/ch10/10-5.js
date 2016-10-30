// in bsearch,
// find the next one (not empty) and compare with that

const search = (arr, target) => {
  if (arr[0] === target) { return 0; }
  let s = 0, e = arr.length - 1;
  while (s <= e) {
    let mid = Math.floor((s+e)/2);
    while (arr[mid] === '') {
      mid++;
    }
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  return -1;
};

console.log(search(['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''], 'at'));
