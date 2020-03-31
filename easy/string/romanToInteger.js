// https://leetcode.com/problems/roman-to-integer/submissions/

// example
// input "MCMXCIV"
// output : 1994

// second draft faster
/**
 * @param {string} s
 * @return {number}
 */

// example
// input "MCMXCIV"
// output : 1994

const romanToInt = (romans) => {
    // definitely need a running total of some sort?
    let result = 0;
    // need a map of each key and it's respect value
    const romanValueDictionary = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    // loop through it add the sum
    for (let i = 0; i < romans.length; i++) {
        const current = romanValueDictionary[romans[i]]
        const next = romanValueDictionary[romans[i+1]]
        if (current < next) {
            result = result + next - current
            i++
        } else {
            result += current
        }
    }
    return result;
};

// first draft very slow
var romanToInt = function(romans) {
    // definitely need a running total of some sort?
    let sum = 0;
    // need a map of each key and it's respect value
    const romanValueDictionary = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    // loop through it add the sum
    for (let i = 0; i < romans.length; i++) {
        // conditions for 4 and 9
        if (romans[i-1] && romans[i-1] === 'I' && romans[i] === 'V') {
            sum += 3
        } else if (romans[i-1] && romans[i-1] === 'I' && romans[i] === 'X') {
            sum += 8
        } else if (romans[i-1] && romans[i-1] === 'X' && romans[i] === 'L') {
            // conditions for 40 and 90
            sum += 30
        } else if (romans[i-1] && romans[i-1] === 'X' && romans[i] === 'C') {
            sum += 80
        } else if (romans[i-1] && romans[i-1] === 'C' && romans[i] === 'D') {
        // conditions for 400 and 900
            sum += 300
        } else if (romans[i-1] && romans[i-1] === 'C' && romans[i] === 'M') {
            sum += 800
        } else {
            sum += romanValueDictionary[romans[i]];
        }
    }
    return sum;
};