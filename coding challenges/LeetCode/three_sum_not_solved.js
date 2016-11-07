const removeDup = (arr) => {
  let i = 0;
  while (i < arr.length) {
    let j = i+1;
    while (j < arr.length) {
      if (arr[i].every((el) => arr[j].includes(el)) && !arr[i].every((el) => el === 0)) {
        arr.splice(j, 1);
      } else {
        j++;
      }
    }
    i++;
  }
  return arr;
};

const threeSum = (arr, sum = 0, sumArr = []) => {
  if (sum === 0 && sumArr.length === 3) { return [sumArr]; }
  let res = [];
  for (let i=0; i<arr.length; i++) {
    if (sumArr.length < 3) {
      let temp = threeSum(arr.slice(i+1), sum + arr[i], sumArr.concat(arr[i]));
      temp.forEach((t) => {
        t.sort((a, b) => a - b);
        res.push(t);
      });
    }
  }
  return removeDup(res);
};

// console.log(threeSum([0,3,0,1,1,-1,-5,-5,3,-3,-3,0]));
