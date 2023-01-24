class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  };

  getName() {
    return this.name;
  };

  getPrice() {
    return this.price;
  };
};

class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem(candy) {
    return this.basket.concat(candy);
  };

  getTotalPrice() {
    let totalPrice = 0;
    this.basket.forEach((candy) => {
      totalPrice += candy.getPrice();      
    });
    return totalPrice;
  };
};

const candy = new Candy('Mars', 4.99);
console.log(candy.getName());
// 'Mars'
console.log(candy.getPrice());
// 4.99

const basket = new ShoppingBasket();
console.log(basket.getTotalPrice());
// 0
basket.addItem(candy);
console.log(basket.getTotalPrice());
// 4.99
basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));
console.log(basket.getTotalPrice());
// 12.97

module.exports = Candy;
module.exports = ShoppingBasket;