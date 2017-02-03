/*
find the kth largest element
[3, 2, 1, 5, 4]
using heap can do this with O(nlogk) time, O(k) space
the book shows something like quick sort but it doesn't seem that much better..
but since we already did the heap way, I'll implement the quick sort way
which would take O(n**2) for the worst case
O(1) space

1) pick a random pivot and partition the arr
2) repeat the partitioning if the larger elements are more than k

*/

const partition = (arr, s, e) => {
  let p = Math.floor(Math.random() * (e - s)) + s;
  [arr[p], arr[s]] = [arr[s], arr[p]];
  p = s;
  for (let i=s+1; i<e; i++) {
    if (arr[i] > arr[p]) {
      [arr[i], arr[p+1]] = [arr[p+1], arr[i]];
      [arr[p], arr[p+1]] = [arr[p+1], arr[p]];
      p++;
    }
  }
  return p;
};

const quickWay = (arr, k) => {
  let s = 0;
  let e = arr.length;
  let larger = partition(arr, s, e);
  while (larger !== k - 1) {
    if (larger < k - 1) {
      larger = partition(arr, larger, e);
    } else if (larger > k - 1) {
      larger = partition(arr, s, larger);
    }
  }
  return arr[larger];
};

const e = [3, 2, 1, 5, 4];
let n = quickWay(e, 3);

while (n === 3) {
  n = quickWay(e, 3);
  console.log(n);
}
