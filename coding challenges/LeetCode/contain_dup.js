const containsDuplicate = (arr) => {
  let map = new Map();
  for (let i=0; i<arr.length; i++) {
    if (map.get(arr[i])) {
      return true;
    } else {
      map.set(arr[i], true);
    }
  }
  return false;
};
