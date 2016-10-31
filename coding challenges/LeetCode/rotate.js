const maxRotateFunction = (arr) => {
  // needs better efficiency
  let max;
  for (let i=0; i<arr.length; i++) {
    let newArr = arr.map((n, idx) => n * ((idx + i) % arr.length));
    let sum = newArr.reduce((a, e) => a + e);
    if (!max || sum > max) { max = sum; }
  }
  return max;
};

maxRotateFunction([4, 3, 2, 6]);
