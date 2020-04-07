/**
 * @param {number} n
 * @return {number}
 */

// var countPrimes = function(n) {
//   const nums = [...Array(n).keys()].slice(2);
//   for (let i = 0; i <= Math.floor(Math.sqrt(n)); i++) {
//     if (nums[i]) {
//       for (let j = i + nums[i]; j <= n; j += nums[i]) {
//         nums[j] = undefined; // Sieve of Eratosthenes
//       }
//     }
//   }
//   return nums.filter(n => n).length;
// };

// faster approach
var countPrimes = (n) => {
  const nums = new Array(n).fill(true);
  const sqrtEnd = Math.floor(Math.sqrt(n));
  // gets rid of 0 and 1
  nums[0] = false;
  nums[1] = false;

  for (let i = 2; i <= sqrtEnd; i++) {
    if (nums[i]) {
      for (let j = i * i; j <= n; j += i) {
        nums[j] = false; // Sieve of Eratosthenes
      }
    }
  }

  return nums.filter(n => n).length;
};