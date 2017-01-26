/*
compute buildings with a sunset view
given a series of buildings which are in a straight line
in east to west order
returns the buildings that can view the sunset
[1, 2, 3, 4, 5] => [5]

1) iterate through the array from the last
2) store running max
3) record only buildings that are taller than running max

I see how we could use stack in this
but is that really helps?
how are we going to get the input?
If the input is already array/string, we are not always using O(n)
what else can that be..?
Book said this is brute-force approach, but it seems good to me (could use stack but not going to)
*/

const sunsetView = (buildings) => {
  // time, space: O(n) where n is the length of buildings
  let max;
  let res = [];
  for (let i=buildings.length-1; i>=0; i--) {
    if (max === undefined || buildings[i] > max) {
      res.push(i);
      max = buildings[i];
    }
  }
  return res;
};


console.log(sunsetView([1, 3, 2, 1, 2]));
