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

// fastest, floyd's cycle finding
var isHappy = function(n) {
  function getNext(n){
      return (n+"").split("").reduce((a,c)=>Number(a)+Number(c*c), 0);
  }
  
  let slow = n;
  let fast = getNext(n);
  while(fast!=1 && slow!=fast){
      slow = getNext(slow);
      fast = getNext(getNext(fast));
  }
  return fast == 1;
};

 // better approach?
// const isHappy = (n) => {
//   var seen = {};
//   while (n !== 1 && !seen[n]) {
//       seen[n] = true;
//       n = sumOfSquares(n);
//   }
//   return n === 1;
// };

// function sumOfSquares(numString) {
//   return numString.toString().split('').reduce((sum, num) => sum + Math.pow(num, 2), 0);
// }

 // half a solution....
// const isHappy = (n) => {
//   const seen = { n }
//   const newNum = nextNumber(n);

//   if (!seen[newNum]) {
//     nextNumber(n);
//   } else {
//     return false;
//   }

//   function nextNumber() {
//     const digits = n.toString().split('');
//     const sumReducer = (accum, curr) => accum + curr;
//     let temp = [];
    
//     digits.forEach((digit) => {
//       const integer = parseInt(digit)
//       const squareValue = Math.pow(integer, 2)
//       temp.push(squareValue)
//     })

//     const result = temp.reduce(sumReducer)
//     return result
//   }
// };