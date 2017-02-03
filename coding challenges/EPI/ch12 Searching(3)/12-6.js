/*
search in a 2D sorted array

checking line by line
start from i = first row, j = last column
if array[i][j] is the target, return true
if it's smaller than targer, that means,
the whole row can't have the target since it's sorted so increment the row by 1
if it's bigger than target, that means,
the whole column can't have the target with same reason
so decrement the column by 1

*/

const search = (arr, n) => {
  // time: O(row + column)
  // since we increment i from 0 to max row
  // and decrement j from max col to 0
  let i = 0;
  let j = arr[0].length - 1;
  while (arr[i] !== undefined && arr[i][j] !== undefined) {
    if (arr[i][j] === n) {
      return true;
    } else if (arr[i][j] < n) {
      i++;
    } else {
      j--;
    }
  }
  return false;
};

const e = [
  [-1, 2, 4, 4, 6],
  [1, 5, 5, 9, 21],
  [3, 6, 6, 9, 22],
  [3, 6, 8, 10, 24],
  [6, 8, 9, 12, 25],
  [8, 10, 12, 13, 40]
];

console.log(search(e, 11)); // false
console.log(search(e, 25)); // true
