const BinaryHeap = require('./BinaryHeap.js');

let minHeap = new BinaryHeap((a, b) => a - b);

minHeap.insert(5);
minHeap.insert(4);
minHeap.insert(3);
minHeap.insert(1);
minHeap.insert(6);
minHeap.insert(2);

console.log(minHeap.store);

console.log(minHeap.extract());
console.log(minHeap.extract());


console.log(minHeap.store);
