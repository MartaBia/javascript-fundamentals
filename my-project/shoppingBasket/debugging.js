const Candy = require('./candy')

class ShoppingBasket {
  constructor() {
    this.discount = 0;
    this.candies = [];
  };

  addItem(candy) {
    this.candies.concat(candy);
  };

  applyDiscount(discount) {
    this.discount = discount;
  };

  getTotalPrice() {
    let totalPrice = 0;
    this.candies.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return totalPrice - this.discount;
  };
}

const candy = new Candy('Mars', 4.99);
const anotherCandy = new Candy('Bounty', 5.00);
const shoppingBasket = new ShoppingBasket;
shoppingBasket.addItem(candy);
shoppingBasket.addItem(anotherCandy);
console.log(shoppingBasket.getTotalPrice())

// console.log(shoppingBasket.applyDiscount(50))