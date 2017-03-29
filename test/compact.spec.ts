import { expect, should } from 'chai';

import { compact } from '../src/alpha';

should();

describe('compact()\n', () => {

  describe('should...', () => {

    it('remove all falsey element from an array.', () => {

      const sym: Symbol = Symbol();
      const arr1: any[] = ['start', true, false, 1, 0, -1, null, undefined, NaN, sym, 'end'];
      const arr2: any[] = ['start', true, 1, -1, sym, 'end'];
      const arr3: any[] = compact(arr1);
      arr3.should.have.lengthOf(6);
      arr3.should.deep.equal(arr2);

    });

    it('remove all falsey element within a nested array.', () => {
      const arr1: any[] = ['start', [true, [false, [1, [0, [-1, [null, [undefined, [NaN, ['end']]]]]]]]]];
      const arr2: any[] = ['start', [true, [[1, [[-1, [[[['end']]]]]]]]]];
      const arr3: any[] = compact(arr1);
      arr3.should.have.lengthOf(2);
      arr3.should.deep.equal(arr2);
    });

    it('will not remove functions which returns a false result..', () => {

      const arr1: any[] = ['start', true, false, 1, 0, -1, null, undefined, NaN, () => (false), 'end'];
      const arr2: any[] = ['start', true, 1, -1, () => (false), 'end'];
      const arr3: any[] = compact(arr1);
      arr3.should.have.lengthOf(6);
      arr3[0].should.equal(arr2[0]);
      arr3[1].should.equal(arr2[1]);
      arr3[2].should.equal(arr2[2]);
      arr3[3].should.equal(arr2[3]);
      arr3[4]().should.equal(arr2[4]());
      arr3[5].should.equal(arr2[5]);

    });

    it('returns [] when pass in an empty array.', () => {
      const arr1: any[] = [];
      const arr2: any[] = [];
      const arr3: any[] = compact(arr1);
      arr3.should.have.lengthOf(0);
      arr3.should.deep.equal(arr2);
    });

    it('returns [] when pass in a null array.', () => {
      const arr1: any[] = null;
      const arr2: any[] = [];
      const arr3: any[] = compact(arr1);
      arr3.should.have.lengthOf(0);
      arr3.should.deep.equal(arr2);
    });

    it('returns [] when pass in a nested empty array.', () => {
      const arr1: any[] = [[]];
      const arr2: any[] = [[]];
      const arr3: any[] = compact(arr1);
      arr3.should.have.lengthOf(1);
      arr3.should.deep.equal(arr2);
    });

    it('returns [] when pass in an undefined array.', () => {
      const arr1: any[] = undefined;
      const arr2: any[] = [];
      const arr3: any[] = compact(arr1);
      arr3.should.have.lengthOf(0);
      arr3.should.deep.equal(arr2);
    });

  });

});
