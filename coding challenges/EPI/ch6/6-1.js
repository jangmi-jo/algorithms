
// given an array and an idx
// rearrange the array like quick sort style partition
// [1, 2, 3, 3, 6, 5], 0 => [1, 2, 3, 3, 5, 6]

// left = [] put all the els smaller than pivot
// pivot = [] put all the els same as pivot
// right = [] put all the els greater than pivot
// time: O(n) , space: O(n)

// in place
// move it around..
//
// 1) swap the pivot with the first element
// 2) store p = 0
// go through the arr
// if the el is smaller than pivot,
// swap the arr[p+1], arr[i]
// swap arr[p], arr[p+1]
// update the pivot index
// if the el is bigger than pivot,
// leave it
//

const partition = (arr, i) => {
  [arr[i], arr[0]] = [arr[0], arr[i]];
  let p = 0;
  for (let j=1; j<arr.length; j++) {
    if (arr[j] <= arr[p]) {
      [arr[j], arr[p+1]] = [arr[p+1], arr[j]];
      [arr[p], arr[p+1]] = [arr[p+1], arr[p]];
      p++;
    }
  }
};


const anotherVersion = (arr, i) => {
  // time: O(n) where n is the length of arr
  // space: O(1)
  let pivot = arr[i];
  // move all the smaller els to the front
  let front = 0;
  for (let j=0; j<arr.length; j++) {
    if (arr[j] < pivot) {
      [arr[j], arr[front]] = [arr[front], arr[j]];
      front++;
    }
  }

  // move all the bigger els to the end
  let end = arr.length - 1;
  for (let j=arr.length-1; j>=front; j--) {
    if (arr[j] > pivot) {
      [arr[j], arr[end]] = [arr[end], arr[j]];
      end--;
    }
  }
};


let arr = [6, 5, 2, 1, 5, 8, 3, 9, 1, 2, 5];

// partition(arr, 4);
anotherVersion(arr, 4);

console.log(arr);
