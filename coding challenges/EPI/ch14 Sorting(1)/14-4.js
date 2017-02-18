/*
render a calendar

given a set of events
return the max number of intersections

we only care about how many events are happening at that moment
and we don't have to know the other times not on the events
we can simply add one when any event starts
and subtract one when any event ends

get two arrays
sort them
s = [1, 2, 4, 6, 8, 9, 11, 12, 14]
e = [5, 5, 7, 9, 10, 13, 15, 15, 17]
keep current and max both starts at 0
keep i start from s[0] to e[-1]
keep both pointers on each array
increment i by one
if s[sLoc] === i, increment current, sLoc++
if e[eLoc] === i, decrement current, eLoc++
if current is bigger than max, update max

*/


const maxConcurrentEvents = (arr) => {
  // time: O(nlogn), space: O(n)
  const s = [];
  const e = [];
  arr.forEach((el) => {
    s.push(el[0]);
    e.push(el[1]);
  });
  s.sort((a, b) => a - b);
  e.sort((a, b) => a - b);
  let sLoc = 0, eLoc = 0,
      max = 0, current = 0,
      i = s[0];
  while (i <= e[e.length - 1]) {
    while (s[sLoc] === i) {
      current++;
      sLoc++;
    }
    while (e[eLoc] === i) {
      current--;
      eLoc++;
    }
    if (current > max) {
      max = current;
    }
    i++;
  }
  return max;
};

const e = [[1, 5], [2, 7], [4, 5], [6, 10],
[8, 9], [9, 17], [11, 13], [14, 15], [12, 15]];
console.log(maxConcurrentEvents(e));
