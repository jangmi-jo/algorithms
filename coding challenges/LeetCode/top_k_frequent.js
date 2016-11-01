const BinaryHeap = require('./../../Data Structure/BinaryHeap.js');

const topKFrequent = (arr, k) => {
  // build binary heap with count
  // push all elements
  // extract k elements
  // time: O(nlogn)
  // we could just make map and sort it and that should be same complexity
  let map = new Map();
  // let heap = new BinaryHeap((a, b) => map.get(b) - map.get(a));
  arr.forEach((n) => {
    map.set(n, (map.get(n) || 0) + 1);
  });
  let res = Array.from(map.entries());
  res.sort((a, b) => b[1] - a[1]);
  res = res.filter((r, idx) => {
    return idx < k;
  });
  // map.forEach((v, key) => {
  //   heap.insert(key);
  // });
  // let res = [];
  // for (let i=0; i<k; i++) {
  //   res.push(heap.extract());
  // }
  return res.map((n) => n[0]);
};


console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
