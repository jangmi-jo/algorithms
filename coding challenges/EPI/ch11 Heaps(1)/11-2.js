/*
sort an k increasing-decreasing array

get the indices of increasing-decreasing parts with min/max (to avoid storing all the elements again)
store them as array in sequences
then merge sorted arrays with 11-1 solution (change the detail a bit)

*/

const Heap = require('./11-1.js');

const mergeWithHeap = (seqs, arr) => {
    // time: O(n) the while loop will happen n times
    const heap = new Heap(seqs,
        (a, b) => arr[a[0]] - arr[b[0]]);
    const res = [];
    while (heap.store.length) {
        const seq = heap.extract();
        res.push(arr[seq[0]]);
        if (seq[0] === seq[1]) {
            continue;
        } else {
            seq[0] += seq[2];
            heap.insert(seq);
        }
    }
    return res;
};

const sortIncreasingDecreasing = (arr) => {
    // time: O(n) where n is the length of arr
    // space: O(k) store the index of k sequences
    let seqs = [];
    let min = 0;
    let max = 0;
    let increasing = arr[0] < arr[1];
    for (let i=0; i<arr.length; i++) {
        if (increasing) {
            max = i;
            if (arr[i] > arr[i+1] || arr[i+1] === undefined) {
                seqs.push([min, max, 1]);
                max = i+1;
                increasing = false;
            }
        } else {
            min = i;
            if (arr[i] < arr[i+1] || arr[i+1] === undefined) {
                seqs.push([min, max, -1]);
                min = i+1;
                increasing = true;
            }
        }
    }
    return mergeWithHeap(seqs, arr);
};

console.log(sortIncreasingDecreasing([57, 131, 493, 294, 221, 339, 418, 452, 442, 190]));
