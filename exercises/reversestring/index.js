// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function opt0(str) {
  // Split string into an array of letters.
  const splittedString = str.split('');

  // Reverse the order of letters in the Array
  const reversedArray = splittedString.reverse();

  // Join reversed array back into a string (of letters).
  const joinedArray = reversedArray.join('');

  return joinedArray;
}

// All in one line of code.
function opt1(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

function opt2(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
    //debugger;
  }

  return reversed;
}

function opt3(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

function opt4(str) {
  //debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}

// To run opt4() in a debugger-mode:
// 1) add 'debugger' in the function
// 2) add function call (e.g. opt4('abcde'))
// 3) go to dir (where the index.js is)
// 4) Run: node inspect index.js
// => Debugger console opens
// 5) Type: repl (to start interactive mode)
// 6) Copy-paste th ecode inside the function
// => E.g.: str.split('').reduce((rev, char) => char + rev, '');
// REPL returns the output of the function.
//opt4('abcde');
//opt2('abcde');

module.exports = {
  opt0,
  opt1,
  opt2,
  opt3,
  opt4,
};
