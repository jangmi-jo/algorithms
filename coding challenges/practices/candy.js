// idea: when we see the next person has more rating,
// we give him 1 more candy
// everyone starts from 1
// if we try to see both side of neighbors,
// when the right neighbor has smaller rating,
// we don't know how many candies the right neighbor has
// so, we should see from both side

const candy = (arr) => {
  // make sure the undefined. 0 is a falsey value!
  // time, space: O(n)
  let left = new Array(arr.length);
  let right = new Array(arr.length);
  for (let i=0; i<arr.length; i++) {
    if (arr[i-1] !== undefined && arr[i-1] < arr[i]) {
      left[i] = left[i-1] + 1;
    } else {
      left[i] = 1;
    }
    let j = arr.length - 1 - i;
    if (arr[j+1] !== undefined && arr[j+1] < arr[j]) {
      right[j] = right[j+1] +1;
    } else {
      right[j] = 1;
    }
  }
  let res = 0;
  for (let i=0; i<arr.length; i++) {
    res += Math.max(left[i], right[i]);
  }
  return res;
};

console.log(candy([1, 2, 3, 4, 5]));
