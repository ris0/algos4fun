// string manipulation
// https://leetcode.com/problems/defanging-an-ip-address/submissions/

// third draft
const defangIPaddr = (address) => {
    let result = '';

    for (let i = 0; i < address.length; i++) {
        const isPeriod = address[i] === '.';
        isPeriod ? result += '[.]' : result += address[i]
    }
    return result;
}

// second draft 
const defangIPaddr = address => address.replace(/\./g, '[.]')

// original first draft
/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = (address) => {
    const matchingPattern = /\./gi;
    const replacePattern = '[.]';
    const addressArray = address.split('')
    for (let i = 0; i < addressArray.length; i++) {
        if (addressArray[i] === '.') {
            // address[i].replace(matchingPattern, '[.]')
            addressArray[i] = replacePattern;
        }
    }
    return addressArray.join('')
};