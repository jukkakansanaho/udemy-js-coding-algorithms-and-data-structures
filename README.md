_Udemy - The Coding Interview Bootcamp course | jukka.kansanaho@gmail.com | 2019-11-29_

# The Coding Interview Bootcamp: Algorithms + Data Structures

## WHAT

This is a study project for Udemy Coding Interview Bootcamp course by [Stephen Grider](https://www.udemy.com/user/sgslo/).

- Course page in Udemy: https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure
- Course code in GitHub: https://github.com/StephenGrider/AlgoCasts
- Course diagrams in GitHub: https://github.com/StephenGrider/AlgoCasts/tree/master/diagrams

### Course project target

- Ace your next Javascript coding interview by mastering data structures and algorithms.

### Technologies used in the course

- Frontend: Javascript
- Backend: NodeJS
- Testing/QA: Jest

## Preparation

- Make sure you have nodejs newer than v8: `node -v`
- Install Jest: `sudo npm install -g jest`

## HOWTO: test solution code

- Write your solution to the problem into `exercises/<problem_dir>/index.js`
- Run `jest exercises/<problem_dir>/ --watch`
- E.g. `jest exercises/palindrome/ --watch`

## HOWTO: debug solution code

- To run opt4() in a debugger-mode:
  1. Add `debugger;` line in the function code (index.js).
  2. Add function call (e.g. opt4('abcde')) to index.js outside the function
  3. Go to dir (where the index.js is)
  4. Run: `node inspect index.js`
  - => Debugger console opens
  5. Type: `repl` (to start interactive mode)
  6. Type the variable name
  - REPL return the current variable value
  7. Copy-paste the code inside the function
  - => E.g.: str.split('').reduce((rev, char) => char + rev, '');
  - REPL returns the output of the function.
