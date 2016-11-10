// object {id, weight}
// given two object arrays
// sorted by weight
// merge them
// if ids are same, should be merged...

// a = [{id: 1, w: 1}, {id: 2, w: 2}]
// b = [{id: 2, w: 1}, {id: 3, w: 3}]
// => [{id: 2, w: 1}, {id: 1, w: 1}, {id: 2, w: 2}, ]
// comparing first ones in each array
// pick smaller one

const weightObject = (a, b) => {
  // time: O(nlogn) where n is length of a + b
  // space: O(n)
  let map = new Map();
  a.forEach((ob) => {
    map.set(ob.id, (map.get(ob.id) || 0) + ob.w);
  });
  b.forEach((ob) => {
    map.set(ob.id, (map.get(ob.id) || 0) + ob.w);
  });
  let res = [];
  map.forEach((v, k) => {
    res.push({id: k, w: v});
  });
  res.sort((x, y) => x.w - y.w);
  return res;
};
