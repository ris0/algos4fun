/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 // cleaner solution:
function isAnagram(s, t) {
	const map = {};
	s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
	t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
	return Object.keys(map).every(k => map[k] === 0);
}

 // first attempt
const isAnagram = (s, t) => {
  const inputLetters = hashLetters(s);
  const outputLetters = hashLetters(t);

  if (Object.keys(inputLetters).length !== Object.keys(outputLetters).length) { return false }

  for (let char in inputLetters) {
    if (outputLetters[char] !== inputLetters[char]) {
        return false
    }
  }
    
  return true;
  
  function hashLetters(str) {
      const letters = {};
      
      for (let i = 0; i < str.length; i++) {
          if (!letters[str[i]]) {
              letters[str[i]] = 1;
          } else {
              letters[str[i]]++;
          }
      }
      
      return letters;
  }
};