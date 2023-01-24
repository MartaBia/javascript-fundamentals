// Old syntax:
const multiply = (num1, num2) => {
  return num1 * num2;
};

// new syntax:
// function multiply(num1, num2) {
//   return num1 * num2;
// };

// console.log(multiply(2, 2));

module.exports = multiply;

// Exs:
// From node, require and call the functions add and multiply to calculate and print the following: 2 * (4 + 4). 
// You should get the correct result (16).


// Exported to node: - Not working woth new syntax -
// const add = require('./add');
// const multiply = require('./multiply')
// console.log(multiply(4, add(2, 2)))