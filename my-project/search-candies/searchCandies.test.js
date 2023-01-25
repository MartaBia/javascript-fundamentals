const searchCandies = require('./searchCandies')

describe('searchCandies', () => {
    it('returns candies with prefix Ma and price lower than 10', () =>  {
      expect(searchCandies('Ma', 10)).toStrictEqual([ 'Mars', 'Maltesers' ]);
    });
    it('returns Mars when searching for Ma and 2', () => {
      expect(searchCandies('Ma', 2)).toStrictEqual([ 'Mars' ]);
    });
    it('returns Mars when searching for lowercase ma and 2', () => {
      expect(searchCandies('ma', 2)).toStrictEqual([ 'Mars' ]);
    });
    it('returns candies with prefix S and 10', () => {
      expect(searchCandies('S', 10)).toStrictEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
    });
    it('returns the candies with prefix S and 4', () => {
      expect(searchCandies('S', 4)).toStrictEqual([ 'Skitties', 'Skittles']);
    });
});