// to be resolved

const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if ((phoneNumber.toString().length) == validLength) {
    return true;
  } else {
    return false;
  }
};

console.log(isValidLength(00112233445))
console.log(isValidLength(001))
console.log(isValidLength(0))