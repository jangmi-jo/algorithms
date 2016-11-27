const quickSort = (arr, comparator = (a, b) => a - b) => {
  // time: O(nlogn)
  // space: temporary arrays O(n)
  // This version is stable
  // base case
  if (arr.length <= 1) { return arr; }
  // pick a random pivot
  let pivot = arr[Math.floor(Math.random() * arr.length)];
  let left = [];
  let middle = [];
  let right = [];
  arr.forEach((n) => {
    if (comparator(n, pivot) === 0) {
      middle.push(n);
    } else if (comparator(n, pivot) < 0) {
      left.push(n);
    } else {
      right.push(n);
    }
  });
  return quickSort(left, comparator).concat(middle).concat(quickSort(right, comparator));
};


const quickSortInPlace = (arr, low = 0, high = arr.length - 1, comparator = (a, b) => a - b) => {
  // time: O(nlogn)
  // space: O(logn) for callstack
  if (low < high) {
    // partition returns the pivot index
    // then we call the quickSortInPlace to the rest of the arr
    let pivotIdx = partition(arr, low, high, comparator);
    quickSortInPlace(arr, low, pivotIdx - 1, comparator);
    quickSortInPlace(arr, pivotIdx + 1, high, comparator);
  }
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, low, high, comparator) => {
  // partition the area and returns the pivot index
  let len = high - low + 1;
  let randomIdx = Math.floor(Math.random() * len) + low;
  // swap it to the first
  swap(arr, randomIdx, low);
  let pivotIdx = low;
  low++;
  while (low <= high) {
    if (comparator(arr[pivotIdx], arr[low]) >= 0) {
      // if current num is smaller or equal to pivot,
      // swap that to right next to pivot
      // Then swap with pivot and increment pivot index
      swap(arr, pivotIdx + 1, low);
      swap(arr, pivotIdx, pivotIdx + 1);
      pivotIdx++;
    }
    low++;
  }
  return pivotIdx;
};

let a = [3, 2, 1, 5, 2, 7, 4, 8, 2, 9, 1, 8];

quickSortInPlace(a);

console.log(a);
