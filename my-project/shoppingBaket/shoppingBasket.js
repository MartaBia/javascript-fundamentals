class ShoppingBasket {
  constructor() {
    this.candies = [];
  };

  addItem(candy) {
    this.candies.concat(candy);
  };
  
  getTotalPrice() {
    totalPrice = 0
    this.candies.forEach(candy => 
      totalPrice += candy.getPrice
    );
    return totalPrice
  };
};

module.export = ShoppingBasket;