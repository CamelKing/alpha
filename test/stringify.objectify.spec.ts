import { expect, should } from 'chai';
import { isTheSame, objectify, prints, randomInteger, randomText, stringify, theTypeOf } from '../src/alpha';

should();

describe('stringify() and objectify()\n', () => {

  describe('should...', () => {

    let input: any;
    let str: string;
    let reverse: any;

    it('produce a string wrapped in quotes from a string input,', () => {
      input = 'This is to be stringified?';
      str = stringify(input);
      theTypeOf(str).should.equal('string');
      str.should.equal('"' + input + '"');

    });

    it('...and convert back to the same string.', () => {
      reverse = objectify(str);
      reverse.should.equal(input);
    });


    it('produce a string from a positive number input,', () => {
      input = randomInteger(10, 1000);
      str = stringify(input);
      theTypeOf(str).should.equal('string');
      str.should.equal('' + input);
    });

    it('...and convert back to the same positive number.', () => {
      reverse = objectify(str);
      reverse.should.equal(input);
    });


    it('produce a string from a negative number input,', () => {
      input = randomInteger(-10, -1000);
      str = stringify(input);
      theTypeOf(str).should.equal('string');
      str.should.equal('' + input);
    });

    it('...and convert back to the same negative number.', () => {
      reverse = objectify(str);
      reverse.should.equal(input);
    });

    it('produce a string from a TRUE boolean input,', () => {
      input = true;
      str = stringify(input);
      theTypeOf(str).should.equal('string');
      str.should.equal('' + input);
    });

    it('...and convert back to the same TRUE boolean input.', () => {
      reverse = objectify(str);
      reverse.should.equal(input);
    });

    it('produce a string from a FALSE boolean input,', () => {
      input = false;
      str = stringify(input);
      theTypeOf(str).should.equal('string');
      str.should.equal('' + input);
    });

    it('...and convert back to the same FALSE boolean input.', () => {
      reverse = objectify(str);
      reverse.should.equal(input);
    });

    it('produce a string from an nested array input,', () => {
      input = ['string', [12345, [true]]];
      str = stringify(input);
      theTypeOf(str).should.equal('string');
      str.should.equal(prints(input)
        .replace(/ /g, '')
        .replace(/'/g, '"'));
    });

    it('...and convert back to the same nested array.', () => {
      reverse = objectify(str);
      isTheSame(reverse, input).should.be.true;
    });

    it('produce a string from Error object,', () => {
      input = new Error('TESTING ERROR');
      str = stringify(input);
      str.indexOf('stack').should.be.gte(0);
      str.indexOf('message').should.be.gte(0);
      str.indexOf('TESTING ERROR').should.be.gte(0);
    });

    it('...and convert back to the same Error object.', () => {
      reverse = objectify(str);
      theTypeOf(reverse).should.equal('error');
      isTheSame(reverse, input).should.be.true;
    });


    it('produce a string from an object,', () => {
      input = { a: 'TESTING ERROR' };
      str = stringify(input);
      str.indexOf('"a"').should.be.gte(0);
      str.indexOf('"TESTING ERROR"').should.be.gte(0);
    });

    it('...and convert back to the same object.', () => {
      reverse = objectify(str);
      theTypeOf(reverse).should.equal('object');
      isTheSame(reverse, input).should.be.true;
    });

    it('produce a string from a function object. (no reversal)', () => {
      const rnd: string = randomText(randomInteger(1, 100));
      input = () => rnd;
      str = stringify(input);
      str.should.be.equal('"' + rnd + '"');
    });

    it('produce nothing from a Symbol. (no reversal)', () => {
      input = Symbol('stringify');
      str = stringify(input);
      str.should.be.equal('');
    });

    it('produce nothing from "undefined". (no reversal)', () => {
      input = undefined;
      str = stringify(input);
      str.should.be.equal('');
    });

    it('produce nothing from "null". (no reversal)', () => {
      input = null;
      str = stringify(input);
      str.should.be.equal('');
    });

    it('produce nothing from Promise. (no reversal)', () => {
      input = Promise.resolve(5);
      str = stringify(input);
      str.should.be.equal('');
    });

  });

});
