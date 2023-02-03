const fizzBuzz = require('./fizzBuzz')

describe('fizzBuzz', () => {
    it('returns fizz if number is a multiple of 3', ()=> {
        expect(fizzBuzz(3)).toBe('Fizz')
    });
    it('returns buzz if number is a multiple of 5', () => {
      expect(fizzBuzz(5)).toBe('Buzz')
    });
    it('returns FIZZBUZZ if number is a multiple of 5', () => {
        expect(fizzBuzz(15)).toBe('FIZZBUZZ')
    });
    it('returns just a number if is not a multiple either of 3 or 5', () => {
      expect(fizzBuzz(8)).toBe(8)
    });
});