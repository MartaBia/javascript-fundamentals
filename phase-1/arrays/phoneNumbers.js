// Array operations - filter -:
const checkLength = (phoneNumber) => {
  if (phoneNumber.length <= 10) {
    return true
  } else {
    return false
  }
};

const filterLongNumbers = (phoneNumbersArray) => {
  console.log(phoneNumbersArray.filter(checkLength))
};

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

filterLongNumbers(numbers);
// [ '1763687364', '4763687363', '7867867862' ]

filterLongNumbers(['4763687363', '7867867862']); // no number to filter out
// [ '4763687363', '7867867862' ]

filterLongNumbers([])
// [ ]