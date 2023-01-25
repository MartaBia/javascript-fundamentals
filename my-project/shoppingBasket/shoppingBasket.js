const Candy = require('./candy')

class ShoppingBasket {
  constructor() {
    this.candies = [];
  };

  addItem(candy) {
    this.candies.push(candy);
  };
  
  getTotalPrice() {
    let totalPrice = 0;
    this.candies.forEach((candy) => {
      totalPrice += candy.getPrice()
    });
    return totalPrice;
  };
};

const shoppingBasket = new ShoppingBasket
const candy = new Candy('Mars', 4.99);
shoppingBasket.addItem(candy)
console.log(shoppingBasket.getTotalPrice())

module.exports = ShoppingBasket;