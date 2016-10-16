// URLify
// replace space to %20
// input "Mr John Smith     ", 13
// output "Mr%20John%20Smith"

const URLify = (str, len) => {
  // time : O(n)
  // space : O(n)
  return str.slice(0, len).split(" ").join("%20");
  // str = str.trim();
  // return str.replace(/ /g, '%20');
};

console.log(URLify("Mr John Smith     ", 13));
