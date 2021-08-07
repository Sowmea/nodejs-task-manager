const {
  calculateTip,
  fahrenheitToCelcius,
  celsiusToFahrenheit,
  add
} = require('../src/math');

test('Should calculate total with tip', () => {
  const total = calculateTip(10, 0.3);

  expect(total).toBe(13);
});

test('Should calculate total without tip', () => {
  const total = calculateTip(10);

  expect(total).toBe(12.5);
});

test('Should convert 32F to 0C', () => {
  const temp = fahrenheitToCelcius(32);

  expect(temp).toBe(0);
});

test('Should convert 0C to 32F', () => {
  const temp = celsiusToFahrenheit(0);

  expect(temp).toBe(32);
});

// test('Async test demo', done => {
//   setTimeout(() => {
//     expect(1).toBe(2);
//     done();
//   }, 2000);
// });

test('Should add two numbers', done => {
  add(1, 3).then(result => {
    expect(result).toBe(4);
  });
  done();
});

test('Should add two numbers async/await', async () => {
  const sum = await add(1, 3);
  expect(sum).toBe(4);
});
