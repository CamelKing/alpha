import { AnyIteratee, differenceBy } from '../src/alpha';
import { expect, should } from 'chai';

should();

describe(differenceBy.name + '() - @category Array', () => {

  describe('should compute differences using any iteratee', () => {

    it('([[1,2,3], [4,2,5], [6,7,8]], [[1,2,3]], 1) => [[6,7,8]] <-- array index', () => {
      const base: any[] = [[1, 2, 3], [4, 2, 5], [6, 7, 8]];
      const exclude: any[] = [[1, 2, 3]];
      const iteratee: AnyIteratee = 1;
      const result: any[] = differenceBy(base, exclude, iteratee);
      result.should.have.lengthOf(1);
      result.should.deep.equal([[6, 7, 8]]);
    });

    it('([{x:2},{x:1}], [{x:1}], "x") => [{x:2}] <-- object property', () => {
      const base: any[] = [{ x: 2 }, { x: 1 }];
      const exclude: any[] = [{ x: 1 }];
      const iteratee: AnyIteratee = 'x';
      const result: any[] = differenceBy(base, exclude, iteratee);
      result.should.have.lengthOf(1);
      result.should.deep.equal([{ x: 2 }]);
    });

    it('([2.1, 1.2], [2.3, 3.4], Math.floor) => [1.2] <-- function', () => {
      const base: number[] = [2.1, 1.2];
      const exclude: number[] = [2.3, 3.4];
      const iteratee: AnyIteratee = Math.floor;
      const result: number[] = differenceBy(base, exclude, iteratee);
      result.should.have.lengthOf(1);
      result.should.deep.equal([1.2]);
    });

  });

  describe('should operate as a pure function', () => {

    it('the "base" and "exclude" will not be altered', () => {
      const originalBase: number[] = [2.1, 1.2];
      const originalExclude: number[] = [2.3, 3.4];
      const base: number[] = originalBase.slice(0);
      const exclude: number[] = originalExclude.slice(0);
      const iteratee: AnyIteratee = Math.floor;
      const result: number[] = differenceBy(base, exclude, iteratee);
      result.should.have.lengthOf(1);
      result.should.deep.equal([1.2]);
      base.should.deep.equal(originalBase);
      exclude.should.deep.equal(originalExclude);
    });

  });

  describe('should be same as difference() w/out iteratee', () => {

    it('[1,2,3,4,5] [1,2,3] => []', () => {
      const base: number[] = [1, 2, 3, 4, 5];
      const exclude: number[] = [1, 2, 3];
      const result: number[] = differenceBy(base, exclude);
      result.should.have.lengthOf(2);
      result.should.deep.equal([4, 5]);
    });

    it('[1,2,3] [1,2,3] => []', () => {
      const base: number[] = [1, 2, 3];
      const exclude: number[] = [1, 2, 3];
      const result: number[] = differenceBy(base, exclude);
      result.should.have.lengthOf(0);
      result.should.deep.equal([]);
    });

  });

});
