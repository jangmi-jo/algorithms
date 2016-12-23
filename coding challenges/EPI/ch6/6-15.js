/*
generate non-uniform random numbers
given two arrays nums and possibilities
[3, 5, 7, 11]
[9, 6, 2, 1]
return a random number depends on the possibilities
we can just get huge array of 333333333, 555555... but not great
how can we do better?

1) modify possibilities to [9, 15, 17, 18]
2) get a random number from 1-18
3) binary search to find the position in possibilities
4) get the index of number and return the number

*/

const bsearch = (arr, t) => {
  let i = 0, j = arr.length;
  while (i < j) {
    let mid = Math.floor((i+j) / 2);
    if (arr[mid] === t) {
      return mid;
    } else if (arr[mid] < t) {
      i = mid + 1;
    } else {
      j = mid;
    }
  }
  return i === arr.length ? i-1 : i;
};


const nonUniformRandomNumber = (nums, poss) => {
  // time: O(n) in for loop and bsearch would take logn which is smaller than O(n)
  // space: O(1)
  for (let i=0; i<nums.length-1; i++) {
    poss[i+1] = poss[i] + poss[i+1];
  }
  let idx = Math.floor(Math.random() * poss[nums.length-1]) + 1;
  return nums[bsearch(poss, idx)];
};

console.log(nonUniformRandomNumber([3, 5, 7, 11], [9, 6, 2, 1]));
