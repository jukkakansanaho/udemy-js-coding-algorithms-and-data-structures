// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Option-0:
// function anagrams(stringA, stringB) {
//   const charMapA = {};
//   const charMapB = {};
//
//   let sA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   let sB = stringB.replace(/[^\w]/g, '').toLowerCase();
//
//   for (let char of sA) {
//     if (charMapA[char]) {
//       charMapA[char]++;
//     } else {
//       charMapA[char] = 1;
//     }
//   }
//   for (let char of sB) {
//     if (charMapB[char]) {
//       charMapB[char]++;
//     } else {
//       charMapB[char] = 1;
//     }
//   }
//
//   if (Object.keys(charMapA).length === Object.keys(charMapB).length) {
//     for (let key in charMapA) {
//       if (charMapA[key] === charMapB[key]) {
//         continue;
//       } else {
//         return false;
//       }
//     }
//     return true;
//   } else {
//     return false;
//   }
// }
// -----------
// Option-1:
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }
// -----------
// Option-2:
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = anagrams;
