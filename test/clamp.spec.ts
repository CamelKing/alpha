import { expect, should } from 'chai';

import { clamp } from '../src/alpha';

should();

describe(clamp.name + '() - @category Number', () => {

  describe('double clamp should apply [upper, lower] limit', () => {

    it('5.456 clamped by [1.123, 10.789] => 5.456', () => {
      const result: number = clamp(5.456, 1.123, 10.789);
      result.should.equal(5.456);
    });

    it('5.456 clamped by [10.789, 1.123] => 5.456', () => {
      const result: number = clamp(5.456, 10.789, 1.123);
      result.should.equal(5.456);
    });

    it('-100.789 clamped by [1.123, 10.456] => 1.123', () => {
      const result: number = clamp(-100.789, 1.123, 10.456);
      result.should.equal(1.123);
    });

    it('-100.789 clamped by [10.456, 1.123] => 1.123', () => {
      const result: number = clamp(-100.789, 10.456, 1.123);
      result.should.equal(1.123);
    });


    it('5 clamped by [1, 10] => 5', () => {
      const result: number = clamp(5, 1, 10);
      result.should.equal(5);
    });

    it('5 clamped by [10, 1] => 5', () => {
      const result: number = clamp(5, 10, 1);
      result.should.equal(5);
    });

    it('-100 clamped by [1, 10] => 1', () => {
      const result: number = clamp(-100, 1, 10);
      result.should.equal(1);
    });

    it('-100 clamped by [10, 1] => 1', () => {
      const result: number = clamp(-100, 10, 1);
      result.should.equal(1);
    });

    it('100 clamped by [1, 10] => 10', () => {
      const result: number = clamp(100, 1, 10);
      result.should.equal(10);
    });

    it('100 clamped by [10, 1] => 10', () => {
      const result: number = clamp(100, 10, 1);
      result.should.equal(10);
    });

  });

  describe('single clamp should apply upper limit', () => {

    it('10.123 clamped by [-5.678,] => -5.678', () => {
      const result: number = clamp(10.123, -5.678);
      result.should.equal(-5.678);
    });

    it('10.123 clamped by [20.678,] => 10.123', () => {
      const result: number = clamp(10.123, 20.678);
      result.should.equal(10.123);
    });

    it('10.123 clamped by [5.678,] => 5.678', () => {
      const result: number = clamp(10.123, 5.678);
      result.should.equal(5.678);
    });


    it('10 clamped by [-5,] => -5', () => {
      const result: number = clamp(10, -5);
      result.should.equal(-5);
    });

    it('10 clamped by [20,] => 10', () => {
      const result: number = clamp(10, 20);
      result.should.equal(10);
    });

    it('10 clamped by [10,] => 10', () => {
      const result: number = clamp(10, 10);
      result.should.equal(10);
    });

    it('10 clamped by [5,] => 5', () => {
      const result: number = clamp(10, 5);
      result.should.equal(5);
    });

  });

  describe('should operate as a pure function', () => {

    it('the number-variable being clamped will not be altered', () => {
      const original: number = 150;
      const test: number = original;
      const result: number = clamp(test, 100, 1);
      result.should.equal(100);
      test.should.equal(original);
    });

  });

  describe('should handle invalid parameters properly', () => {

    it('return NaN when passed in NaN', () => {
      const result: number = clamp(NaN, 100, 1);
      // tslint:disable-next-line:no-unused-expression
      result.should.be.NaN;
    });

    it('return null when passed in null', () => {
      const result: number = clamp(null, 100, 1);
      // tslint:disable-next-line:no-unused-expression
      (result === null).should.be.true;
    });

    it('return undefined when passed in undefined', () => {
      const result: number = clamp(undefined, 100, 1);
      // tslint:disable-next-line:no-unused-expression
      (result === undefined).should.be.true;
    });


  });

});
