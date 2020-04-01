/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 
 Algorithm is called:  'Floyd's Tortoise and Hare'
 
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Approach 3: Two pointers
const hasCycle = head => {
  let slow = head;
  let fast = head;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      return true
    }
  }

  return false
}

// Approach 2: Two pointers - Doesn't work
// const hasCycle = (head) => {
//   if (head === null || head.next === null) {
//       return false;
//   }
//   let slow = head;
//   let fast = head.next;
  
//   while (slow !== fast) {
//       if (fast === null || fast.next === null) {
//           return false
//       }
//       slow = slow.next
//       fast = fast.next.next;
//   }
//   return false;
// }

// Approach 1: attempt at hash table?
// const hasCycle = (head) => {
//   let nodesVisited = new Map();
//   while (head) {
//     if (nodesVisited.has(head)) {
//       return true;
//     } else {
//       nodesVisited.set(nodesVisited)
//     }
//       head = head.next
//   }
//   return false;
// };