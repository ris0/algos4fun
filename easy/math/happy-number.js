/**
 * @param {number} n
 * @return {boolean}
 * 
 * https://leetcode.com/problems/happy-number/
 */

const isHappy = function(n) {
  // 19
  // [1, 9]
  const digits = n.split('');
  const sumReducer = (accum, curr) => accum + curr;
  let temp = [];
  
  for (let i = 0; i < digits.length; i++) {
    const squareValue = Math.pow(digits[i])
    temp.push(digits[i])
  }

  let sum = temp.reduce(sumReducer);
  return sum

  
  
  
};