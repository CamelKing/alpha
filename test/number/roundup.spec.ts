import { expect, should } from 'chai';
import { randomInteger, roundUp } from '../../src/alpha';

should();

describe('roundUp()\n', () => {

  describe('should...', () => {

    let num: any;

    it('round up if < 0.5 with precision 0', () => {
      num = 123.499999999;
      roundUp(num).should.equal(124);
    });

    it('round up if >= 0.5 with precision 0', () => {
      num = 123.5;
      roundUp(num).should.equal(124);
    });

    it('no rounding if no decimal, with precision 0', () => {
      num = 123;
      roundUp(num).should.equal(123);
    });

    it('round correctly with precision 1', () => {
      num = 123.456789;
      roundUp(num, 1).should.equal(130);
    });

    it('round correctly with precision 2', () => {
      num = 123.456789;
      roundUp(num, 2).should.equal(200);
    });

    it('return 1e(+exp) with precision too higher.', () => {
      num = 123.456789;
      roundUp(num, 5).should.equal(1e+5);
    });

    it('round -ve number correctly with precision 1', () => {
      num = -123.456789;
      roundUp(num, 1).should.equal(-130);
    });

    it('round -ve number correctly with precision 2', () => {
      num = -123.456789;
      roundUp(num, 2).should.equal(-200);
    });

    it('return -1e(+exp) from -ve number with precision too higher.', () => {
      num = -123.456789;
      roundUp(num, 5).should.equal(-1e+5);
    });

    it('round correctly with precision -1', () => {
      num = 123.456789;
      roundUp(num, -1).should.equal(123.5);
    });

    it('round correctly with precision -3', () => {
      num = 123.456789;
      roundUp(num, -3).should.equal(123.457);
    });

    it('round correctly with precision -5', () => {
      num = 123.456789;
      roundUp(num, -5).should.equal(123.45679);
    });

    it('return original number when precision too low.', () => {
      num = 123.456789;
      roundUp(num, -10).should.equal(123.456789);
    });

    it('round number string correctly.', () => {
      num = '123.456789';
      roundUp(num, -3).should.equal(123.457);
    });

    it('round a function return numeric value corectly.', () => {
      num = () => (123.456 + 456.789);
      roundUp(num, -2).should.equal(580.25);
    });

    it('round a function return number string corectly.', () => {
      num = () => ('' + (123.456 + 456.789));
      roundUp(num, -2).should.equal(580.25);
    });

    it('round a nested function return number string corectly.', () => {
      num = () => () => ('' + (123.456 + 456.789));
      roundUp(num, -2).should.equal(580.25);
    });

    it('return NaN for array.', () => {
      num = [123.456,
        '456.789',
        'hello world',
        () => (23.45 + 45.67),
        {}];
      roundUp(num, -1).should.be.NaN;
    });

    it('return NaN for promise.', () => {
      num = Promise.resolve(123.456);
      roundUp(num, -3).should.be.NaN;
    });

    it('return NaN for non- number string.', () => {
      num = 'hello world';
      roundUp(num, -3).should.be.NaN;
    });

    it('return NaN for rounding object.', () => {
      num = { a: 1 };
      roundUp(num, -3).should.be.NaN;
    });

    it('return NaN for Undefined.', () => {
      num = undefined;
      roundUp(num, -3).should.be.NaN;
    });

    it('return NaN for Symbol.', () => {
      num = Symbol();
      roundUp(num, -3).should.be.NaN;
    });

  });

});
