import { expect, should } from 'chai';

import { theTypeOf } from '../src/alpha';

should();

describe(theTypeOf.name + '() - @category Object', () => {

  describe('should identify the promise type correctly', () => {

    const pm: Promise<any> = new Promise((resolve: any, reject: any) => {
      resolve(123);
      reject(Error());
    });

    it('Object(pm) => "promise"', () => {
      theTypeOf(Object(pm)).should.be.equal('promise');
    });

    it('Promise.resolve(123) => "promise"', () => {
      theTypeOf(Promise.resolve(123)).should.be.equal('promise');
    });

    it('pm => "promise"', () => {
      theTypeOf(pm).should.be.equal('promise');
    });

  });

  describe('should identify the function type correctly', () => {

    const fn: () => number = () => 123;

    it('Object(fn) => "function"', () => {
      theTypeOf(Object(fn)).should.be.equal('function');
    });

    it('fn => "function"', () => {
      theTypeOf(fn).should.be.equal('function');
    });

    it('fn（） => "number" (in this case)', () => {
      theTypeOf(fn()).should.be.equal('number');
    });

  });


  describe('should identify the error type correctly', () => {

    it('Object(new Error()) => "error"', () => {
      theTypeOf(Object(new Error())).should.be.equal('error');
    });

    it('new Error("test") => "error"', () => {
      theTypeOf(new Error('test')).should.be.equal('error');
    });

    it('Error("test") => "error"', () => {
      theTypeOf(Error('test')).should.be.equal('error');
    });

    it('new Error() => "error"', () => {
      theTypeOf(new Error()).should.be.equal('error');
    });

    it('Error() => "error"', () => {
      theTypeOf(Error()).should.be.equal('error');
    });

  });

  describe('should identify the date type correctly', () => {

    it('Object(new Date()) => "date"', () => {
      theTypeOf(Object(new Date())).should.be.equal('date');
    });

    it('new Date() => "date"', () => {
      theTypeOf(new Date()).should.be.equal('date');
    });

    it('Date.now() => "number"', () => {
      theTypeOf(Date.now()).should.be.equal('number');
    });

    it('Date() => "string"', () => {
      theTypeOf(Date()).should.be.equal('string');
    });

  });

  describe('should identify the object type correctly', () => {

    it('Object({}) => "object"', () => {
      theTypeOf(Object({})).should.be.equal('object');
    });

    it('{a:1, b:{c:3, d:4}} => "object"', () => {
      theTypeOf({ a: 1, b: { c: 3, d: 4 } }).should.be.equal('object');
    });

    it('{a:1, b:2} => "object"', () => {
      theTypeOf({ a: 1, b: 2 }).should.be.equal('object');
    });

    it('{a:1} => "object"', () => {
      theTypeOf({ a: 1 }).should.be.equal('object');
    });

    it('{} => "object"', () => {
      theTypeOf({}).should.be.equal('object');
    });

  });

  describe('should identify the array type correctly', () => {

    const set: Set<number> = new Set([1, 2, 3]);

    it('Object(set) => "set"', () => {
      theTypeOf(Object(set)).should.be.equal('set');
    });

    it('set => "set"', () => {
      theTypeOf(set).should.be.equal('set');
    });

  });

  describe('should identify the array type correctly', () => {

    it('Object([1,2,3]) => "array"', () => {
      theTypeOf(Object([1, 2, 3])).should.be.equal('array');
    });

    it('[true,false] => "array"', () => {
      theTypeOf([true, false]).should.be.equal('array');
    });

    it('[{a:1},{b:2},{c:3}] => "array"', () => {
      theTypeOf([{ a: 1 }, { b: 2 }, { c: 3 }]).should.be.equal('array');
    });

    it('[Symbol(),Symbol(),Symbol()] => "array"', () => {
      theTypeOf([Symbol(), Symbol(), Symbol()]).should.be.equal('array');
    });

    it('["1","2","3"] => "array"', () => {
      theTypeOf(['1', '2', '3']).should.be.equal('array');
    });

    it('[1,[2,3]] => "array"', () => {
      theTypeOf([1, [2, 3]]).should.be.equal('array');
    });

    it('[1,2,3] => "array"', () => {
      theTypeOf([1, 2, 3]).should.be.equal('array');
    });

  });

  describe('should identify the symbol type correctly', () => {

    it('Object(Symbol()) => "symbol"', () => {
      theTypeOf(Object(Symbol())).should.be.equal('symbol');
    });

    it('Symbol() => "symbol"', () => {
      theTypeOf(Symbol()).should.be.equal('symbol');
    });

  });

  describe('should identify the boolean type correctly', () => {

    it('Object(true) => "boolean"', () => {
      theTypeOf(Object(true)).should.be.equal('boolean');
    });

    it('false => "boolean"', () => {
      theTypeOf(false).should.be.equal('boolean');
    });

    it('true => "boolean"', () => {
      theTypeOf(true).should.be.equal('boolean');
    });

  });


  describe('should identify the string type correctly', () => {

    it('Object("hello") => "string"', () => {
      theTypeOf(Object('hello')).should.be.equal('string');
    });

    it('"hello world" => "string"', () => {
      theTypeOf('hello world').should.be.equal('string');
    });

    it('"null" => "string"', () => {
      theTypeOf('null').should.be.equal('string');
    });

    it('"true" => "string"', () => {
      theTypeOf('true').should.be.equal('string');
    });

    it('"123" => "string"', () => {
      theTypeOf('123').should.be.equal('string');
    });

    it('"" => "string"', () => {
      theTypeOf('').should.be.equal('string');
    });

  });


  describe('should identify the number type correctly', () => {

    it('Object(123) => "number"', () => {
      theTypeOf(Object(123)).should.be.equal('number');
    });

    it('NaN => "nan"', () => {
      theTypeOf(NaN).should.be.equal('nan');
    });

    it('+Infinity => "number"', () => {
      theTypeOf(+Infinity).should.be.equal('number');
    });

    it('-Infinity => "number"', () => {
      theTypeOf(-Infinity).should.be.equal('number');
    });

    it('-123.456 => "number"', () => {
      theTypeOf(-123).should.be.equal('number');
    });

    it('123.456 => "number"', () => {
      theTypeOf(123).should.be.equal('number');
    });

    it('-123 => "number"', () => {
      theTypeOf(-123).should.be.equal('number');
    });

    it('123 => "number"', () => {
      theTypeOf(123).should.be.equal('number');
    });

    it('-0 => "number"', () => {
      theTypeOf(-0).should.be.equal('number');
    });

    it('+0 => "number"', () => {
      theTypeOf(+0).should.be.equal('number');
    });

  });

  describe('should operate as a pure function', () => {

    it('the variable being checked will not be altered', () => {

      const original: number[] = [1, 2, 3];
      const a: number[] = original.slice(0);
      theTypeOf(a).should.be.equal('array');
      a.should.deep.equal(original);

    });

  });

  describe('should handle null/undefined/empty parameters properly', () => {

    it('Object(undefined) => "object"', () => {
      theTypeOf(Object(undefined)).should.be.equal('object');
    });

    it('Object(null) => "object"', () => {
      theTypeOf(Object(null)).should.be.equal('object');
    });

    it('null => "null"', () => {
      theTypeOf(null).should.be.equal('null');
    });

    it('undefined => "undefined"', () => {
      theTypeOf(undefined).should.be.equal('undefined');
    });

  });

});



//   ['hello world'],
//   [''],
//   [undefined],
//   [null],
//   [NaN],
//   [true],
//   [false],
//   [[123, 'hello', true]],
//   [[123, ['hello', [true]]]],
//   [{}],
//   [{ a: 1, b: 2, c: 3, d: 4, e: 5 }],
//   [{ a: 1, a2: { b: 2, c: 3, d: 4 }, e: 5 }],
//   [new Date()],
//   [new Error()],
//   [Symbol()],
//   [() => 'abc'],
//   [Promise.resolve(5)],