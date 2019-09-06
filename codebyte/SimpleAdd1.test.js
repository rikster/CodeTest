const simpleAdd1 = require('./SimpleAdd1');

test('simpleadd1 4 to equal 10', () => {
  expect(simpleAdd1(4)).toBe(10);
});

test('simpleadd1 10 to equal 55', () => {
  expect(simpleAdd1(10)).toBe(55);
});