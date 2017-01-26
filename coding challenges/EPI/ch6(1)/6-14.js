/*
compute a random subset
given n, k as integer

1) keep a set and pick a num from 1-n
2) add the num if it's not in set

1) keep a empty map and set
2) pick a num randomly from 0~upper bound(which starts from n and reduced by 1 each time)
3) if it's in map, use the val instead
4) add num to set and add it to map
5) if we pick 10, add 10 in map as key and n-1 as val
 so next time we pick 10, it will redirect to n-1
*/

const randomSubset = (n, k) => {
  // time, space: O(k)
  const map = new Map();
  const set = new Set();
  let len = n;
  for (let i=0; i<k; i++) {
    let r = Math.floor(Math.random() * len);
    len--;
    set.add(map.get(r) || r);
    map.set(r, len);
  }
  return set;
};

console.log(randomSubset(10, 3));
