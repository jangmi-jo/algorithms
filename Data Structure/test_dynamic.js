const DynamicArray = require('./DynamicArray.js');

let arr = new DynamicArray();
arr.push(2);
arr.push(3);
arr.unshift(1);
arr.unshift(0);
arr.unshift(4);
arr.unshift(5);
arr.unshift(6);
arr.unshift(7);
arr.unshift(8);

console.log(arr.capacity);
console.log(arr.store);
console.log(arr.length);
