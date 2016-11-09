const bubbleSort = (arr) => {
  let sorted = false;
  let numberOfSwaps = 0;
  while (!sorted) {
    sorted = true;
    for (let i=0; i<arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        let temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
        sorted = false;
        numberOfSwaps++;
      }
    }
  }
  console.log(`Array is sorted in ${numberOfSwaps} swaps.`);
  console.log(`First Element: ${arr[0]}`);
  console.log(`Last Element: ${arr[arr.length - 1]}`);
};

bubbleSort([2, 1, 3, 1, 2]);
