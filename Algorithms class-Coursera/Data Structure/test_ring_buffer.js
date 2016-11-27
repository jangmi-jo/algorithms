const RingBuffer = require('./RingBuffer.js');

let arr = new RingBuffer();
arr.push(2);
arr.push(3);
arr.unshift(1);
arr.unshift(0);
arr.unshift(-1);
arr.push(4);
arr.push(5);
arr.push(6);
arr.push(7);
arr.unshift(-2);
arr.unshift(-3);
arr.push(8);
arr.shift();
arr.pop();

console.log(arr.capacity);
console.log(arr.store);
console.log(arr.length);
