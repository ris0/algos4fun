/**
 * @param {number[]} nums
 * @return {number}
 */

// https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
// Boyer-Moore Voting Algorithm
const majorityElement = (nums) => {
  let count = 0;
  let candidate = 0;
  for (let num of nums) {
      if (count === 0) {
          candidate = num
      }
      count += num === candidate ? 1 : -1
  }
  return candidate
}

// approach: hashmap but need to work out kinks
// issue: didn't work out how to return the highest count
// const majorityElement = (nums) => {
//     const counted = {};
//     if (nums.length <= 1) { return nums }
//     for (let i = 0; i < nums.length; i++) {
//         if (!counted[nums[i]]) {
//             counted[nums[i]] = 1

//         } else {
//             counted[nums[i]]++
          
//             if (!counted['high'] || counted['high'] < counted[nums[i]]) {
//                 counted['high'] = nums[i]
//             }
//         }
//     }
//     return counted['high']
  
// };
  
// majorityElement([2,2,1,1,1,2,2])