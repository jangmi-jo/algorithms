// stack of plates
// implement SetOfStacks
// should be composed of several stacks and shold create a new stack once
// the previous one exceeds capacity.
// push, pop => should behave identically as if we have single stack
class SetOfStacks {
  constructor() {
    this.capacity = 3;
    this.stacks = [];
    this.stack = [];
    this.currentLength = 0;
  }
  push(val) {
    // O(1)
    this.stack.push(val);
    this.currentLength++;
    if (this.currentLength === this.capacity) {
      this.stacks.push(this.stack);
      this.stack = [];
      this.currentLength = 0;
    }
  }

  pop() {
    if (this.currentLength === 0) {
      if (this.stacks.length === 0) { return undefined; }
      this.stack = this.stacks.pop();
      this.currentLength = this.capacity;
    }
    this.currentLength--;
    return this.stack.pop();
  }
}

let set = new SetOfStacks();
set.push(1);
set.push(2);
set.push(3);
set.push(4);

console.log(set.pop());
console.log(set.pop());
console.log(set.pop());
console.log(set.pop());
console.log(set.pop());

console.log(set.stacks);
console.log(set.stack);
console.log(set.currentLength);
