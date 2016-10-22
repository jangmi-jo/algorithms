class ListNode {
  constructor(val) {
    this.val = val;
    this.next = undefined;
  }
}

const modifyList = (a, b) => {
  let maxL = 0;
  while (a || b) {
    if (b.next && !a.next) {
      a.next = new ListNode(0);
    }
    if (a.next && !b.next) {
      b.next = new ListNode(0);
    }
    a = a.next;
    b = b.next;
    maxL++;
  }
  return maxL;
};

const addTwoNumbers = (a, b) => {
  // go through both if one is shorter, add 0 nodes
  modifyList(a, b);
  let carry, last;
  let currentA = a;
  // loop both, add them and save in a, transfer carry to next
  // save the last node for the last carry
  while (currentA) {
    currentA.val += b.val;
    if (carry) {
      currentA.val += carry;
      carry = undefined;
    }
    if (currentA.val > 9) {
      carry = Math.floor(currentA.val / 10);
      currentA.val = currentA.val % 10;
    }
    if (!currentA.next) { last = currentA; }
    currentA = currentA.next;
    b = b.next;
  }
  // take care of the last carry if there is any
  // using last node that we saved above
  if (carry) {
    last.next = new ListNode(carry);
  }
  return a;
};

let two = new ListNode(2);
let four = new ListNode(4);
let three = new ListNode(9);
two.next = four;
four.next = three;

let five = new ListNode(5);
let six = new ListNode(6);
five.next = six;

let res = addTwoNumbers(two, five);
