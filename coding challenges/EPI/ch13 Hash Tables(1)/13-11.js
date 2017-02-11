/*
compute the average of the top three scores

given a file, each line has student id and score(0..100)
"student1 95"

return the best averaged(top three scores) student,
if the student has fewer than 3 scores, ignore the student

keep a map has student id as key
value as MinHeap which holds three scores
go through the file,
if the student already has three scores,
extract one, compare the new score with it,
insert the bigger score

go through the map
get the average keep the best one

*/

const Heap = require('./../ch11 Heaps(1)/11-1.js');


const computeAverage = (arr) => {
  // time: O(n) where n is the length of arr
  // space: O(n)
  const map = new Map();
  arr.forEach((el) => {
    let [studentId, score] = el.split(' ');
    score = Number(score);
    let heap = map.get(studentId);
    if (heap) {
      if (heap.store.length === 3) {
        let min = heap.extract();
        score = Math.max(score, min);
      }
      heap.insert(score);
    } else {
      map.set(studentId, new Heap([score]));
    }
  });
  let bestStudent = undefined;
  let average = undefined;
  map.forEach((v, k) => {
    if (v.store.length < 3) { return; }
    let newAver = v.store.reduce((a, e) => a + e);
    if (bestStudent === undefined || newAver > average) {
      bestStudent = k;
      average = newAver;
    }
  });
  return bestStudent;
};

const e = ["q 90", "w 80", "q 80", "q 60", "e 60", "w 70", "w 100"];
console.log(computeAverage(e));
