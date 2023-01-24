// Declare a function executeAfterDelay which calls the given function after the given delay in seconds:
// const printHello = () => {
//   console.log('Hello!');
// }

// executeAfterDelay(5, printHello);

// // After about 5 seconds, you should see the message being logged

// Hello!

const printHello = () =>{
  console.log('Hello there!')
}


setTimeout(() => {
  return printHello();
}, 3000);
