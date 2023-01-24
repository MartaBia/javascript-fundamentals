// Array operations - Map -:
const generateMessages = (name) => {
  return `Hi ${name}! 50% off our best candies for you today!`;
};

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const personalisedMessages = names.map(generateMessages);
console.log(personalisedMessages);