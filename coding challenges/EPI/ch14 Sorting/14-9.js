/*
implement a fast sorting algorithm for lists

should be a stable sort
do merge sort in place because it's list
in list, we reuse the links so it doesn't actually use
more space
*/

const fastSort = (list) => {
  if (list.length <= 1) {
    return list;
  }
  const left = new List();
  const right = new List();
  let link = list.head;
  let i = 0;
  while (link) {
    if (i < list.length / 2) {
      left.add(link);
    } else {
      right.add(link);
    }
    link = link.next;
    i++;
  }
  return merge(fastSort(left), fastSort(right));
};

const merge = (a, b) => {
  const res = new List();
  let aLink = a.head;
  let bLink = b.head;
  while (aLink || bLink) {
    if ((aLink && bLink && aLink.val < bLink.val) || !bLink) {
      res.add(aLink);
      aLink = aLink.next;
    } else {
      res.add(bLink);
      bLink = bLink.next;
    }
  }
  return res;
};
