/*
permute the elements of the array
given 2 arrays
the number represents the index of the element should be
[2, 0, 1, 3], [a, b, c, d] => [b, c, a, d]

1) store current index and next index
2) set temp to the current char
3) set the current index in nums to -1 represent processed
4) swap temp and the next char
5) update current, next index
6) keep processing until all nums are -1
*/

const permuteElements = (nums, chars) => {
  // time: O(n), space: O(1)
  for (let i=0; i<nums.length; i++) {
    if (nums[i] === -1) { continue; }
    let c = i;
    let n = nums[c];
    let temp = chars[c];
    while (nums[c] !== -1) {
      nums[c] = -1;
      [chars[n], temp] = [temp, chars[n]];
      c = n;
      n = nums[c];
    }
  }
  return chars;
};

console.log(permuteElements([1, 0, 2, 3], ['a', 'b', 'c', 'd']));
