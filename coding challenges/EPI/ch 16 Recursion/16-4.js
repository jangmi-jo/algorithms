/*
generate the power set

power set of a set S is the set of all subsets of S
given a set, return its power set

the problem said given a set but the set is just distinct array
so I'm going to use array instead

strategy is, writing down how the result look like
[1] => [[], [1]]
[1, 2] => [[], [1], [2], [1, 2]]
[1, 2, 3] => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
the next pattern is exactly same as adding the new element in each prev

if it has duplicated element?
when the duplicated element's turn, we can add the result only if
the result array includes multiple elements in it
[1, 2, 3, 2] => [same as above, [2, 2], [1, 2, 2], [2, 2, 3], [1, 2, 2, 3]]
like that
I think we need to know how many times all the elements are in the array
we can make hashmap with count

*/

const generatePowerSet = (arr) => {
  if (arr.length === 0) {
    return [[]];
  }
  const res = [];
  const last = arr.pop();
  const prev = generatePowerSet(arr);
  prev.forEach((p) => {
    res.push(p.concat(last));
  });
  return res.concat(prev);
};


console.log(generatePowerSet([1, 2, 3]));
