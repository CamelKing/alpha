import { expect, should } from 'chai';

import { randomInteger } from '../src/alpha';

should();

describe('randomInteger() should generate...', () => {

  let num: number;

  it('a random integer by default between [0,x].', () => {
    for (let i: number = 0; i < 200; i++) {
      num = randomInteger(100);
      num.should.gte(0);
      num.should.lte(100);
    }
  });

  it('a random integer between [x,y].', () => {
    for (let i: number = 0; i < 200; i++) {
      num = randomInteger(0, 100);
      num.should.gte(0);
      num.should.lte(100);
    }
  });

  it('a random integer between [-x,y].', () => {
    for (let i: number = 0; i < 200; i++) {
      num = randomInteger(-100, 100);
      num.should.gte(-100);
      num.should.lte(100);
    }
  });

  it('a random integer between [-x,-y].', () => {
    for (let i: number = 0; i < 200; i++) {
      num = randomInteger(-100, -1);
      num.should.gte(-100);
      num.should.lte(-1);
    }
  });

  it('a fixed x if [x,y].', () => {
    for (let i: number = 0; i < 10; i++) {
      num = randomInteger(i, i);
      num.should.equal(i);
    }
  });

  it('works regardless of the order of [x,y].', () => {
    for (let i: number = 0; i < 200; i++) {
      num = randomInteger(100, 0);
      num.should.gte(0);
      num.should.lte(100);
    }
  });

  it('a random number within [x,y+1] for [x.ddd, y.ddd].', () => {
    for (let i: number = 0; i < 500; i++) {
      num = randomInteger(1.234, 123.4);
      num.should.gte(1);
      num.should.lte(124);
    }
  });

  it('a random number within [x,y] for [x.0, y.0].', () => {
    for (let i: number = 0; i < 250; i++) {
      num = randomInteger(2.0, 123.0);
      num.should.gte(2);
      num.should.lte(123);
    }
  });


});
