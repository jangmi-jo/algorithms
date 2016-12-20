/*
enumerate primes to n

build an array with n+1 length
use the array's index as primes
set 0, 1 to false
start from 2, if the index of array is not false,
set it to true and set all of its multiplications to false
The indices of remained true in array are primes
*/

const enumeratePrimes = (n) => {
  let primes = new Array(n+1);
  primes[0] = false;
  primes[1] = false;
  let i = 2;
  for (let j=i; j<n+1; j++) {
    if (primes[j] === false) { continue; }
    primes[j] = true;
    let k = 2;
    while (k * j <= n+1) {
      primes[k*j] = false;
      k++;
    }
  }
  return primes.reduce((a, e, idx) => {
    if (e) { a.push(idx); }
    return a;
  }, []);
};


console.log(enumeratePrimes(11));
