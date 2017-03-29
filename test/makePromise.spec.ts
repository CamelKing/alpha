import * as chaiAsPromised from 'chai-as-promised';

import { expect, should, use } from 'chai';
import { makePromise, randomInteger, theTypeOf } from '../src/alpha';

should();
use(chaiAsPromised);

describe('makePromise()\n', () => {

  describe('should produce a promise...', () => {

    let input: any;
    let prom: Promise<any>;

    it('out of a string.', () => {
      input = 'hello world';
      prom = makePromise(input);
      theTypeOf(prom).should.equal('promise');
      return prom.should.eventually.equal(input);
    });

    it('out of a number.', () => {
      input = 123456.789;
      prom = makePromise(input);
      theTypeOf(prom).should.equal('promise');
      return prom.should.eventually.equal(input);
    });

    it('out of a boolean.', () => {
      input = randomInteger(0, 1) === 0;
      prom = makePromise(input);
      theTypeOf(prom).should.equal('promise');
      return prom.should.eventually.equal(input);
    });

    it('out of a Symbol.', () => {
      input = Symbol();
      prom = makePromise(input);
      theTypeOf(prom).should.equal('promise');
      prom.should.eventually.equal(input);
    });

    it('out of a Null.', () => {
      input = null;
      prom = makePromise(input);
      theTypeOf(prom).should.equal('promise');
      return prom.should.eventually.equal(input);
    });

    it('out of an Undefined.', () => {
      input = undefined;
      prom = makePromise(input);
      theTypeOf(prom).should.equal('promise');
      return prom.should.eventually.equal(input);
    });

    it('out of an Object.', () => {
      input = { a: 1, b: 'hello', c: true };
      prom = makePromise(input);
      theTypeOf(prom).should.equal('promise');
      return prom.should.eventually.equal(input);
    });

    it('out of an Error Object.', () => {
      input = new Error('not an error');
      prom = makePromise(input);
      theTypeOf(prom).should.equal('promise');
      return prom.should.eventually.deep.equal(input);
    });

    it('out of a Promise.', () => {
      input = Promise.resolve('hello');
      prom = makePromise(input);
      theTypeOf(prom).should.equal('promise');
      return prom.should.eventually.equal('hello');
    });

    it('out of a function.', () => {
      input = () => ('hello world');
      prom = makePromise(input);
      theTypeOf(prom).should.equal('promise');
      return prom.should.eventually.equal('hello world');
    });

  });

  describe('the returned promise should resolved appropriately...', () => {

    const result: string = 'work complete without error';
    const errMsg: string = 'Encountered error';

    function fnOK(): string {
      // do some work
      return result;
    }

    function fnErr(): string {
      // do some work
      if (errMsg) { throw new Error(errMsg); }
      return result;
    }

    it('should get result correctly if resolved', () => {
      const prom: Promise<any> = makePromise(fnOK);
      return prom.should.eventually.be.equal(result);
    });

    it('should get error correctly if rejected', () => {
      const prom: Promise<any> = makePromise(fnErr);
      // tslint:disable-next-line:no-unused-expression
      prom.should.eventually.be.rejected;
      return prom.should.eventually.be.rejectedWith(errMsg)
        .and.be.an.instanceOf(Error);
    });

  });

});
