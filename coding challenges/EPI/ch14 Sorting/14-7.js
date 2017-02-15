/*
partitioning and sorting an array with many repeated entries

given an array of students objects
each student has an age, integer
rearrange the array so the same age student appear together
order doesn't matter

1) we could sort the array by the age
which takes time O(nlogn), space O(1)
2) store objects by age in map
which takes time and space O(n)
+ if we want it to be ordered, it will take more time to sort the age
*/

const sortByAge = (arr) => {
  arr.sort((a, b) => a.age - b.age);
};

const storeInMap = (arr) => {
  const map = new Map();
  arr.forEach((s) => {
    if (map.get(s.age) === undefined) {
      map.set(s.age, []);
    }
    map.get(s.age).push(s);
  });
  arr = [];
  for (let r of map.values()) {
    r.forEach((s) => {
      arr.push(s);
    });
  }
  return arr;
};
