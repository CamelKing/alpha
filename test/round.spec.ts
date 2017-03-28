import { expect, should } from 'chai';
import { randomInteger, round } from '../src/alpha';

should();

describe('round()\n', () => {

  describe('should...', () => {

    let num: any;

    it('round down if < 0.5 with precision 0', () => {
      num = 123.499999999;
      round(num).should.equal(123);
    });

    it('round up if >= 0.5 with precision 0', () => {
      num = 123.5;
      round(num).should.equal(124);
    });

    it('no rounding if no decimal, with precision 0', () => {
      num = 123;
      round(num).should.equal(123);
    });

    it('round correctly with precision 1', () => {
      num = 123.456789;
      round(num, 1).should.equal(120);
    });

    it('round correctly with precision 2', () => {
      num = 123.456789;
      round(num, 2).should.equal(100);
    });

    it('return 0 with precision too higher.', () => {
      num = 123.456789;
      round(num, 5).should.equal(0);
    });

    it('round -ve number correctly with precision 1', () => {
      num = -123.456789;
      round(num, 1).should.equal(-120);
    });

    it('round -ve number correctly with precision 2', () => {
      num = -123.456789;
      round(num, 2).should.equal(-100);
    });

    it('return 0 from -ve number with precision too higher.', () => {
      num = -123.456789;
      round(num, 5).should.equal(0);
    });

    it('round correctly with precision -1', () => {
      num = 123.456789;
      round(num, -1).should.equal(123.5);
    });

    it('round correctly with precision -3', () => {
      num = 123.456789;
      round(num, -3).should.equal(123.457);
    });

    it('round correctly with precision -5', () => {
      num = 123.456789;
      round(num, -5).should.equal(123.45679);
    });

    it('return original number when precision too low.', () => {
      num = 123.456789;
      round(num, -10).should.equal(123.456789);
    });

    it('round number string correctly.', () => {
      num = '123.456789';
      round(num, -3).should.equal(123.457);
    });

    it('round a function return numeric value corectly.', () => {
      num = () => (123.456 + 456.789);
      round(num, -2).should.equal(580.25);
    });

    it('round a function return number string corectly.', () => {
      num = () => ('' + (123.456 + 456.789));
      round(num, -2).should.equal(580.25);
    });

    it('round a nested function return number string corectly.', () => {
      num = () => () => ('' + (123.456 + 456.789));
      round(num, -2).should.equal(580.25);
    });

    it('return NaN for array.', () => {
      num = [123.456,
        '456.789',
        'hello world',
        () => (23.45 + 45.67),
        {}];
      round(num, -1).should.be.NaN;
    });

    it('return NaN for promise.', () => {
      num = Promise.resolve(123.456);
      round(num, -3).should.be.NaN;
    });

    it('return NaN for non- number string.', () => {
      num = 'hello world';
      round(num, -3).should.be.NaN;
    });

    it('return NaN for rounding object.', () => {
      num = { a: 1 };
      round(num, -3).should.be.NaN;
    });

    it('return NaN for Undefined.', () => {
      num = undefined;
      round(num, -3).should.be.NaN;
    });

    it('return NaN for Symbol.', () => {
      num = Symbol();
      round(num, -3).should.be.NaN;
    });

  });

});
