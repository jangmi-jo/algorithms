// Sort Stack : sort a stack => smallest el is on the top.
// one additional temp stack.
// stack has 4 funcs, push/pop/peek/isEmpty

class Stack {
  constructor() {
    this.store = [];
  }

  push(val) {
    this.store.push(val);
  }

  pop() {
    return this.store.pop();
  }

  peek() {
    return this.store[this.store.length - 1];
  }

  isEmpty() {
    return this.store.length === 0;
  }
}


const sortStack = (stack) => {
  let temp = new Stack();
  temp.push(stack.pop());
  let current;
  while (!stack.isEmpty()) {
    if (stack.peek() >= temp.peek()) {
      temp.push(stack.pop());
    } else {
      current = stack.pop();
      while (current < temp.peek()) {
        stack.push(temp.pop());
      }
      temp.push(current);
    }
  }
  while (!temp.isEmpty()) {
    stack.push(temp.pop());
  }
};

let stack = new Stack();
[1, 2, 3, 4].forEach((n) => {
  stack.push(n);
});

sortStack(stack);

console.log(stack);

// [8, 6, 4, 3, 2, 1]
//
// s = [3, 4]
// t = [1, 2, 6, 8, ]
// // temp to be sorted from smallest to biggest.
// // [1, 2, 3,...]
// current = 1
