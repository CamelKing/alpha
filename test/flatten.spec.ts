import { flatten, isTheSame } from '../src/alpha';

describe('flatten()\n', () => {

  describe('should alwatys produce a 1D array...', () => {

    const expect: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let input: any[];
    let flat: any[];

    it('from a simple 1D array.', () => {
      input = expect;
      flat = flatten(input);
      isTheSame(expect, flat).should.be.true;
    });

    it('from a simple 2D array.', () => {
      input = [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]];
      flat = flatten(input);
      isTheSame(expect, flat).should.be.true;
    });

    it('from a simple 3D array.', () => {
      input = [[1, [2, 3, 4], 5], [6, [7, 8, 9], 10]];
      flat = flatten(input);
      isTheSame(expect, flat).should.be.true;
    });

    it('from a simple 4D array.', () => {
      input = [[1, [2, [3], 4], 5], [6, [7, [8], 9], 10]];
      flat = flatten(input);
      isTheSame(expect, flat).should.be.true;
    });

    it('from a deeply nested array.', () => {
      input = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]];
      flat = flatten(input);
      isTheSame(expect, flat).should.be.true;
    });

  });

});
