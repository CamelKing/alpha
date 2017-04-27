import { FnComparator, differenceWith, isEqual } from '../src/alpha';
import { expect, should } from 'chai';

should();

describe(differenceWith.name + '() - @category Array', () => {

  describe('should compute differences using any compare', () => {

    it('([{x:1,y:2}], [{y:2,x:1}], isEqual) => [] <-- function', () => {
      const base: any[] = [{ x: 1, y: 2 }];
      const exclude: any[] = [{ y: 2, x: 1 }];
      const compare: FnComparator = isEqual;
      const result: number[] = differenceWith(base, exclude, compare);
      result.should.have.lengthOf(0);
      result.should.deep.equal([]);
    });

    it('([{x:1,y:2}], [{y:1,x:2}], isEqual) => [{x:1,y:2}] <-- function', () => {
      const base: any[] = [{ x: 1, y: 2 }];
      const exclude: any[] = [{ y: 1, x: 2 }];
      const compare: FnComparator = isEqual;
      const result: number[] = differenceWith(base, exclude, compare);
      result.should.have.lengthOf(1);
      result.should.deep.equal([{ x: 1, y: 2 }]);
    });

  });

  describe('should operate as a pure function', () => {

    it('the "base" and "exclude" will not be altered', () => {
      const fn: FnComparator = (a: any, b: any) => isEqual(Math.floor(a), Math.floor(b));
      const originalBase: number[] = [2.1, 1.2];
      const originalExclude: number[] = [2.3, 3.4];
      const base: number[] = originalBase.slice(0);
      const exclude: number[] = originalExclude.slice(0);
      const compare: FnComparator = (a: any, b: any) => isEqual(Math.floor(a), Math.floor(b));
      const result: number[] = differenceWith(base, exclude, compare);
      result.should.have.lengthOf(1);
      result.should.deep.equal([1.2]);
      base.should.deep.equal(originalBase);
      exclude.should.deep.equal(originalExclude);
    });

  });

  describe('should be same as difference() w/out comparator', () => {

    it('[1,2,3,4,5] [1,2,3] => []', () => {
      const base: number[] = [1, 2, 3, 4, 5];
      const exclude: number[] = [1, 2, 3];
      const result: number[] = differenceWith(base, exclude);
      result.should.have.lengthOf(2);
      result.should.deep.equal([4, 5]);
    });

    it('[1,2,3] [1,2,3] => []', () => {
      const base: number[] = [1, 2, 3];
      const exclude: number[] = [1, 2, 3];
      const result: number[] = differenceWith(base, exclude);
      result.should.have.lengthOf(0);
      result.should.deep.equal([]);
    });

  });

});
