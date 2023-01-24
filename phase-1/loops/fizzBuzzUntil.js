const fizzBuzz = require('../conditionals/fizzBuzz');

const fizzBuzzUntil = (number) => {
  let i = 1;

  while (i <= number) {
    console.log(fizzBuzz(i))
    i += 1
  }
};

fizzBuzzUntil(15);