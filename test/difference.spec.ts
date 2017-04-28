import { expect, should } from 'chai';

import { _diff } from '../src/_alpha';
import { difference } from '../src/alpha';

should();

describe(difference.name + '() - @category Array', () => {

  describe('should work the same as _diff() with base parameters', () => {

    it('[1,2,3,4,5] [1,2,3] => [4,5]', () => {
      const base: number[] = [1, 2, 3, 4, 5];
      const exclude: number[] = [1, 2, 3];
      const result: number[] = difference(base, exclude);
      const result2: number[] = _diff(base, exclude);
      result.should.have.lengthOf(2);
      result.should.deep.equal([4, 5]);
      result.should.deep.equal(result2);
    });

  });

});
