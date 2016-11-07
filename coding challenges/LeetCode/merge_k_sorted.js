
const mergeKLists = (lists) => {
  // time: O(N * k) where N is the total length of result
  // k is the length of lists
  let head = null;
  let last = null;
  // sort the lists with value at first
  lists = lists.filter((list) => list !== null);
  lists.sort((a, b) => b.val - a.val);
  while (lists.length) {
    // each time we pop the smallest one
    // and put that in result list, make next null
    // insert the next node in lists proper location
    let c = lists.pop();
    if (head) {
      last.next = c;
    } else {
      head = c;
    }
    last = c;
    let newList = c.next;
    last.next = null;

    if (newList === null) { continue; }

    for (let i=0; i<lists.length; i++) {
      if (lists[i].val < newList.val) {
        lists.splice(i, 0, newList);
        break;
      }
    }
    if (lists.length === 0 || !lists.includes(newList)) {
        lists.push(newList);
    }
  }
  return head;
};

// it could be better to merge two each time...?
