const magicIndex = (arr) => {
  // time: O(n) naive solution. could use bsearch
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === i) {
      return true;
    } else if (arr[i] > i) {
      return false;
    }
  }
  return false;
};

const magicIndexBsearch = (arr) => {
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === mid) {
    return true;
  } else if (arr[mid] > mid) {
    // since the array is sorted, once the mid element is
    // bigger than its index, there's no way to have magic index after that
    return false;
  } else {
    return magicIndexBsearch(arr.slice(mid+1)) || magicIndexBsearch(arr.slice(0, mid));
  }
};
