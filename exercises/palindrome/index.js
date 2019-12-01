// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Option-0:
// function palindrome(str) {
//   var splittedString = str.split('');
//   var reversedArray = splittedString.reverse();
//   var joinedArray = reversedArray.join('');
//
//   if (joinedArray == str) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Option-1:
// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');
//
//   return reversed === str;
// }

// Option-2:
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
module.exports = palindrome;
