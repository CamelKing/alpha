import * as chaiAsPromised from 'chai-as-promised';

import { FnPromiseFactory, makeAwait, randomInteger, theTypeOf } from '../../src/alpha';
import { expect, should, use } from 'chai';

should();
use(chaiAsPromised);


describe('makeAwait()\n', () => {

  describe('should produce a promise factory...', () => {

    let input: any;
    let prom: FnPromiseFactory;

    it('out of a string.', () => {
      input = 'hello world';
      prom = makeAwait(input);
      theTypeOf(prom).should.equal('function');
      theTypeOf(prom()).should.equal('promise');
      prom().should.eventually.equal(input);
    });

    it('out of a number.', () => {
      input = 123456.789;
      prom = makeAwait(input);
      theTypeOf(prom).should.equal('function');
      theTypeOf(prom()).should.equal('promise');
      prom().should.eventually.equal(input);
    });

    it('out of a boolean.', () => {
      input = randomInteger(0, 1) === 0;
      prom = makeAwait(input);
      theTypeOf(prom).should.equal('function');
      theTypeOf(prom()).should.equal('promise');
      prom().should.eventually.equal(input);
    });

    it('out of a Symbol.', () => {
      input = Symbol();
      prom = makeAwait(input);
      theTypeOf(prom).should.equal('function');
      theTypeOf(prom()).should.equal('promise');
      prom().should.eventually.equal(input);
    });

    it('out of a Null.', () => {
      input = null;
      prom = makeAwait(input);
      theTypeOf(prom).should.equal('function');
      theTypeOf(prom()).should.equal('promise');
      prom().should.eventually.equal(input);
    });

    it('out of an Undefined.', () => {
      input = undefined;
      prom = makeAwait(input);
      theTypeOf(prom).should.equal('function');
      theTypeOf(prom()).should.equal('promise');
      prom().should.eventually.equal(input);
    });

    it('out of an Object.', () => {
      input = { a: 1, b: 'hello', c: true };
      prom = makeAwait(input);
      theTypeOf(prom).should.equal('function');
      theTypeOf(prom()).should.equal('promise');
      prom().should.eventually.equal(input);
    });

    it('out of an Error Object.', () => {
      input = new Error('not an error');
      prom = makeAwait(input);
      theTypeOf(prom).should.equal('function');
      theTypeOf(prom()).should.equal('promise');
      prom().should.eventually.deep.equal(input);
    });

    it('out of a Promise.', () => {
      input = Promise.resolve('hello');
      prom = makeAwait(input);
      theTypeOf(prom).should.equal('function');
      theTypeOf(prom()).should.equal('promise');
      prom().should.eventually.equal('hello');
    });

    it('out of a function.', () => {
      input = () => ('hello world');
      prom = makeAwait(input);
      theTypeOf(prom).should.equal('function');
      theTypeOf(prom()).should.equal('promise');
      prom().should.eventually.equal('hello world');
    });

  });

});
