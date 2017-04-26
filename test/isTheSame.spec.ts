import { expect, should } from 'chai';
import { isTheSame, randomText } from '../src/alpha';

should();

describe(isTheSame.name + '() - @category Object', () => {

  describe('should be able to compare arrays correctly', () => {

    it('[1,[2,[3],4],5] [1,[2,[3.5],4],5] => false', () => {
      isTheSame([1, [2, [3], 4], 5], [1, [2, [3.5], 4], 5]).should.be.false;
    });

    it('[1,[2,[3],4],5] [1,[2,[3],4],5] => true', () => {
      isTheSame([1, [2, [3], 4], 5], [1, [2, [3], 4], 5]).should.be.true;
    });

    it('[1,[2,3,4],5] [1,[2,4,4],5] => true', () => {
      isTheSame([1, [2, 3, 4], 5], [1, [2, 4, 4], 5]).should.be.false;
    });

    it('[1,[2,3,4],5] [1,[2,3,4],5] => true', () => {
      isTheSame([1, [2, 3, 4], 5], [1, [2, 3, 4], 5]).should.be.true;
    });

    it('[1,0] [true, false] => false', () => {
      isTheSame([1, 0], [true, false]).should.be.false;
    });

    it('["1","2","3"] ["1","2","3"] => true', () => {
      isTheSame(['1', '2', '3'], ['1', '2', '3']).should.be.true;
    });

    it('[1,2,3] ["1","2","3"] => false', () => {
      isTheSame([1, 2, 3], ['1', '2', '3']).should.be.false;
    });

    it('[1,2,3] [1,2,4] => false', () => {
      isTheSame([1, 2, 3], [1, 2, 4]).should.be.false;
    });

    it('[1,2,3] [1,2,3] => true', () => {
      isTheSame([1, 2, 3], [1, 2, 3]).should.be.true;
    });

  });

  describe('should be able to compare error object correctly', () => {

    it('compare error vs object (copy property) => false', () => {
      const e1: Error = new Error('testing 1');
      const e2: object = {};
      e2['stack'] = e1.stack;
      e2['message'] = e1.message;
      isTheSame(e1, e2).should.be.false;
    });

    it('compare cloned error object => true', () => {
      const e1: Error = new Error('testing 1');
      const e2: Error = new Error('testing 1');
      e2.stack = e1.stack;
      isTheSame(e1, e2).should.be.true;
    });

    it('Error("testing 1") Error("testing 2") => false', () => {
      isTheSame(Error('testing 1'), Error('testing 2')).should.be.false;
    });

    it('Error("testing 1") Error("testing 1") => false', () => {
      isTheSame(Error('testing 1'), Error('testing 1')).should.be.false;
    });

  });

  describe('should be able to compare object correctly', () => {

    it('{a:1, b:{c:2, d:3}} {a:1, b:{c:2, d:4}} => false', () => {
      isTheSame({ a: 1, b: { c: 2, d: 3 } }, { a: 1, b: { c: 2, d: 4 } }).should.be.false;
    });

    it('{a:1, b:{c:2, d:3}} {a:1, b:{c:2, d:3}} => true', () => {
      isTheSame({ a: 1, b: { c: 2, d: 3 } }, { a: 1, b: { c: 2, d: 3 } }).should.be.true;
    });

    it('{a:1, b:2} {a:1, b:2} => true', () => {
      isTheSame({ a: 1, b: 2 }, { a: 1, b: 2 }).should.be.true;
    });

    it('{a:1, b:2} {b:2, a:1} => true', () => {
      isTheSame({ a: 1, b: 2 }, { b: 2, a: 1 }).should.be.true;
    });

    it('{a:1, b:2} true => false', () => {
      isTheSame({ a: 1, b: 2 }, true).should.be.false;
    });

    it('{a:1, b:2} "hello" => false', () => {
      isTheSame({ a: 1, b: 2 }, 'hello').should.be.false;
    });

    it('{a:1, b:2} 123 => false', () => {
      isTheSame({ a: 1, b: 2 }, 123).should.be.false;
    });

    it('{a:1, b:2} {a:1, c:2} => false', () => {
      isTheSame({ a: 1, b: 2 }, { a: 1, c: 2 }).should.be.false;
    });

    it('{a:1, b:2} {a:1, b:2, c:3} => false', () => {
      isTheSame({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }).should.be.false;
    });

  });

  describe('should be able to compare Symbol correctly', () => {

    const originalSym: Symbol = Symbol();
    const s1: Symbol = originalSym;
    const s2: Symbol = originalSym;
    const s3: Symbol = Symbol();

    it('symbol vs same dsymbol => true', () => {
      isTheSame(s1, s2).should.be.true;
    });

    it('symbol vs new symbol => false', () => {
      isTheSame(s1, s3).should.be.false;
    });

  });

  describe('should be able to compare date object correctly', () => {

    const originalDate: Date = new Date();
    const d1: Date = new Date(originalDate.getTime());
    const d2: Date = new Date(originalDate.getTime());
    const d3: Date = new Date(originalDate.getTime() + 1000);

    it('date vs same date => true', () => {
      isTheSame(d1, d2).should.be.true;
    });

    it('date vs different date => false', () => {
      isTheSame(d1, d3).should.be.false;
    });

  });

  describe('should be able to compare booleans correctly', () => {

    it('true vs "true" => false', () => {
      isTheSame(true, 'true').should.be.false;
    });

    it('false vs "false" => false', () => {
      isTheSame(false, 'false').should.be.false;
    });

    it('true vs 1 => false', () => {
      isTheSame(true, 1).should.be.false;
    });

    it('false vs 0 => false', () => {
      isTheSame(false, 0).should.be.false;
    });

    it('false vs true => true', () => {
      isTheSame(false, true).should.be.false;
    });

    it('true vs false => true', () => {
      isTheSame(true, false).should.be.false;
    });

    it('false vs false => true', () => {
      isTheSame(false, false).should.be.true;
    });

    it('true vs true => true', () => {
      isTheSame(true, true).should.be.true;
    });

    it('true vs null => false', () => {
      isTheSame(true, null).should.be.false;
    });

    it('true vs undefined => false', () => {
      isTheSame(true, undefined).should.be.false;
    });

  });

  describe('should be able to compare numbers correctly', () => {

    it('Infinity vs NaN => false', () => {
      isTheSame(Infinity, NaN).should.be.false;
    });

    it('-Infinity vs +Infinity => false', () => {
      isTheSame(-Infinity, +Infinity).should.be.false;
    });

    it('+Infinity vs -Infinity => false', () => {
      isTheSame(+Infinity, -Infinity).should.be.false;
    });

    it('Infinity vs +Infinity => true', () => {
      isTheSame(Infinity, +Infinity).should.be.true;
    });

    it('Infinity vs Infinity => true', () => {
      isTheSame(Infinity, Infinity).should.be.true;
    });

    it('-0 vs 0 => true', () => {
      isTheSame(-0, 0).should.be.true;
    });

    it('0 vs -0 => true', () => {
      isTheSame(0, -0).should.be.true;
    });

    it('-0 vs -0 => true', () => {
      isTheSame(-0, -0).should.be.true;
    });

    it('0 vs 0 => true', () => {
      isTheSame(0, 0).should.be.true;
    });

    it('0 vs false => false', () => {
      isTheSame(0, false).should.be.false;
    });

    it('1 vs true => false', () => {
      isTheSame(1, true).should.be.false;
    });

    it('123 vs "123" => false', () => {
      isTheSame(123, '123').should.be.false;
    });

    it('-123.456 vs 123.456 => false', () => {
      isTheSame(-123.456, 123.456).should.be.false;
    });

    it('123.456 vs -123.456 => false', () => {
      isTheSame(123.456, -123.456).should.be.false;
    });

    it('-123.456 vs -123.456 => true', () => {
      isTheSame(-123.456, -123.456).should.be.true;
    });

    it('123.456 vs 123.456 => true', () => {
      isTheSame(123.456, 123.456).should.be.true;
    });

    it('-123 vs 123 => false', () => {
      isTheSame(-123, 123).should.be.false;
    });

    it('123 vs -123 => false', () => {
      isTheSame(123, -123).should.be.false;
    });

    it('-123 vs -123 => true', () => {
      isTheSame(-123, -123).should.be.true;
    });

    it('123 vs 456 => false', () => {
      isTheSame(123, 456).should.be.false;
    });

    it('123 vs 123 => true', () => {
      isTheSame(123, 123).should.be.true;
    });

    it('123 vs "123" => false', () => {
      isTheSame(123, '123').should.be.false;
    });

    it('123 vs null => false', () => {
      isTheSame(123, null).should.be.false;
    });

    it('123 vs undefined => false', () => {
      isTheSame(123, undefined).should.be.false;
    });

  });

  describe('should be able to compare strings correctly', () => {

    const s1: string = randomText(20);

    it('"hello" vs undefined => false', () => {
      isTheSame('hello', undefined).should.be.false;
    });

    it('"hello" vs null => false', () => {
      isTheSame('hello', null).should.be.false;
    });

    it('"hello" vs true => false', () => {
      isTheSame('hello', true).should.be.false;
    });

    it('"hello" vs 123 => false', () => {
      isTheSame('hello', 123).should.be.false;
    });

    it('"" vs null => false', () => {
      isTheSame('', null).should.be.false;
    });

    it('"" vs undefined => false', () => {
      isTheSame('', undefined).should.be.false;
    });

    it('" " vs "   " => false', () => {
      isTheSame(' ', '   ').should.be.false;
    });

    it('"" vs " " => false', () => {
      isTheSame('', ' ').should.be.false;
    });

    it('"" vs "" => true', () => {
      isTheSame('', '').should.be.true;
    });

    it('compare diff strings of same length => false', () => {
      isTheSame(s1, randomText(20)).should.be.false;
    });

    it('compare same strings of same length => true', () => {
      const s2: string = s1.slice(0);
      isTheSame(s1, s2).should.be.true;
    });

    it('compare diff strings of diff length => false', () => {
      isTheSame(s1, randomText(30)).should.be.false;
    });

  });

  describe('should operate as a pure function', () => {

    const origArr1: number[] = [1, 2, 3];
    const origArr2: number[] = [4, 5, 6];
    const arr1: number[] = origArr1.slice(0);
    const arr2: number[] = origArr1.slice(0);
    const arr3: number[] = origArr2.slice(0);

    it('both variables (same) being compared will not be altered', () => {
      isTheSame(arr1, arr2).should.be.true;
      arr1.should.be.deep.equal(origArr1);
      arr2.should.be.deep.equal(origArr1);
    });

    it('both variables (diff) being compared will not be altered', () => {
      isTheSame(arr1, arr3).should.be.false;
      arr1.should.be.deep.equal(origArr1);
      arr3.should.be.deep.equal(origArr2);
    });

  });

  describe('should alwats return false not functions and promises', () => {

    it('promise vs same promise => false', () => {
      const pr: Promise<boolean> = Promise.resolve(true);
      isTheSame(pr, pr).should.be.false;
    });

    it('function vs same function => false', () => {
      const fn: () => number = () => 123;
      isTheSame(fn, fn).should.be.false;
    });

    it('function result vs same function result => true', () => {
      const fn: () => number = () => 123;
      isTheSame(fn(), fn()).should.be.true;
    });


  });

  describe('should handle null/undefined/empty parameters properly', () => {

    it('compare {} to [] => false', () => {
      isTheSame({}, []).should.be.false;
    });

    it('compare null to undefined => false', () => {
      isTheSame(null, undefined).should.be.false;
    });

    it('compare undefined to null => false', () => {
      isTheSame(undefined, null).should.be.false;
    });

    it('compare {} to {} => true', () => {
      isTheSame({}, {}).should.be.true;
    });

    it('compare [{}] to [{}] => true', () => {
      isTheSame([{}], [{}]).should.be.true;
    });

    it('compare [[]] to [[]] => true', () => {
      isTheSame([[]], [[]]).should.be.true;
    });

    it('compare [] to [] => true', () => {
      isTheSame([], []).should.be.true;
    });

    it('compare NaN to NaN => true', () => {
      isTheSame(NaN, NaN).should.be.true;
    });

    it('compare null to null => true', () => {
      isTheSame(null, null).should.be.true;
    });

    it('compare undefined to undefined => true', () => {
      isTheSame(undefined, undefined).should.be.true;
    });

  });

});
