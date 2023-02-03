const Candy = require('./candy')

class ShoppingBasket {
  constructor() {
    this.discount = 0;
    this.candies = [];
  };

  addItem(candy) {
    this.candies.push(candy);
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

// Creating two obj candy
const candy = new Candy('Mars', 4.99);
const anotherCandy = new Candy('Bounty', 5.00);
// Creating an obj shoppingBasket
const shoppingBasket = new ShoppingBasket;
// Adding the candies to basket
shoppingBasket.addItem(candy);
shoppingBasket.addItem(anotherCandy);
// Total price
console.log(shoppingBasket.getTotalPrice())
shoppingBasket.applyDiscount(3)
// Total price after discount
console.log(shoppingBasket.getTotalPrice())

// console.log(shoppingBasket.applyDiscount(50))