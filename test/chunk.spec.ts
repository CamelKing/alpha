import { expect, should } from 'chai';

import { chunk } from '../src/alpha';

should();

describe(chunk.name + '() - @category Array', () => {

  const original: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const array: number[] = original.slice(0);

  describe('should handle all out of bound split size', () => {

    it('+Infinity split size => array as is', () => {
      const result: any[] = chunk(array, +Infinity);
      result.should.have.lengthOf(array.length);
      result.should.eql(array);
    });

    it('BIG split size => array as is', () => {
      const result: any[] = chunk(array, array.length + 1);
      result.should.have.lengthOf(array.length);
      result.should.eql(array);
    });

    it('-Infinity split size => array as is', () => {
      const result: any[] = chunk(array, -Infinity);
      result.should.have.lengthOf(array.length);
      result.should.eql(array);
    });

    it('-ve split size => array as is', () => {
      const result: any[] = chunk(array, -1);
      result.should.have.lengthOf(array.length);
      result.should.eql(array);
    });

    it('-0 split size => array as is', () => {
      const result: any[] = chunk(array, -0);
      result.should.have.lengthOf(array.length);
      result.should.eql(array);
    });

    it('0 split size => array as is', () => {
      const result: any[] = chunk(array, 0);
      result.should.have.lengthOf(array.length);
      result.should.eql(array);
    });

  });

  describe('should split array into chunks accordingly', () => {

    // the following section will try to chunk
    // in different split size

    const splits: number[] = [2, 3, 4, 5, 6];

    splits.forEach((split: number) => {

      it('Array of 10 items by splt size of ' + split, () => {

        const result: number[][] = chunk(array, split);

        let remaining: number = array.length;

        result.forEach((res: number[], index: number) => {
          res.should.have.lengthOf(remaining > split ? split : remaining);
          remaining -= split;
        });

        for (let i: number = 0; i < (result.length - 1); i += split) {
          result[i].should.have.lengthOf(split);
          for (let j: number = 0; (j < split) && (i * split + j) < (result.length - 1); j++) {
            result[i][j].should.equal(array[i * split + j]);
          }
        }

      });

    });

  });

  describe('should operate as a pure function', () => {

    it('the array being chunked will not be altered', () => {
      const result: any[] = chunk(array, 2);
      array.should.have.lengthOf(original.length);
      array.should.eql(original);
    });

  });

  describe('should handle null/undefined/empty parameters properly', () => {

    it('undefined => []', () => {
      const result: any[] = chunk(undefined);
      result.should.have.lengthOf(0);
      result.should.eql([]);
    });

    it('null => []', () => {
      const result: any[] = chunk(null);
      result.should.have.lengthOf(0);
      result.should.eql([]);
    });

    it('[] => []', () => {
      const result: any[] = chunk([]);
      result.should.have.lengthOf(0);
      result.should.eql([]);
    });

  });

});
