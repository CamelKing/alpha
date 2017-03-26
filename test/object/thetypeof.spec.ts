import * as chaiAsPromised from 'chai-as-promised';

import { expect, should, use } from 'chai';
import { isTheSame, randomInteger, randomText, theTypeOf, toObject } from '../../src/alpha';

should();
use(chaiAsPromised);

describe('theTypeOf()\n', () => {

  describe('should print...', () => {

    let input: any;
    let str: string;

    it('"string" for string variable.', () => {
      input = 'hello world';
      str = theTypeOf(input);
      str.should.equal('string');
    });

    it('"string" for empty string.', () => {
      input = '';
      str = theTypeOf(input);
      str.should.equal('string');
    });

    it('"undefined" for undefined variable.', () => {
      input = undefined;
      str = theTypeOf(input);
      str.should.equal('undefined');
    });

    it('"null" for null vaiable.', () => {
      input = null;
      str = theTypeOf(input);
      str.should.equal('null');
    });

    it('"number" for number variable.', () => {
      input = 123456;
      str = theTypeOf(input);
      str.should.equal('number');
    });

    it('"number" for -ve number variable.', () => {
      input = -123456;
      str = theTypeOf(input);
      str.should.equal('number');
    });

    it('"number" for -ve floating point number variable.', () => {
      input = -123.456;
      str = theTypeOf(input);
      str.should.equal('number');
    });

    it('"boolean" for TRUE boolean variable.', () => {
      input = true;
      str = theTypeOf(input);
      str.should.equal('boolean');
    });

    it('"boolean" for FALSE boolean variable.', () => {
      input = false;
      str = theTypeOf(input);
      str.should.equal('boolean');
    });

    it('"array" for array variable.', () => {
      input = [123, 'hello', true];
      str = theTypeOf(input);
      str.should.equal('array');
    });

    it('"array" for nested array variable.', () => {
      input = [123, ['hello', [true]]];
      str = theTypeOf(input);
      str.should.equal('array');
    });

    it('"object" for empty object variable.', () => {
      input = {};
      str = theTypeOf(input);
      str.should.equal('object');
    });

    it('"object" for normal object variable.', () => {
      input = { a: 1, b: 2, c: 3, d: 4, e: 5 };
      str = theTypeOf(input);
      str.should.equal('object');
    });

    it('"object" for normal object variable.', () => {
      input = { a: 1, a2: { b: 2, c: 3, d: 4 }, e: 5 };
      str = theTypeOf(input);
      str.should.equal('object');
    });

    it('"date" for a date object variable.', () => {
      input = new Date();
      str = theTypeOf(input);
      str.should.equal('date');
    });

    it('"error" for an error object.', () => {
      input = new Error();
      str = theTypeOf(input);
      str.should.equal('error');
    });

    it('"symbol" for an error object.', () => {
      input = Symbol();
      str = theTypeOf(input);
      str.should.equal('symbol');
    });

    it('"function" for a variable storing function.', () => {
      input = () => 'abc';
      str = theTypeOf(input);
      str.should.equal('function');
    });

    it('"promise" for a variable Promise object.', () => {
      input = Promise.resolve(5);
      str = theTypeOf(input);
      str.should.equal('promise');
    });

  });

});
