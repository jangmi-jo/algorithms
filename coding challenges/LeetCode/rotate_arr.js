
const rotate = (arr, k) => {
  for (let i=0; i<k; i++) {
    arr.unshift(arr.pop());
  }
};

let a = [1,2,3,4,5,6,7];
rotate(a, 3);
console.log(a);
