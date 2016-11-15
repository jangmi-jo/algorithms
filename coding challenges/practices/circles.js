// naive => double looping and compare each one

// we have an array of circles
// we want to check if any of two circles collapse
// do better than O(N**2)

// idea: between two circles,
// collapsing happens when distance (from first one's center to the second one's center) is smaller than the sum of both radius.
// check collape helper function

// class Circle
// x => integer
// y => integer
// radius => integer

// sort the arr y + radius
// iterate through the arr and check collision with right next one


const isCollapsing = (a, b) => {
  let dist = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  return dist < a.radius + b.radius;
};

const circleCheck = (arr) => {
  // time: O(nlogn)
  // space: O(1)
  arr.sort((a, b) => (a.y + a.radius) - (b.y + b.radius));
  for (let i=0; i<arr.length - 1; i++) {
    if (isCollapsing(arr[i], arr[i+1])) {
      return true;
    }
  }
  return false;
};
