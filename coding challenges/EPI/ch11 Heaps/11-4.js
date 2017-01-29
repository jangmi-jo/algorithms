/*
compute k closest stars
because the data is too big, heap makes so much sense
keep a heap with length k
extract one, insert one for each star
so the additional space won't exceed k

*/

const Heap = require('./11-1.js');

const distFromEarth = (arr) => {
  return Math.sqrt(arr.reduce((a, e) => a + e * e, 0));
};

const closestStars = (stars, k) => {
  // time: O(nlogk), space: O(k)
  const heap = new Heap(stars.slice(0, k),
    (a, b) => distFromEarth(b) - distFromEarth(a));
  for (let i=k; i<stars.length; i++) {
    heap.extract();
    heap.insert(stars[i]);
  }
  return heap.store;
};
