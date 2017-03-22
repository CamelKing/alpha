import { chunk } from '../src/alpha';
import { should } from 'chai';

should();

describe('chunk()', () => {

  describe('Default parameters handling', () => {

    const input = [1, 2, 3];
    let output: any[] = [];

    it('should return [] if pass in a null array.', () => {
      output = chunk(null, 2);
      output.should.deep.equal([]);
      output.should.have.lengthOf(0);
    });

    it('should return [] if pass in an undefined array.', () => {
      output = chunk(undefined, 2);
      output.should.deep.equal([]);
      output.should.have.lengthOf(0);
    });


    it('should return [] if pass in an empty array.', () => {
      output = chunk([], 2);
      output.should.deep.equal([]);
      output.should.have.lengthOf(0);
    });

    it('should return array as is if pass in a =1 split size.', () => {
      output = chunk(input, 1);
      output.should.deep.equal(input);
      output.should.have.lengthOf(3);
    });

    it('should return array as is if pass in a =0 split size.', () => {
      output = chunk(input, 0);
      output.should.deep.equal(input);
      output.should.have.lengthOf(3);
    });

    it('should return array as is if pass in a -ve split size.', () => {
      output = chunk(input, -2);
      output.should.deep.equal(input);
      output.should.have.lengthOf(3);
    });

  });

  describe('Spliting an array in various sizes', () => {

    const array: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const splits: number[] = [2, 3, 4, 5, 6];
    let output: any[] = [];

    splits.forEach((divide: number) => {

      it('should split arrays of '
        + array.length + ' items by '
        + divide + ' ways correctly.', () => {

          output = chunk(array, divide);
          output.length.should.equal(Math.ceil(array.length / divide));

        });

    });

  });

});
