/**
 * @param {number} n
 * @return {boolean}
 * 
 * https://leetcode.com/problems/happy-number/
 * 
 * break down the problem and understand its bounds
 * by identifying a pattern with the calculation in the most extreme of cases within each interval:
 * 9, 99, 999, 9999, etc
 * 
 * we are able to declare that a given number and the change between this, before, and next
 * will always go back down no matter
 * 
 * in fact we can also assume that if a pattern of numbers return to a number that has been used already
 * it will be in a cycle
 * therefore you can assume that it will never return to 1
 */

const isHappy = (n) => {
  const seen = { n }
  const newNum = nextNumber(n);

  if (!seen[newNum]) {
    nextNumber(n);
  } else {
    return false;
  }

  function nextNumber() {
    const digits = n.toString().split('');
    const sumReducer = (accum, curr) => accum + curr;
    let temp = [];
    
    digits.forEach((digit) => {
      const integer = parseInt(digit)
      const squareValue = Math.pow(integer, 2)
      temp.push(squareValue)
    })

    const result = temp.reduce(sumReducer)
    return result
  }
  // for (let i = 0; i < digits.length; i++) {
  //   const squareValue = Math.pow(digits[i])
  //   temp.push(squareValue)
  // }
  
};