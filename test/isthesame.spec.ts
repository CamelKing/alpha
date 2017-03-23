import { expect, should } from 'chai';
import { isTheSame, randomInteger, randomText } from '../src/alpha';

should();


describe('isTheSame() should compare...', () => {

  let input1: any;
  let input2: any;

  it('string vs string, different length.', () => {
    input1 = randomText(1000);
    input2 = input1 + ' ';
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('string vs string, same length.', () => {
    input1 = randomText(1000);
    input2 = randomText(1000);
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('string vs number.', () => {
    input2 = randomInteger(1000, 10000);
    input1 = '' + input2;
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('string vs boolean.', () => {
    input2 = true;
    input1 = '' + input1;
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('number vs number.', () => {
    input1 = randomInteger(1000, 10000);
    input2 = input1 + 1;
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('number vs number string.', () => {
    input1 = randomInteger(1000, 10000);
    input2 = '' + input1;
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('number vs text string.', () => {
    input1 = randomInteger(1000, 10000);
    input2 = randomText(20);
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('number vs boolean.', () => {
    input1 = 0;
    input2 = false;
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('boolean vs boolean.', () => {
    input1 = true;
    input2 = !input1;
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('boolean vs string.', () => {
    input1 = true;
    input2 = '' + input1;
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('boolean vs number.', () => {
    input1 = false;
    input2 = 0;
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('date vs date.', () => {
    input1 = new Date();
    input2 = new Date(input1.getTime() + 1000);
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('date vs date string.', () => {
    input1 = new Date();
    input2 = input1.toString();
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('date vs number.', () => {
    input1 = new Date();
    input2 = input1.getTime();
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('Symbol vs Symbol.', () => {
    input1 = Symbol();
    input2 = Symbol();
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('Undefined vs Null.', () => {
    input1 = undefined;
    input2 = null;
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('Undefined vs Undefined.', () => {
    input1 = undefined;
    input2 = undefined;
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.true;
  });

  it('Null vs Null.', () => {
    input1 = null;
    input2 = null;
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.true;
  });

  it('Null vs Undefined.', () => {
    input1 = null;
    input2 = undefined;
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('NaN vs NaN.', () => {
    input1 = NaN;
    input2 = NaN;
    isTheSame(input1, input1).should.be.false;
    isTheSame(input1, input2).should.be.false;
  });

  it('functions - return number vs string.', () => {
    input1 = () => (4 + 5);
    input2 = () => ('4' + '5');
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('functions - return number vs number.', () => {
    input1 = () => (4 + 5);
    input2 = () => (4 + 5 + 1);
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('functions - return string vs string.', () => {
    input1 = () => ('4' + '5' + '7');
    input2 = () => ('4' + '5' + '6');
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('objects vs object, different keys.', () => {
    input1 = { a: 123, b: 'hello world', c: true, e: {} };
    input2 = { a: 123, b: 'hello world', c: true, f: {} };
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('objects vs object, first 1 has extra keys.', () => {
    input1 = { a: 123, b: 'hello world', c: true, e: {} };
    input2 = { a: 123, b: 'hello world', c: true };
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('objects vs object, second 1 has extra keys.', () => {
    input1 = { a: 123, b: 'hello world', c: true };
    input2 = { a: 123, b: 'hello world', c: true, d: {} };
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('objects vs string.', () => {
    input1 = { a: 'hello world' };
    input2 = 'hello world';
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('objects vs number.', () => {
    input2 = randomInteger(10, 1000);;
    input1 = { b: input2 };
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('objects vs function returning number.', () => {
    const num: number = randomInteger(10, 1000);
    input1 = { b: num };
    input2 = () => num;
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('objects vs function returning object w/ diff key.', () => {
    const num: number = randomInteger(10, 1000);
    input1 = { b: num };
    input2 = () => ({ a: num });
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('objects vs function returning same object.', () => {
    const num: number = randomInteger(10, 1000);
    input1 = { b: num };
    input2 = () => (input1);
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('Error object vs Error object.', () => {
    input1 = new Error('THIS IS ERROR');
    input2 = new Error('THIS IS ERROR');
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('Error object vs object.', () => {
    input1 = new Error('THIS IS ERROR');
    input2 = { a: 1, b: 'hello world', c: true };
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('Error object vs man made object.', () => {
    input1 = new Error('THIS IS ERROR');
    Object.assign(input2, input1);
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('Array vs array.', () => {
    input1 = [123, 'hello world', true];
    input1 = [123, 'hello world', true, input1];
    input2 = [123, 'hello world', {}];
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('Nested array vs nested array.', () => {
    input1 = [123, ['hello world', [true]]];
    input2 = [123, ['hello world', [false]]];
    isTheSame(input1, input1).should.be.true;
    isTheSame(input1, input2).should.be.false;
  });

  it('Promise vs promise.', () => {
    input1 = Promise.resolve('hello');
    input2 = Promise.resolve('hello world');
    isTheSame(input1, input1).should.be.false;
    isTheSame(input1, input2).should.be.false;
  });


});

