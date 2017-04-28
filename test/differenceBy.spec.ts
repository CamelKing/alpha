import { AnyIteratee, differenceBy } from '../src/alpha';
import { expect, should } from 'chai';

import { _diff } from '../src/_alpha';

should();

describe(differenceBy.name + '() - @category Array', () => {

  describe('should work the same as _diff() with iteratee', () => {

    it('([2.1, 1.2], [2.3, 3.4], Math.floor) => [1.2] <-- function', () => {
      const base: number[] = [2.1, 1.2];
      const exclude: number[] = [2.3, 3.4];
      const iteratee: AnyIteratee = Math.floor;
      const result: number[] = differenceBy(base, exclude, iteratee);
      const result2: number[] = _diff(base, exclude, { iteratee });
      result.should.have.lengthOf(1);
      result.should.deep.equal([1.2]);
      result.should.deep.equal(result2);
    });

  });

});
