// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Option-0:
// function capitalize(str) {
//   let str_arr = str.split(' ');
//   let str_arr_mod = [];
//
//   for (let word of str_arr) {
//     let first_letter = word[0].toUpperCase();
//     let the_rest = word.slice(1);
//     let word_mod = first_letter + the_rest;
//     str_arr_mod.push(word_mod);
//   }
//   return str_arr_mod.join(' ');
// }

// Option-1:
function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

// Option-2:
// function capitalize(str) {
//   let result = str[0].toUpperCase();
//
//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//
//   return result;
// }

module.exports = capitalize;
