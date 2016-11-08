
const threeSum = (arr, sum = 0, sumArr = []) => {
  if (sum === 0 && sumArr.length === 3) { return [sumArr]; }
  let res = [];
  arr.sort((a, b) => a - b);
  for (let i=0; i<arr.length; i++) {
    if (sumArr.length < 3) {
      if (arr[i-1] === arr[i]) { continue; }
      let temp = threeSum(arr.slice(i+1), sum + arr[i], sumArr.concat(arr[i]));
      temp.forEach((t) => {
        res.push(t);
      });
    }
  }
  return res;
};

console.log(threeSum([0,3,0,1,1,-1,-5,-5,3,-3,-3,0]));
