

let hash = new Map();
const combinationSum4 = (arr, target) => {
  if (target === 0) { return 1; }
  if (target < 0) { return 0; }
  let ways = 0;
  arr.forEach((c) => {
    if (target - c < 0) { return; }
    if (hash.get(target - c) === undefined) {
      hash.set(target - c, combinationSum4(arr, target - c));
    }
    ways += hash.get(target - c);
  });
  return ways;
};

console.log(combinationSum4([3, 33, 333], 10000));
