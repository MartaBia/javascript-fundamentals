// Old syntax to export:
const fizzBuzz = (number) => {
  if ((number % 3 == 0) && (number % 5 == 0)) {
    return 'FizzBuzz';
  } else if (number % 3 == 0) {
    return 'Fizz';
  } else if (number % 5 == 0) {
      return 'Buzz';
  } else {
    return number;
  }
};

// New syntax, not working with export:
// function fizzBuzz(number) {
//   if ((number % 3 == 0) && (number % 5 == 0)) {
//     return 'FizzBuzz';
//   } else if (number % 3 == 0) {
//     return 'Fizz';
//   } else if (number % 5 == 0) {
//       return 'Buzz'
//   } else {
//     return number
//   }
// };

console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))
console.log(fizzBuzz(8))

module.exports = fizzBuzz;