// rectangle intersection
// write a program which tests if two rectanlges have intersection.
// If the intersection is non empty,
// return the rectangle formed by their intersection

// we are given 2 rectangles
//
// rectangle = > [top, bottom, left, right]
// a, b rectangles
// non-intersect conditions
// 1) a.right < b.left || b.right < a.left
//  => x-axis
// 2) a.top < b.bottom || b.top < a.bottom
//  => y-axis
// if 1 && 2 => return false
// else =>
// get all the x values => [a.left, a.right, b.left, b.right]
// sort the x values get the middle two
// do the same thing to y values

const intersection = (a, b) => {
  // time, space: O(1)
  if ((a[0] < b[1] || b[0] < a[1]) ||
      (a[3] < b[2] || b[3] < a[2])) {
    return false;
  }
  const xs = [a[2], a[3], b[2], b[3]].sort((i, j) => i - j);
  const ys = [a[0], a[1], b[0], b[1]].sort((i, j) => i - j);
  return [ys[2], ys[1], xs[1], xs[2]];
};

console.log(intersection([3, 1, 1, 3], [2, 0, 2, 4]));
