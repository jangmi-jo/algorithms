// search the arr return the index of target
// if the target doesn't exist, return -1

// both will take time complexity O(logn)
// but recursive one uses more space with callstack and slicing array

const binarySearchIterative = (arr, target) => {
  let low = 0, high = arr.length - 1;
  // do the comparing process until we have one element left
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      // exclude mid element since we already compared
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};



const bSearchRecursive = (arr, target) => {
  if (arr.length === 0) { return -1; }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid+1);
  if (target === arr[mid]) {
    return mid;
  } else if (target < arr[mid]) {
    return bSearchRecursive(left, target);
  } else {
    let rightSearch = bSearchRecursive(right, target);
    // if the returned value is -1, return -1
    // if it's not, add the left array's length
    return rightSearch === -1 ? -1 : rightSearch + mid + 1;
  }
};
