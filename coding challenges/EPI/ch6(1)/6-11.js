/*
Sample offline data
given an array of unique elements, integer k
return a set of k elements randomly

1) get length of arr
2) for each time, get random index from 0 to length
3) add the el to set and swap it with the last el
4) decrement length

*/

const sampleData = (arr, k) => {
  // time: O(k), space: O(k)
  let set = new Set();
  let len = arr.length;
  for (let i=0; i<k; i++) {
    let randomIdx = Math.floor(Math.random() * len);
    set.add(arr[randomIdx]);
    [arr[randomIdx], arr[len - 1]] = [arr[len - 1], arr[randomIdx]];
    len--;
  }
  return set;
};

console.log(sampleData([1, 2, 3, 4], 2));
