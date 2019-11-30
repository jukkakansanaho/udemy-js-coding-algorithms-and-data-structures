const reverse = require('./index');

// Version-0
test('Reverse.opt0 function exists', () => {
  expect(reverse.opt0).toBeDefined();
});

test('Reverse.opt0 reverses a string', () => {
  expect(reverse.opt0('abcd')).toEqual('dcba');
});

test('Reverse.opt0 reverses a string', () => {
  expect(reverse.opt0('  abcd')).toEqual('dcba  ');
});

// Version-1
test('Reverse.opt1 function exists', () => {
  expect(reverse.opt1).toBeDefined();
});

test('Reverse.opt1 reverses a string', () => {
  expect(reverse.opt1('abcd')).toEqual('dcba');
});

test('Reverse.opt1 reverses a string', () => {
  expect(reverse.opt1('  abcd')).toEqual('dcba  ');
});

// Option-2
test('Reverse.opt2 function exists', () => {
  expect(reverse.opt2).toBeDefined();
});

test('Reverse.opt2 reverses a string', () => {
  expect(reverse.opt2('abcd')).toEqual('dcba');
});

test('Reverse.opt2 reverses a string', () => {
  expect(reverse.opt2('  abcd')).toEqual('dcba  ');
});

// Version-3
test('Reverse.opt3 function exists', () => {
  expect(reverse.opt3).toBeDefined();
});

test('Reverse.opt3 reverses a string', () => {
  expect(reverse.opt3('abcd')).toEqual('dcba');
});

test('Reverse.opt3 reverses a string', () => {
  expect(reverse.opt3('  abcd')).toEqual('dcba  ');
});

// Version-4
test('Reverse.opt4 function exists', () => {
  expect(reverse.opt4).toBeDefined();
});

test('Reverse.opt4 reverses a string', () => {
  expect(reverse.opt4('abcd')).toEqual('dcba');
});

test('Reverse.opt4 reverses a string', () => {
  expect(reverse.opt4('  abcd')).toEqual('dcba  ');
});
