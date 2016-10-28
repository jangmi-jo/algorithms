

const getRow = (n) => {
  let map = new Map();
  map.set(0, [1]);
  for (let i=1; i<=n; i++) {
    let newArr = buildNextArr(Array.from(map.get(i-1)));
    map.set(i, newArr);
  }
  return map.get(n);
};


const buildNextArr = (arr) => {
  for (let i=arr.length - 1; i>0; i--) {
    arr[i] += arr[i-1];
  }
  arr.push(1);
  return arr;
};

console.log(getRow(4));
