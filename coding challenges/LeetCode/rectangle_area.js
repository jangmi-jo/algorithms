const computeArea = (aleft, abottom, aright, atop, bleft, bbottom, bright, btop) => {
  // time, space: O(1)
  let aArea = (aright - aleft) * (atop - abottom);
  let bArea = (bright - bleft) * (btop - bbottom);
  if (aright < bleft || abottom > btop || aleft > bright || bbottom > atop) {
    return aArea + bArea;
  } else {
    let xs = [aleft, aright, bleft, bright];
    let ys = [atop, abottom, btop, bbottom];
    xs.sort((a, b) => a - b);
    ys.sort((a, b) => a - b);
    return aArea + bArea - ((xs[2] - xs[1]) * (ys[2] - ys[1]));
  }
};
