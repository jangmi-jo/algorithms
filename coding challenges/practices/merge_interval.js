// we could check each with all others
// which would take O(N**2)

// keep an arr of sets
// go through the arr
// if it doesn't overlap with other sets,
// make disjoint set with each interval
// put in sets

// sort the arr by end point first then start point
// for duplicate start point
// iterate the arr and see if current interval
// overlaps with the one before
// checking simply if the next one's start is bigger than the one before
// if it is, it doesn't overlap
// so put it in result
// if it isn't, it overlaps
// so merge it with earlier one
// starting won't be updated since we sorted
// update ending point by taking bigger end in both end

const merge = (arr) => {
  // time: O(nlogn)
  // space: O(1)
  if (arr.length <= 1) { return arr; }
  arr.sort((a, b) => a.end - b.end);
  arr.sort((a, b) => a.start - b.start);
  let res = [arr[0]];
  for (let i=1; i<arr.length; i++) {
    let lastEnd = res[res.length - 1].end;
    if (lastEnd < arr[i].start) {
      res.push(arr[i]);
    } else {
      res[res.length - 1].end = Math.max(arr[i].end, lastEnd);
    }
  }
  return res;
};
