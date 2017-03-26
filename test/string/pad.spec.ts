import { Align, pad } from '../../src/alpha';
import { expect, should } from 'chai';

should();

describe('pad()\n', () => {

  describe('should produce...', () => {

    const str: string = 'a quick brown fox';
    let strPad: string;

    it('a string padded with chosen char on the right.', () => {
      strPad = pad(str, 30, '=', Align.left);
      strPad.should.equal(str + '='.repeat(30 - str.length));
    });

    it('a string padded with chosen char on the left.', () => {
      strPad = pad(str, 30, '=', Align.right);
      strPad.should.equal('='.repeat(30 - str.length) + str);
    });

    it('a right padded string by default.', () => {
      strPad = pad(str, 30, '=');
      strPad.should.equal(str + '='.repeat(30 - str.length));
    });

    it('a right padded string with space by default.', () => {
      strPad = pad(str, 30);
      strPad.should.equal(str + ' '.repeat(30 - str.length));
    });

    it('the exact same string if requesting a same length string.', () => {
      strPad = pad(str, str.length);
      strPad.should.equal(str);
    });

    it('the exact same string if requesting a -ve length string.', () => {
      strPad = pad(str, -1);
      strPad.should.equal(str);
    });

    it('the exact same string if requesting a shorter string.', () => {
      strPad = pad(str, 10);
      strPad.should.equal(str);
    });

    it('only use the first char on pad string.', () => {
      strPad = pad(str, 30, 'ABC');
      strPad.should.equal(str + 'A'.repeat(30 - str.length));
    });

  });

});
