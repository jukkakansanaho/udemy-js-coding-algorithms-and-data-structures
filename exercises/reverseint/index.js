// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Option-0:
// function reverseInt(n) {
//   var absint = Math.abs(n);
//   var absstr = String(absint);
//   var absrevstr = absstr
//     .split('')
//     .reverse()
//     .join('');
//   var absrevint = parseInt(absrevstr);
//
//   if (n < 0) {
//     absrevint = absrevint * -1;
//   }
//
//   return absrevint;
// }

// Option-2:
function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}
module.exports = reverseInt;
