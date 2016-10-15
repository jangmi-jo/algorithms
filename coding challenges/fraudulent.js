const processData = (input) => {
  let arr = input.split("\n").map((line) => line.split(" ").map(Number));
  let n = arr[0][0], d = arr[0][1];
  let expenditures = arr[1];
  console.log(notifications(n, d, expenditures));
};

const modifyArr = (arr, del, add, d) => {
  arr.splice(arr.indexOf(del), 1);
  for (let i=0; i<d; i++) {
    if (arr[i] > add) {
      arr.splice(i, 0, add);
      break;
    }
  }
  if (arr.length !== d) { arr.push(add); }
  return arr[Math.floor(d / 2) - 1];
};

const notifications = (n, d, expenditures) => {
  let count = 0;
  let sortedArr = expenditures.slice(0, d).sort((a, b) => a - b);
  let median = sortedArr[Math.floor(d / 2) - 1];
  for (let i = d; i <= n; i++) {
    if (expenditures[i] > 2 * median) {
      count++;
    }
    median = modifyArr(sortedArr, expenditures[i-d], expenditures[i], d);
  }
  return count;
};

processData(`5 4
1 2 3 4 4`);
