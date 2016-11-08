const trap = (arr) => {
  // we could make faster if we get the min of the arr[s], arr[e]
  // calculate the water level trapped between those two
  // keep reducing the arr
  while (arr[0] === 0) { arr.shift(); }
  while (arr[arr.length - 1] === 0) { arr.pop(); }
  let s = 0, e = arr.length - 1;
  let water = 0;
  let level = 1;
  while (s < e) {
    for (let i=s+1; i<e; i++) {
      if (arr[i] < level) {
        water++;
      }
    }
    while (arr[s] <= level) { s++; }
    while (arr[e] <= level) { e--; }
    level++;
  }
  return water;
};
