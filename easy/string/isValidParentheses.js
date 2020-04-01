/**
 * @param {string} s
 * @return {boolean}
 
 example: { [ [ ] { } ] } ( ) ( )
 */

// third draft
var isValid = function(s) {

    let stack = [];  
    s = s.split('');
    const BRACKETS = {
      '{' : '}',
      '[' : ']',
      '(' : ')',
    }
    
    for(e of s) {
      
      // if last item on stack is opposite parenthesis, pop from stack
      if (BRACKETS[stack[stack.length - 1]] === e) {
        stack.pop()
      } else {
        // if we push closing, then it's invalid, return false
        if (e ===')' || e ==='}' || e ==='}') {return false;}
        
        // if not, we are pushing one of the opening to the stack
        stack.push(e);
      }   
    }
    
    // if stack is empty, state is valid
    return stack.length === 0; 
      
  };
  
  // second draft
  // const isValid = (s) => {
  //     const stack = [];
  //     const openBrackets = '({[';
  //     const closeBrackets = ')}]';
  //     for (const char of s) {
  //         let index = openBrackets.indexOf(char);
  //         if (index !== -1) {
  //             stack.push(index);
  //         } else {
  //             index = closeBrackets.indexOf(char);
  //             if (stack[stack.length - 1] === index) {
  //                 stack.pop(char);
  //             } else {
  //                 return false;
  //             }
  //         }
  //     }
  //     return stack.length === 0;
  // };
  
  // first draft
  // const isValid = (str) => {
  //     const stack = [];
  //     const validBrackets = {
  //         ')': '(',
  //         '}': '{',
  //         ']': '[' 
  //     }
  
  //     for (let i = 0; i < str.length; i++) {
  //         if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
  //             stack.push(str[i])
  //         }
          
  //         if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
  //             if (!stack.length) {
  //                 return false;
  //             } else {
  //                 const lastOpeningBracket = stack[stack.length - 1]
  //                 // valid if current character is the closing bracket of the last opening bracket
  //                 const isValidClosingBracket = lastOpeningBracket === validBrackets[str[i]]
  //                 if (isValidClosingBracket) {
  //                     stack.pop();
  //                 } else {
  //                     return false
  //                 }
  //             }
              
  //         }
  //     }
  
  //     return stack.length ? false : true
  // };