import { ascOrder, ascOrderBy, descOrder, descOrderBy } from '../src/alpha';
import { expect, should, use } from 'chai';

should();

describe('Ordering comparator for sort/search.\n', () => {

  describe('.sort(ascOrder)', () => {

    let input: any[];
    let answer: any[];

    it('should sort number array in ascending order.', () => {
      input = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
      answer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      input.sort(ascOrder);
      return input.should.deep.equal(answer);
    });

    it('should sort string array in ascending order.', () => {
      input = ['1', '3', '5', '7', '9', '2', '4', '6', '8', '10'];
      answer = ['1', '10', '2', '3', '4', '5', '6', '7', '8', '9'];
      input.sort(ascOrder);
      return input.should.deep.equal(answer);
    });

  });

  describe('.sort(ascOrderBy)', () => {

    let input: any[];
    let answer: any[];


    it('should sort the object:number key in ascending order.', () => {
      input = [
        { a: 1, b: 'z' },
        { a: 3, b: 'a' },
        { a: 5, b: 'y' },
        { a: 7, b: 'c' },
        { a: 9, b: 'x' },
        { a: 2, b: 'b' },
        { a: 4, b: 't' },
        { a: 6, b: 'e' },
        { a: 8, b: 'p' },
        { a: 10, b: 's' },
      ];
      answer = [
        { a: 1, b: 'z' },
        { a: 2, b: 'b' },
        { a: 3, b: 'a' },
        { a: 4, b: 't' },
        { a: 5, b: 'y' },
        { a: 6, b: 'e' },
        { a: 7, b: 'c' },
        { a: 8, b: 'p' },
        { a: 9, b: 'x' },
        { a: 10, b: 's' },
      ];
      input.sort(ascOrderBy((o: object) => o['a']));
      return input.should.deep.equal(answer);
    });

    it('should sort the object:string key in ascending order.', () => {
      input = [
        { a: 1, b: 'z' },
        { a: 3, b: 'a' },
        { a: 5, b: 'y' },
        { a: 7, b: 'c' },
        { a: 9, b: 'x' },
        { a: 2, b: 'b' },
        { a: 4, b: 't' },
        { a: 6, b: 'e' },
        { a: 8, b: 'p' },
        { a: 10, b: 's' },
      ];
      answer = [
        { a: 3, b: 'a' },
        { a: 2, b: 'b' },
        { a: 7, b: 'c' },
        { a: 6, b: 'e' },
        { a: 8, b: 'p' },
        { a: 10, b: 's' },
        { a: 4, b: 't' },
        { a: 9, b: 'x' },
        { a: 5, b: 'y' },
        { a: 1, b: 'z' },
      ];
      input.sort(ascOrderBy((o: object) => o['b']));
      return input.should.deep.equal(answer);
    });

  });

  describe('.sort(descOrder)', () => {

    let input: any[];
    let answer: any[];

    it('should sort number array in ascending order.', () => {
      input = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
      answer = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
      input.sort(descOrder);
      return input.should.deep.equal(answer);
    });

    it('should sort string array in ascending order.', () => {
      input = ['1', '3', '5', '7', '9', '2', '4', '6', '8', '10'];
      answer = ['9', '8', '7', '6', '5', '4', '3', '2', '10', '1'];
      input.sort(descOrder);
      return input.should.deep.equal(answer);
    });

  });

  describe('.sort(descOrderBy)', () => {

    let input: any[];
    let answer: any[];


    it('should sort the object:number key in descending order.', () => {
      input = [
        { a: 1, b: 'z' },
        { a: 3, b: 'a' },
        { a: 5, b: 'y' },
        { a: 7, b: 'c' },
        { a: 9, b: 'x' },
        { a: 2, b: 'b' },
        { a: 4, b: 't' },
        { a: 6, b: 'e' },
        { a: 8, b: 'p' },
        { a: 10, b: 's' },
      ];
      answer = [
        { a: 10, b: 's' },
        { a: 9, b: 'x' },
        { a: 8, b: 'p' },
        { a: 7, b: 'c' },
        { a: 6, b: 'e' },
        { a: 5, b: 'y' },
        { a: 4, b: 't' },
        { a: 3, b: 'a' },
        { a: 2, b: 'b' },
        { a: 1, b: 'z' },
      ];
      input.sort(descOrderBy((o: object) => o['a']));
      return input.should.deep.equal(answer);
    });

    it('should sort the object:string key in descending order.', () => {
      input = [
        { a: 1, b: 'z' },
        { a: 3, b: 'a' },
        { a: 5, b: 'y' },
        { a: 7, b: 'c' },
        { a: 9, b: 'x' },
        { a: 2, b: 'b' },
        { a: 4, b: 't' },
        { a: 6, b: 'e' },
        { a: 8, b: 'p' },
        { a: 10, b: 's' },
      ];
      answer = [
        { a: 1, b: 'z' },
        { a: 5, b: 'y' },
        { a: 9, b: 'x' },
        { a: 4, b: 't' },
        { a: 10, b: 's' },
        { a: 8, b: 'p' },
        { a: 6, b: 'e' },
        { a: 7, b: 'c' },
        { a: 2, b: 'b' },
        { a: 3, b: 'a' },
      ];
      input.sort(descOrderBy((o: object) => o['b']));
      return input.should.deep.equal(answer);
    });

  });

});
