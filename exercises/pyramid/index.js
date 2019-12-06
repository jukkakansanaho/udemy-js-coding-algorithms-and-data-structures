// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Option-0:
// function pyramid(n) {
//   for (let row = 1; row <= n; row++) {
//     let stair = '';
//     let columns = 2 * n - 1;
//
//     for (let i = 1; i <= (columns - (2 * row - 1)) / 2; i++) {
//       stair += ' ';
//     }
//     for (j = 1; j <= 2 * row - 1; j++) {
//       stair += '#';
//     }
//     for (let k = 1; k <= (columns - (2 * row - 1)) / 2; k++) {
//       stair += ' ';
//     }
//     console.log(stair);
//   }
// }

// Option-1:
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//
//   for (let row = 0; row < n; row++) {
//     let level = '';
//
//     for (column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

// Option-2:
function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}
module.exports = pyramid;
