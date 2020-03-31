/**
 * @param {string} s
 * @return {boolean}
 example: { [ [ ] { } ] } ( ) ( )
 */
const isValid = (str) => {
    const stack = [];
    const validBrackets = {
        ')': '(',
        '}': '{',
        ']': '[' 
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i])
        }
        if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
            if (!stack.length) {
                return false;
            } else {
                const lastOpeningBracket = stack[stack.length - 1]
                // valid if current character is the closing bracket of the last opening bracket
                const isValidClosingBracket = lastOpeningBracket === validBrackets[str[i]]
                if (isValidClosingBracket) {
                    stack.pop();
                } else {
                    return false
                }
            }
        }
    }
    return stack.length ? false : true
};