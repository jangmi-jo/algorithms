const productExceptSelf = (arr) => {
  // time: O(n), space: O(n)
  let res = [1];
  let m = 1;
  for (let i=0; i<arr.length - 1; i++) {
    m *= arr[i];
    res[i+1] = m;
  }
  m = 1;
  for (let i=arr.length - 1; i>0; i--) {
    m *= arr[i];
    res[i-1] *= m;
  }
  return res;
};

console.log(productExceptSelf([1,2,3,4]));
