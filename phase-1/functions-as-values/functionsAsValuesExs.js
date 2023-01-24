const lowercaseMessage = (message) => {
  return message.toLowerCase()
};

const transform = (message, lowercaseFunction) => {
  return lowercaseFunction(message)
};

console.log(transform("NOT SHOUTING", lowercaseMessage));