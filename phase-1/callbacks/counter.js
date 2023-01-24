// Callbacks
let counter = 0

function increment() {
  counter ++
  console.log(counter)
};

setInterval(increment, 2000)

// function increment2(c) {
//   return c + 1;
// };

// let count = 0;
// setInterval(() => {
//   count = increment2(count);
//   console.log(count);
// }, 2000)