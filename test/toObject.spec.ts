import { expect, should } from 'chai';
import { isTheSame, randomInteger, randomText, theTypeOf, toObject } from '../src/alpha';

should();

describe('toObject()\n', () => {

  describe('should...', () => {

    let input: any;
    let output: any;

    it('convert a text string into a string object.', () => {
      input = randomText(1000);
      output = toObject(input);
      theTypeOf(output).should.equal('string');
      output.should.equal(input);
    });

    it('convert a number string into a number object.', () => {
      input = '' + randomInteger(1000);
      output = toObject(input);
      theTypeOf(output).should.equal('string');
      output.should.equal(input);
    });

    it('convert an empty string into a string object.', () => {
      input = '';
      output = toObject(input);
      theTypeOf(output).should.equal('string');
      output.should.equal(input);
    });

    it('convert a +ve number into a number object.', () => {
      input = randomInteger(1000, 2000);
      output = toObject(input);
      theTypeOf(output).should.equal('number');
      output.should.equal(input);
    });

    it('convert a -ve number into a number object.', () => {
      input = randomInteger(-1000, -2000);
      output = toObject(input);
      theTypeOf(output).should.equal('number');
      output.should.equal(input);
    });

    it('convert number 0 into a number object.', () => {
      input = 0;
      output = toObject(input);
      theTypeOf(output).should.equal('number');
      output.should.equal(input);
    });

    it('convert a TRUE boolean into a boolean object.', () => {
      input = true;
      output = toObject(input);
      theTypeOf(output).should.equal('boolean');
      output.should.equal(input);
    });

    it('convert a FALSE boolean into a booleann object.', () => {
      input = false;
      output = toObject(input);
      theTypeOf(output).should.equal('boolean');
      output.should.equal(input);
    });

    it('convert a date into a date object.', () => {
      input = new Date();
      output = toObject(input);
      theTypeOf(output).should.equal('date');
      (output as Date).getTime().should.equal(input.getTime());
    });

    it('convert a "undefined" into an empty object.', () => {
      input = undefined;
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output.should.deep.equal({});
    });

    it('convert a "null" into an empty object.', () => {
      input = null;
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output.should.deep.equal({});
    });

    it('convert a "NaN" into a nan object.', () => {
      input = NaN;
      output = toObject(input);
      theTypeOf(output).should.equal('nan');
      // tslint:disable-next-line:no-unused-expression
      output.should.be.NaN;
    });

    it('convert a Symbol into a symbol object.', () => {
      input = Symbol();
      output = toObject(input);
      theTypeOf(output).should.equal('symbol');
      // tslint:disable:no-unused-expression
      // tslint:disable-next-line:triple-equals
      (output == input).should.be.true;
      (output === input).should.be.false;
    });

    it('convert an empty Array into an array.', () => {
      input = [];
      output = toObject(input);
      theTypeOf(output).should.equal('array');
      isTheSame(output, input).should.be.true;
    });

    it('convert an Array into an array copy.', () => {
      input = [123, ['hello', true]];
      output = toObject(input);
      theTypeOf(output).should.equal('array');
      isTheSame(output, input).should.be.true;
    });

    it('convert an empty object into an empty object.', () => {
      input = {};
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output.should.deep.equal(input);
    });

    it('convert an nested object into an object copy.', () => {
      input = { a: 1, b: 2, c: { d: 'a', e: 'b', f: 'c' } };
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output.should.deep.equal(input);
    });

    it('convert an Error object into an error object copy.', () => {
      input = new Error('TEST');
      output = toObject(input);
      theTypeOf(output).should.equal('error');
      output.should.deep.equal(input);
    });

    it('convert a anonymous function into a function object.', () => {
      output = toObject(() => ('hello world'));
      theTypeOf(output).should.equal('function');
      // output.hasOwnProperty('function').should.be.true;
      // output.hasOwnProperty('input').should.be.false;
      output().should.equal('hello world');
    });

    it('convert a function into a function object.', () => {
      input = () => ('hello world');
      input.name.should.equal('input');
      output = toObject(input);
      theTypeOf(output).should.equal('function');
      output.should.equal(input);
      output().should.equal(input());
    });

    it('convert a factory function into a function object.', () => {
      input = () => () => ('hello world');
      output = toObject(input);
      theTypeOf(output).should.equal('function');
      output()().should.equal(input()());
    });

    it('convert a promise into an object.', () => {
      input = Promise.resolve('hello');
      output = toObject(input);
      theTypeOf(output).should.equal('promise');
      output.should.eventually.equal('hello');
    });

  });

});
