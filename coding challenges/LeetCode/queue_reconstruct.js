const reconstructQueueNaive = (arr) => {
  let queue = [];
  let candidates = [];
  arr = arr.filter((p) => {
    if (p[1] === 0) { candidates.push(p); }
    return p[1] !== 0;
  });
  while (candidates.length) {
    candidates.sort((a, b) => b[0] - a[0]);
    queue.push(candidates.pop());
    arr = arr.filter((p) => {
      if (canComeNext(p, queue)) {
        candidates.push(p);
      } else {
        return true;
      }
    });
  }
  return queue;
};

const canComeNext = (p, queue) => {
  let count = 0;
  for (let i=0; i<queue.length; i++) {
    if (queue[i][0] >= p[0]) {
      count++;
      if (count > p[1]) { return false; }
    }
  }
  return p[1] === count;
};
