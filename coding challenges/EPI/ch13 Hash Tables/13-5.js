/*
given an array of strings => length n
compute the k most frequent query

build a map with key as string, value as count => time, space O(n)
build heap => space O(n)
extract k and return => time O(klogn)

*/

const Heap = require('./../ch11 Heaps(1)/11-1.js');

const kMostFrequent = (arr, k) => {
  // total time: O(n + klogn), space: O(n)
  // where n is the length of arr
  const map = new Map();
  const heap = new Heap([], (a, b) => map.get(b) - map.get(a));
  const res = [];
  arr.forEach((str) => {
    map.set(str, (map.get(str) || 0) + 1);
  });
  for (let key of map.keys()) {
    heap.insert(key);
  }
  for (let i=0; i<k; i++) {
    res.push(heap.extract());
  }
  return res;
};

console.log(kMostFrequent(['a', 'b', 'c', 'a', 'b', 'd', 'd', 'd'], 3));
