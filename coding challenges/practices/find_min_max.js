// one of them is easy to get
// since the list can either be
// /\ or \/ only. Else, it won't be two sorted sections.
// even easy to get which one that is.
// get the first two els and compare

// if the length is smaller than 3,
// just use min, max (for edge cases)

// assume we will only have /\ style
// smallest = min of arr[0], arr[-1]
// start from index 1
// compare arr[i] and arr[i+1]
// if arr[i] is bigger than arr[i+1]
// we passed the biggest num
// multiply 2 for each time
// go back to the i / 2 and go through from there

const findMinMax = (arr) => {
  // time: O(logn)
  // space: O(1)
  if (arr.length <= 0) {
    return [];
  } else if (arr.length <= 2) {
    return [Math.min(...arr), Math.max(...arr)];
  }
  let min = Math.min(arr[0], arr[arr.length - 1]);
  let max = min;
  let i = 1;
  while (i < arr.length) {
    if (arr[i] > arr[i+1]) {
      for (let j= Math.floor(i/2); j<=i; j++) {
        max = arr[j] > max ? arr[j] : max;
      }
      break;
    }
    i *= 2;
  }
  return [min, max];
};

console.log(findMinMax([1, 3]));
