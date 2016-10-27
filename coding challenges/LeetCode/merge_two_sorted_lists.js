// 1->3->5
// 2->4
// 1-> 2-> 3-> 4->

const mergeTwoLists = (a, b) => {
  // time: O(a + b)
  // space: O(1)
  let head, last;
  while (a || b) {
    let newNode;
    if (a && b) {
      newNode = a.val < b.val ? a : b;
    } else if (a) {
      newNode = a;
    } else {
      newNode = b;
    }
    if (!head) {
      head = newNode;
      last = head;
    } else {
      last.next = newNode;
      last = newNode;
    }
    if (newNode === a) {
      a = a.next;
    } else {
      b = b.next;
    }
  }

  return head;

  // while (a && b) {
  //   let newNode = a.val < b.val ? a : b;
  //   if (!head) {
  //     head = newNode;
  //     last = head;
  //   } else {
  //     last.next = newNode;
  //     last = newNode;
  //   }
  //   if (a.val < b.val) {
  //     a = a.next;
  //   } else {
  //     b = b.next;
  //   }
  // }
  //
  // while (a) {
  //   last.next = a;
  //   last = a;
  //   a = a.next;
  // }
  //
  // while (b) {
  //   last.next = b;
  //   last = b;
  //   b = b.next;
  // }
  //
  // return head ? head : a;
};
