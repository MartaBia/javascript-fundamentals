// Class:
const User = require('./user')

class UserBase {
  constructor(users) {
    this.users = users
  };

  count() {
    return this.users.length;
  };

  getNames() {
    let namesArray = this.users.map((user) => {
      return user.getName();
    });
    return namesArray;
  };

  getIntroductions() {
    let introductionsArray = this.users.map((user) => {
      return user.getIntroduction();
    });
    return introductionsArray
  };
};

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

const userBase = new UserBase(users);
console.log(userBase.count());
// 3
console.log(userBase.getNames())
// // [ 'Uma', 'Josh', 'Ollie' ]
console.log(userBase.getIntroductions())
// [
//   'Hi, my name is Uma',
//   'Hi, my name is Josh',
//   'Hi, my name is Ollie'
// ]