/*
remove first-name duplicates

classic problem too

sort the array by the first-name
keep a counter from 0
go through the array
if a element's first-name is different with the next one,
update array[counter] to the element
increment counter

we could use hashmap to store things
and get time, space: O(n)
*/

const removeDup = (arr) => {
  // time: O(nlogn) for sorting
  arr.sort((a, b) => {
    // for sorting characters, have to specify numbers (-1, 0, 1)
    if (a[0] > b[0]) { return 1; }
    if (a[0] < b[0]) { return -1; }
    return 0;
  });
  let c = 0;
  for (let i=0; i<arr.length; i++) {
    if (i === arr.length - 1 || arr[i][0] !== arr[i+1][0]) {
      arr[c] = arr[i];
      c++;
    }
  }
  return arr.slice(0, c);
};

const e = ["Ian Botham", "David Gower", "Ian Bell", "Ian Chappell"];
console.log(removeDup(e.map((el) => el.split(" "))));
