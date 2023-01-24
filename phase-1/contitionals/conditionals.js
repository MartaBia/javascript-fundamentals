// First workig version:
function getNumberSign(num) {
  if (num > 0) {
    console.log('Positive');
  } else if (num < 0) {
    console.log('Negative');
  } else {
    console.log('Zero');
  }
};

getNumberSign(1);
getNumberSign(0);
getNumberSign(-1);

// Second version:
function getNumberSign(num) {
  if (num > 0) {
    return 'Positive';
  } else if (num < 0) {
    return 'Negative';
  } else {
    return 'Zero';
  }
};

console.log(getNumberSign(1));
console.log(getNumberSign(0));
console.log(getNumberSign(-1));
