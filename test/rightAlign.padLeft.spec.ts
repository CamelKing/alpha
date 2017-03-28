import { Align, pad, padLeft } from '../src/alpha';
import { expect, should } from 'chai';

should();

describe('padLeft()/rightAlign()\n', () => {

  describe('should produce...', () => {

    const str: string = 'a quick brown fox';
    let strPad1: string;
    let strPad2: string;

    it('same result as pad(... Align.right).', () => {
      strPad1 = pad(str, 30, '=', Align.right);
      strPad2 = padLeft(str, 30, '=');
      strPad1.should.equal(strPad2);
    });

    it('a left padded string with space by default.', () => {
      strPad2 = padLeft(str, 30);
      strPad2.should.equal(' '.repeat(30 - str.length) + str);
    });

    it('the exact same string if requesting a shorter string.', () => {
      strPad2 = padLeft(str, 10);
      strPad2.should.equal(str);
    });

    it('the exact same string if requesting a same length string.', () => {
      strPad2 = padLeft(str, str.length);
      strPad2.should.equal(str);
    });

    it('the exact same string if requesting a -ve length string.', () => {
      strPad2 = padLeft(str, -1);
      strPad2.should.equal(str);
    });

    it('only use the first char on pad string.', () => {
      strPad2 = padLeft(str, 30, 'ABC');
      strPad2.should.equal('A'.repeat(30 - str.length) + str);
    });

  });

});
