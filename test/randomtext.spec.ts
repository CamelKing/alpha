import { expect, should } from 'chai';

import { randomText } from '../src/alpha';

should();

describe('randomText()\n', () => {

  describe('should generate...', () => {

    let str: string;

    it('by default a string with 5 characters random text.', () => {
      str = randomText();
      str.length.should.equal(5);
    });

    it('a string with up to 10 characters random text.', () => {
      str = randomText(0);
      str.length.should.equal(0);
      str.should.equal('');
    });

    it('a string with up to 10 characters random text.', () => {
      str = randomText(10);
      str.length.should.equal(10);
    });

    it('a string with up to 10k characters random text.', () => {
      str = randomText(10000);
      str.length.should.equal(10000);
    });

    it('a string with up to 1M characters random text.', () => {
      str = randomText(1000000);
      str.length.should.equal(1000000);
    });

    it('a string of random text with NO spaces in between.', () => {
      str = randomText(1000);
      str.indexOf(' ').should.equal(-1);
    });

  });

});
