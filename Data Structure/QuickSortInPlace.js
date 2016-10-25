const quickSortNotInPlace = (arr) => {
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
    if (n === pivot) {
      middle.push(n);
    } else if (n < pivot) {
      left.push(n);
    } else {
      right.push(n);
    }
  });
  return quickSortNotInPlace(left).concat(middle).concat(quickSortNotInPlace(right));
};


const quickSortInPlace = (arr, low = 0, high = arr.length - 1) => {
  // time: O(nlogn)
  // space: O(logn) for callstack
  if (low < high) {
    // partition returns the pivot index
    // then we call the quickSortInPlace to the rest of the arr
    let pivotIdx = partition(arr, low, high);
    quickSortInPlace(arr, low, pivotIdx - 1);
    quickSortInPlace(arr, pivotIdx + 1, high);
  }
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, low, high) => {
  // partition the area and returns the pivot index
  let len = high - low + 1;
  let randomIdx = Math.floor(Math.random() * len) + low;
  // swap it to the first
  swap(arr, randomIdx, low);
  let pivotIdx = low;
  low++;
  while (low <= high) {
    if (arr[pivotIdx] >= arr[low]) {
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
