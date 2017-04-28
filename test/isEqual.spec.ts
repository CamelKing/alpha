// tslint:disable-next-line:max-file-line-count
import { expect, should } from 'chai';
import { isEqual, randomText } from '../src/alpha';

should();

describe(isEqual.name + '() - @category Object', () => {

  describe('should compare Objectified Primitives correctly', () => {

    it('{[Number: 123] a:1} {{Promise: p1} => false', () => {
      const o1: object = Object(123);
      o1['a'] = 1;
      const o2: object = Object(Promise.resolve(123));
      o2['a'] = 1;
      isEqual(o1, o2).should.be.false;
    });

    it('{[Number: 123] a:1} {{Function: f1} => false', () => {
      const o1: object = Object(123);
      o1['a'] = 1;
      const o2: object = Object(() => 123);
      o2['a'] = 1;
      isEqual(o1, o2).should.be.false;
    });

    it('{[Number: 123] a:1} {{Date:date()} a:1} => false', () => {
      const o1: object = Object(123);
      o1['a'] = 1;
      const o2: object = Object(new Date());
      o2['a'] = 1;
      isEqual(o1, o2).should.be.false;
    });

    it('{[Number: 123] a:1} {{Number:123} a:1} => false', () => {
      const o1: object = Object(123);
      o1['a'] = 1;
      const o2: object = Object({ Number: 123 });
      o2['a'] = 1;
      isEqual(o1, o2).should.be.false;
    });

    it('{[Number: 123] a:1} {[1,2,3] a:1} => false', () => {
      const o1: object = Object(123);
      o1['a'] = 1;
      const o2: object = Object([1, 2, 3]);
      o2['a'] = 1;
      isEqual(o1, o2).should.be.false;
    });

    it('{[Number: 123] a:1} {[Number: NaN] a:1} => false', () => {
      const o1: object = Object(123);
      o1['a'] = 1;
      const o2: object = Object(NaN);
      o2['a'] = 1;
      isEqual(o1, o2).should.be.false;
    });

    it('{{null} a:1} {{undefined} a:1} => true', () => {
      const o1: object = Object(null);
      o1['a'] = 1;
      const o2: object = Object(undefined);
      o2['a'] = 1;
      isEqual(o1, o2).should.be.true;
    });

    it('{{null} a:1} {{null} a:1} => true', () => {
      const o1: object = Object(null);
      o1['a'] = 1;
      const o2: object = Object(null);
      o2['a'] = 1;
      isEqual(o1, o2).should.be.true;
    });

    it('{{undefined} a:1} {{undefined} a:1} => true', () => {
      const o1: object = Object(undefined);
      o1['a'] = 1;
      const o2: object = Object(undefined);
      o2['a'] = 1;
      isEqual(o1, o2).should.be.true;
    });

    it('{[Number: 123] a:1} {{undefined} a:1} => false', () => {
      const o1: object = Object(123);
      o1['a'] = 1;
      const o2: object = Object(undefined);
      o2['a'] = 1;
      isEqual(o1, o2).should.be.false;
    });

    it('{[Number: 123] a:1} {{null} a:1} => false', () => {
      const o1: object = Object(123);
      o1['a'] = 1;
      const o2: object = Object(null);
      o2['a'] = 1;
      isEqual(o1, o2).should.be.false;
    });

    it('{[Number: 123] a:1} {[String: "hello"] a:1} => false', () => {
      const o1: object = Object(123);
      o1['a'] = 1;
      const o2: object = Object('hello');
      o2['a'] = 1;
      isEqual(o1, o2).should.be.false;
    });

    it('{[Boolean: true] a:1} {[String: "hello"] a:1} => false', () => {
      const o1: object = Object(true);
      o1['a'] = 1;
      const o2: object = Object('hello');
      o2['a'] = 1;
      isEqual(o1, o2).should.be.false;
    });

    it('{[Boolean: true] a:1} {[Number: 123] a:1} => false', () => {
      const o1: object = Object(true);
      o1['a'] = 1;
      const o2: object = Object(123);
      o2['a'] = 1;
      isEqual(o1, o2).should.be.false;
    });

    it('{[Symbol: Symbol()] a:1} {[Number: 123] a:1} => false', () => {
      const o1: object = Object(Symbol());
      o1['a'] = 1;
      const o2: object = Object(123);
      o2['a'] = 1;
      isEqual(o1, o2).should.be.false;
    });

    it('{[Symbol: Symbol()] a:1} {[String: "hello"] a:1} => false', () => {
      const o1: object = Object(Symbol());
      o1['a'] = 1;
      const o2: object = Object('hello');
      o2['a'] = 1;
      isEqual(o1, o2).should.be.false;
    });

    it('{[Symbol: Symbol()] a:1} {[Boolean: true] a:1} => false', () => {
      const o1: object = Object(Symbol());
      o1['a'] = 1;
      const o2: object = Object(true);
      o2['a'] = 1;
      isEqual(o1, o2).should.be.false;
    });

    it('{[Symbol: Symbol()] a:1} {[Symbol: same Symbol()] a:1} => true', () => {
      const s1: Symbol = Symbol();
      const o1: object = Object(s1);
      o1['a'] = 1;
      const o2: object = Object(s1);
      o2['a'] = 1;
      isEqual(o1, o2).should.be.true;
    });

    it('{[Symbol: Symbol()] a:1} {[Symbol: diff Symbol()] a:1} => true', () => {
      const s1: Symbol = Symbol();
      const s2: Symbol = Symbol();
      const o1: object = Object(s1);
      o1['a'] = 1;
      const o2: object = Object(s2);
      o2['a'] = 1;
      isEqual(o1, o2).should.be.false;
    });

    it('{[Boolean: true] a:1} {[Boolean: true] a:1} => true', () => {
      const o1: object = Object(true);
      o1['a'] = 1;
      const o2: object = Object(true);
      o2['a'] = 1;
      isEqual(o1, o2).should.be.true;
    });

    it('{[Boolean: true] a:1} {[Boolean: true] a:2} => false', () => {
      const o1: object = Object(true);
      o1['a'] = 1;
      const o2: object = Object(true);
      o2['a'] = 2;
      isEqual(o1, o2).should.be.false;
    });

    it('{[String:"hello"] a:1} {[String:"hello"] a:1} => true', () => {
      const o1: object = Object('hello');
      o1['a'] = 1;
      const o2: object = Object('hello');
      o2['a'] = 1;
      isEqual(o1, o2).should.be.true;
    });

    it('{[String:"hello"] a:1} {[String:"hello"] a:2} => false', () => {
      const o1: object = Object('hello');
      o1['a'] = 1;
      const o2: object = Object('hello');
      o2['a'] = 2;
      isEqual(o1, o2).should.be.false;
    });

    it('{[Number:1] a:1} {[Number:1] a:1} => true', () => {
      const o1: object = Object(1);
      o1['a'] = 1;
      const o2: object = Object(1);
      o2['a'] = 1;
      isEqual(o1, o2).should.be.true;
    });

    it('{[Number:1] a:1} {[Number:1] a:2} => false', () => {
      const o1: object = Object(1);
      o1['a'] = 1;
      const o2: object = Object(1);
      o2['a'] = 2;
      isEqual(o1, o2).should.be.false;
    });

    it('{[Number:1] a:1} {[Number:2] a:1} => false', () => {
      const o1: object = Object(1);
      o1['a'] = 1;
      const o2: object = Object(2);
      o2['a'] = 1;
      isEqual(o1, o2).should.be.false;
    });

  });

  describe('should compare arrays correctly', () => {

    it('[1,[2,[3],4],5] [1,[2,[3.5],4],5] => false', () => {
      isEqual([1, [2, [3], 4], 5], [1, [2, [3.5], 4], 5]).should.be.false;
    });

    it('[1,[2,[3],4],5] [1,[2,[3],4],5] => true', () => {
      isEqual([1, [2, [3], 4], 5], [1, [2, [3], 4], 5]).should.be.true;
    });

    it('[1,[2,3,4],5] [1,[2,4,4],5] => true', () => {
      isEqual([1, [2, 3, 4], 5], [1, [2, 4, 4], 5]).should.be.false;
    });

    it('[1,[2,3,4],5] [1,[2,3,4],5] => true', () => {
      isEqual([1, [2, 3, 4], 5], [1, [2, 3, 4], 5]).should.be.true;
    });

    it('[1,0] [true, false] => false', () => {
      isEqual([1, 0], [true, false]).should.be.false;
    });

    it('["1","2","3"] ["1","2","3"] => true', () => {
      isEqual(['1', '2', '3'], ['1', '2', '3']).should.be.true;
    });

    it('[1,2,3] ["1","2","3"] => false', () => {
      isEqual([1, 2, 3], ['1', '2', '3']).should.be.false;
    });

    it('[1,2,3] [1,2,4] => false', () => {
      isEqual([1, 2, 3], [1, 2, 4]).should.be.false;
    });

    it('[1,2,3] [1,2] => false', () => {
      isEqual([1, 2, 3], [1, 2]).should.be.false;
    });

    it('[1,2,3] [1,2,3] => true', () => {
      isEqual([1, 2, 3], [1, 2, 3]).should.be.true;
    });

  });

  describe('should compare error object correctly', () => {

    it('compare error vs object (copy property) => false', () => {
      const e1: Error = new Error('testing 1');
      const e2: object = {};
      e2['stack'] = e1.stack;
      e2['message'] = e1.message;
      isEqual(e1, e2).should.be.false;
    });

    it('compare cloned error object => true', () => {
      const e1: Error = new Error('testing 1');
      const e2: Error = new Error('testing 1');
      e2.stack = e1.stack;
      isEqual(e1, e2).should.be.true;
    });

    it('Error("testing 1") Error("testing 2") => false', () => {
      isEqual(Error('testing 1'), Error('testing 2')).should.be.false;
    });

    it('Error("testing 1") Error("testing 1") => false', () => {
      isEqual(Error('testing 1'), Error('testing 1')).should.be.false;
    });

  });

  describe('should compare object correctly', () => {

    it('{a:1, b:{c:2, d:3}} {a:1, b:{c:2, d:4}} => false', () => {
      isEqual({ a: 1, b: { c: 2, d: 3 } }, { a: 1, b: { c: 2, d: 4 } }).should.be.false;
    });

    it('{a:1, b:{c:2, d:3}} {a:1, b:{c:2, d:3}} => true', () => {
      isEqual({ a: 1, b: { c: 2, d: 3 } }, { a: 1, b: { c: 2, d: 3 } }).should.be.true;
    });

    it('{a:1, b:2} {a:1, b:2} => true', () => {
      isEqual({ a: 1, b: 2 }, { a: 1, b: 2 }).should.be.true;
    });

    it('{a:1, b:2} {b:2, a:1} => true', () => {
      isEqual({ a: 1, b: 2 }, { b: 2, a: 1 }).should.be.true;
    });

    it('{a:1, b:2} true => false', () => {
      isEqual({ a: 1, b: 2 }, true).should.be.false;
    });

    it('{a:1, b:2} "hello" => false', () => {
      isEqual({ a: 1, b: 2 }, 'hello').should.be.false;
    });

    it('{a:1, b:2} 123 => false', () => {
      isEqual({ a: 1, b: 2 }, 123).should.be.false;
    });

    it('{a:1, b:2} {a:1, c:2} => false', () => {
      isEqual({ a: 1, b: 2 }, { a: 1, c: 2 }).should.be.false;
    });

    it('{a:1, b:2} {a:1, b:2, c:3} => false', () => {
      isEqual({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }).should.be.false;
    });

  });

  describe('should compare Symbol correctly', () => {

    const originalSym: Symbol = Symbol();
    const s1: Symbol = originalSym;
    const s2: Symbol = originalSym;
    const s3: Symbol = Symbol();

    it('symbol vs same symbol => true', () => {
      isEqual(s1, s2).should.be.true;
    });

    it('symbol vs new symbol => false', () => {
      isEqual(s1, s3).should.be.false;
    });

  });

  describe('should compare date object correctly', () => {

    const originalDate: Date = new Date();
    const d1: Date = new Date(originalDate.getTime());
    const d2: Date = new Date(originalDate.getTime());
    const d3: Date = new Date(originalDate.getTime() + 1000);

    it('date vs same date => true', () => {
      isEqual(d1, d2).should.be.true;
    });

    it('date vs different date => false', () => {
      isEqual(d1, d3).should.be.false;
    });

  });

  describe('should compare booleans correctly', () => {

    it('true vs "true" => false', () => {
      isEqual(true, 'true').should.be.false;
    });

    it('false vs "false" => false', () => {
      isEqual(false, 'false').should.be.false;
    });

    it('true vs 1 => false', () => {
      isEqual(true, 1).should.be.false;
    });

    it('false vs 0 => false', () => {
      isEqual(false, 0).should.be.false;
    });

    it('false vs true => true', () => {
      isEqual(false, true).should.be.false;
    });

    it('true vs false => true', () => {
      isEqual(true, false).should.be.false;
    });

    it('false vs false => true', () => {
      isEqual(false, false).should.be.true;
    });

    it('true vs true => true', () => {
      isEqual(true, true).should.be.true;
    });

    it('true vs null => false', () => {
      isEqual(true, null).should.be.false;
    });

    it('true vs undefined => false', () => {
      isEqual(true, undefined).should.be.false;
    });

  });

  describe('should compare numbers correctly', () => {

    it('Infinity vs NaN => false', () => {
      isEqual(Infinity, NaN).should.be.false;
    });

    it('-Infinity vs +Infinity => false', () => {
      isEqual(-Infinity, +Infinity).should.be.false;
    });

    it('+Infinity vs -Infinity => false', () => {
      isEqual(+Infinity, -Infinity).should.be.false;
    });

    it('Infinity vs +Infinity => true', () => {
      isEqual(Infinity, +Infinity).should.be.true;
    });

    it('Infinity vs Infinity => true', () => {
      isEqual(Infinity, Infinity).should.be.true;
    });

    it('-0 vs 0 => true', () => {
      isEqual(-0, 0).should.be.true;
    });

    it('0 vs -0 => true', () => {
      isEqual(0, -0).should.be.true;
    });

    it('-0 vs -0 => true', () => {
      isEqual(-0, -0).should.be.true;
    });

    it('0 vs 0 => true', () => {
      isEqual(0, 0).should.be.true;
    });

    it('0 vs false => false', () => {
      isEqual(0, false).should.be.false;
    });

    it('1 vs true => false', () => {
      isEqual(1, true).should.be.false;
    });

    it('123 vs "123" => false', () => {
      isEqual(123, '123').should.be.false;
    });

    it('-123.456 vs 123.456 => false', () => {
      isEqual(-123.456, 123.456).should.be.false;
    });

    it('123.456 vs -123.456 => false', () => {
      isEqual(123.456, -123.456).should.be.false;
    });

    it('-123.456 vs -123.456 => true', () => {
      isEqual(-123.456, -123.456).should.be.true;
    });

    it('123.456 vs 123.456 => true', () => {
      isEqual(123.456, 123.456).should.be.true;
    });

    it('-123 vs 123 => false', () => {
      isEqual(-123, 123).should.be.false;
    });

    it('123 vs -123 => false', () => {
      isEqual(123, -123).should.be.false;
    });

    it('-123 vs -123 => true', () => {
      isEqual(-123, -123).should.be.true;
    });

    it('123 vs 456 => false', () => {
      isEqual(123, 456).should.be.false;
    });

    it('123 vs 123 => true', () => {
      isEqual(123, 123).should.be.true;
    });

    it('123 vs "123" => false', () => {
      isEqual(123, '123').should.be.false;
    });

    it('123 vs null => false', () => {
      isEqual(123, null).should.be.false;
    });

    it('123 vs undefined => false', () => {
      isEqual(123, undefined).should.be.false;
    });

  });

  describe('should compare strings correctly', () => {

    const s1: string = randomText(20);

    it('"hello" vs undefined => false', () => {
      isEqual('hello', undefined).should.be.false;
    });

    it('"hello" vs null => false', () => {
      isEqual('hello', null).should.be.false;
    });

    it('"hello" vs true => false', () => {
      isEqual('hello', true).should.be.false;
    });

    it('"hello" vs 123 => false', () => {
      isEqual('hello', 123).should.be.false;
    });

    it('"" vs null => false', () => {
      isEqual('', null).should.be.false;
    });

    it('"" vs undefined => false', () => {
      isEqual('', undefined).should.be.false;
    });

    it('" " vs "   " => false', () => {
      isEqual(' ', '   ').should.be.false;
    });

    it('"" vs " " => false', () => {
      isEqual('', ' ').should.be.false;
    });

    it('"" vs "" => true', () => {
      isEqual('', '').should.be.true;
    });

    it('compare diff strings of same length => false', () => {
      isEqual(s1, randomText(20)).should.be.false;
    });

    it('compare same strings of same length => true', () => {
      const s2: string = s1.slice(0);
      isEqual(s1, s2).should.be.true;
    });

    it('compare diff strings of diff length => false', () => {
      isEqual(s1, randomText(30)).should.be.false;
    });

  });

  describe('should operate as a pure function', () => {

    const origArr1: number[] = [1, 2, 3];
    const origArr2: number[] = [4, 5, 6];
    const arr1: number[] = origArr1.slice(0);
    const arr2: number[] = origArr1.slice(0);
    const arr3: number[] = origArr2.slice(0);

    it('both variables (same) being compared will not be altered', () => {
      isEqual(arr1, arr2).should.be.true;
      arr1.should.be.deep.equal(origArr1);
      arr2.should.be.deep.equal(origArr1);
    });

    it('both variables (diff) being compared will not be altered', () => {
      isEqual(arr1, arr3).should.be.false;
      arr1.should.be.deep.equal(origArr1);
      arr3.should.be.deep.equal(origArr2);
    });

  });

  describe('should return undefined for functions, promises and sets', () => {

    it('set vs same set => undefined', () => {
      const s1: Set<number> = new Set([1, 2, 3]);
      const s2: Set<number> = s1;
      // tslint:disable-next-line:no-unused-expression
      (isEqual(s1, s2) === undefined).should.be.true;
    });

    it('set vs diff set (same value) => undefined', () => {
      const s1: Set<number> = new Set([1, 2, 3]);
      const s2: Set<number> = new Set([1, 2, 3]);
      // tslint:disable-next-line:no-unused-expression
      (isEqual(s1, s2) === undefined).should.be.true;
    });

    it('set vs diff set (diff value) => undefined', () => {
      const s1: Set<number> = new Set([1, 2, 3]);
      const s2: Set<number> = new Set([4, 5, 6]);
      // tslint:disable-next-line:no-unused-expression
      (isEqual(s1, s2) === undefined).should.be.true;
    });


    it('promise vs same promise => undefined', () => {
      const pr: Promise<boolean> = Promise.resolve(true);
      // tslint:disable-next-line:no-unused-expression
      (isEqual(pr, pr) === undefined).should.be.true;
    });

    it('function vs same function => undefined', () => {
      const fn: () => number = () => 123;
      // tslint:disable-next-line:no-unused-expression
      (isEqual(fn, fn) === undefined).should.be.true;
    });

    it('function result vs same function result => true', () => {
      const fn: () => number = () => 123;
      isEqual(fn(), fn()).should.be.true;
    });

  });

  describe('should handle null/undefined/empty parameters properly', () => {

    it('compare {} to [] => false', () => {
      isEqual({}, []).should.be.false;
    });

    it('compare null to undefined => false', () => {
      isEqual(null, undefined).should.be.false;
    });

    it('compare undefined to null => false', () => {
      isEqual(undefined, null).should.be.false;
    });

    it('compare {} to {} => true', () => {
      isEqual({}, {}).should.be.true;
    });

    it('compare [{}] to [{}] => true', () => {
      isEqual([{}], [{}]).should.be.true;
    });

    it('compare [[]] to [[]] => true', () => {
      isEqual([[]], [[]]).should.be.true;
    });

    it('compare [] to [] => true', () => {
      isEqual([], []).should.be.true;
    });

    it('compare NaN to NaN => true', () => {
      isEqual(NaN, NaN).should.be.true;
    });

    it('compare null to null => true', () => {
      isEqual(null, null).should.be.true;
    });

    it('compare undefined to undefined => true', () => {
      isEqual(undefined, undefined).should.be.true;
    });

  });

});
