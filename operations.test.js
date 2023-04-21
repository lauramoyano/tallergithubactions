const {sum}  = require('./operations.js');
const {res}  = require('./operations.js');
const {mul}  = require('./operations.js');


test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

test('substract two numbers', () => {
  expect(res(2, 1)).toBe(1);
});

test('multiply two numbers', () => {
  expect(mul(1, 2)).toBe(2);
});
