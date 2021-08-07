const calculateTip = (total, tipPercent = 0.25) => total + total * tipPercent;

const fahrenheitToCelcius = temp => (temp - 32) / 1.8;

const celsiusToFahrenheit = temp => temp * 1.8 + 32;

const add = async (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject('Numbers must be non negative');
      }
      resolve(a + b);
    }, 2000);
  });
};

module.exports = {
  calculateTip,
  fahrenheitToCelcius,
  celsiusToFahrenheit,
  add
};
