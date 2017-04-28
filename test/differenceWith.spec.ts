import { FnComparator, differenceWith, isEqual } from '../src/alpha';
import { expect, should } from 'chai';

import { _diff } from '../src/_alpha';

should();

describe(differenceWith.name + '() - @category Array', () => {

  describe('should work the same as _diff() with comparator', () => {

    it('([{x:1,y:2}], [{y:1,x:2}], isEqual) => [{x:1,y:2}] <-- function', () => {
      const base: any[] = [{ x: 1, y: 2 }];
      const exclude: any[] = [{ y: 1, x: 2 }];
      const compare: FnComparator = isEqual;
      const result: number[] = differenceWith(base, exclude, compare);
      const result2: number[] = _diff(base, exclude, { compare });
      result.should.have.lengthOf(1);
      result.should.deep.equal([{ x: 1, y: 2 }]);
      result.should.deep.equal(result2);
    });

  });

});
