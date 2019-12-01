// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// Option-1:
function fizzBuzz(n) {
  for (i = 1; i <= n; i++) {
    // Is the number multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else {
      // Is the number multiple of 3?
      if (i % 3 === 0) {
        console.log('fizz');
      }
      // Is the number multiple of 5?
      else if (i % 5 === 0) {
        console.log('buzz');
      } else {
        console.log(i);
      }
    }
  }
}

// // Option-2:
// function fizzBuzz(n) {
//   for (i = 1; i <= n; i++) {
//     output = '';
//     if (i % 3 != 0 && i % 5 != 0) {
//       console.log(i);
//     } else {
//       if (i % 3 === 0) {
//         output += 'fizz';
//       }
//       if (i % 5 === 0) {
//         output += 'buzz';
//       }
//       console.log(output);
//     }
//   }
// }

module.exports = fizzBuzz;
