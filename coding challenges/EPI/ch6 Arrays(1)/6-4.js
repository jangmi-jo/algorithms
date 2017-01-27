// given an array of ints
// [3, 3, 1, 0, 0, 0, 1]
// start from 0 index
// each int represent how far can go from that idx
// return if it's possible to reach to the end idx

// keep a maximum index can reach
// go through the array
// if current idx is reachable (is it smaller or equal to the max index)

const advance = (arr) => {
  // time: O(n) where n is the length of arr
  // space: O(1)
  let maxIdx = 0;
  for (let i=0; i<arr.length; i++) {
    if (i > maxIdx) { return false; }
    maxIdx = Math.max(i + arr[i], maxIdx);
    if (maxIdx === arr.length - 1) {
      return true;
    }
  }
};

// console.log(advance([3, 3, 1, 2, 0, 0, 1]));
// console.log(advance([3, 3, 1, 0, 0, 0, 1]));
