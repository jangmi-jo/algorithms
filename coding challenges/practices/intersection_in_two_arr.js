// it needs clarify questions
// am I allowed to use extra space? assume yes
// do the arrs have duplicates? assume yes

// make a map with one array
// filter the other array with the map

const intersection = (a, b) => {
  // time, space: O(a + b)
  let map = new Map();
  a.forEach((n) => {
    map.set(n, (map.get(n) || 0) + 1);
  });
  let inter = [];
  for (let i=0; i<b.length; i++) {
    if (map.get(b[i])) {
      inter.push(b[i]);
      map.set(b[i], map.get(b[i]) - 1);
    }
  }
  return inter;
};
