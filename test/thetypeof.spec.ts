import * as chaiAsPromised from 'chai-as-promised';

import { expect, should, use } from 'chai';
import { isTheSame, randomInteger, randomText, theTypeOf, toObject } from '../src/alpha';

should();
use(chaiAsPromised);

describe('toObject() should convert...', () => {

  let input: any;
  let output: object;

  it('a string into an object.', () => {
    input = randomText(1000);
    output = toObject(input);
    theTypeOf(output).should.equal('object');
    output[theTypeOf(input)].should.equal(input);
  });

  it('an empty string into an object.', () => {
    input = '';
    output = toObject(input);
    theTypeOf(output).should.equal('object');
    output[theTypeOf(input)].should.equal(input);
  });

  it('a random number into an object.', () => {
    input = randomInteger(1000, 2000);
    output = toObject(input);
    theTypeOf(output).should.equal('object');
    output[theTypeOf(input)].should.equal(input);
  });

  it('a random -ve number into an object.', () => {
    input = randomInteger(-1000, -2000);
    output = toObject(input);
    theTypeOf(output).should.equal('object');
    output[theTypeOf(input)].should.equal(input);
  });

  it('a number 0 into an object.', () => {
    input = 0;
    output = toObject(input);
    theTypeOf(output).should.equal('object');
    output[theTypeOf(input)].should.equal(input);
  });

  it('a TRUE boolean into an object.', () => {
    input = true;
    output = toObject(input);
    theTypeOf(output).should.equal('object');
    output[theTypeOf(input)].should.equal(input);
  });

  it('a FALSE boolean into an object.', () => {
    input = false;
    output = toObject(input);
    theTypeOf(output).should.equal('object');
    output[theTypeOf(input)].should.equal(input);
  });

  it('a date into an object.', () => {
    input = new Date();
    output = toObject(input);
    theTypeOf(output).should.equal('object');
    output[theTypeOf(input)].getTime().should.equal(input.getTime());
  });

  it('a Symbol into an object.', () => {
    input = Symbol();
    output = toObject(input);
    theTypeOf(output).should.equal('object');
    const res: boolean = (output['symbol'] === input);
    // tslint:disable-next-line:no-unused-expression
    res.should.be.true;
  });

  it('an empty Array into an object.', () => {
    input = [];
    output = toObject(input);
    theTypeOf(output).should.equal('object');
    isTheSame(output[theTypeOf(input)], input).should.be.true;
  });

  it('an Array into an object.', () => {
    input = [123, ['hello', true]];
    output = toObject(input);
    theTypeOf(output).should.equal('object');
    isTheSame(output[theTypeOf(input)], input).should.be.true;
  });

  it('an empty object into an object.', () => {
    input = {};
    output = toObject(input);
    theTypeOf(output).should.equal('object');
    output.should.deep.equal(input);
  });

  it('an nested object into an object.', () => {
    input = { a: 1, b: 2, c: { d: 'a', e: 'b', f: 'c' } };
    output = toObject(input);
    theTypeOf(output).should.equal('object');
    output.should.deep.equal(input);
  });

  it('an Error object into an object.', () => {
    input = new Error('TEST');
    output = toObject(input);
    theTypeOf(output).should.equal('error');
    output.should.deep.equal(input);
  });

  it('a function into an object.', () => {
    input = () => ('hello world');
    output = toObject(input);
    theTypeOf(output).should.equal('object');
    output['input'].should.equal(input);
  });

  it('a promise into an object.', () => {
    input = Promise.resolve('hello');
    output = toObject(input);
    theTypeOf(output).should.equal('object');
    output[theTypeOf(input)].should.eventually.equal('hello');
  });

});
