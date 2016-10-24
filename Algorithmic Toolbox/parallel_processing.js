const BinaryHeap = require('../Data Structure/BinaryHeap.js');

const parallelProcess = (m, arr) => {
  let machineQueue = new BinaryHeap();
  let assignedQueue = new BinaryHeap((a, b) => a[0] - b[0]);
  for (let i=0; i<m; i++) {
    machineQueue.insert(i);
  }
  let time = 0;
  let i = 0;
  while (i !== arr.length) {
    let currentM = machineQueue.extract();
    if (currentM !== undefined) {
      let assignTask = [time + arr[i], currentM];
      assignedQueue.insert(assignTask);
      console.log(`${currentM}, ${time}`);
      i++;
    } else {
      let nextTask = assignedQueue.extract();
      machineQueue.insert(nextTask[1]);
      time = nextTask[0];
      while (assignedQueue.peek() && assignedQueue.peek()[0] === time) {
        machineQueue.insert(assignedQueue.extract()[1]);
      }
    }
  }
};

parallelProcess(4, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
