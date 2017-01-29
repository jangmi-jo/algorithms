/*
sort an almost-sorted array

build a heap with elements in array from 0 to k (exclusive)
extract one each time and insert the next one

*/

const Heap = require('./11-1.js');

const almostSorted = (arr, k) => {
    // time: O(nlogk) where n is the length of arr
    // extracting takes logk
    // space: O(k) in heap's store
    const heap = new Heap(arr.slice(0, k));
    for (let i=k; i<arr.length + k; i++) {
        arr[i-k] = heap.extract();
        if (arr[i]) {
            heap.insert(arr[i]);
        }
    }
};

const a = [3, -1, 2, 6, 4, 5, 8];
almostSorted(a, 2);
console.log(a);
