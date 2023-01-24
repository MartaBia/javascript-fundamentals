// Declare a function printHello which prints a greeting message.
// Use setTimeout to execute this function after a 3 seconds delay.

const printHello = () => {
  console.log('Hello!');
}

const executeAfterDelay = (seconds, printFuncion) => {
  setTimeout(() => {
    return printHello();
  }, seconds);
}; 

executeAfterDelay(5000, printHello);