const fibonacci = (n) => {
  // recursive way
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  }
  // takes too long. O(2**n)
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const betterFibonacci = (n) => {
  let arr = [0, 1, 1];
  // takes space but the last one's call stack space too.
  // O(n)
  while (arr.length < n + 1) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr[n];
};
