const ShoppingBasket = require('./shoppingBasket')

describe('ShoppingBasket', () => {
  it('returns 0 when called getTotalPrice with no candies in the basket', () => {
    let shoppingBasket = new ShoppingBasket();
    expect(shoppingBasket.getTotalPrice()).toBe(0);
  }); 

  it('returns the price of one candy inserted', () => {
    let shoppingBasket = new ShoppingBasket();
    const fakeCandy = { getPrice: () => 4.99 };
    shoppingBasket.addItem(fakeCandy)

    expect(shoppingBasket.getTotalPrice()).toBe(4.99);

    shoppingBasket.addItem({ getPrice: () => 3.99 });
    shoppingBasket.addItem({ getPrice: () => 3.99 });

    expect(shoppingBasket.getTotalPrice()).toBe(12.97);
  });
});