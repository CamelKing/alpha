import { Align, pad, padRight } from '../../src/alpha';
import { expect, should } from 'chai';

should();

describe('padRight()/leftAlign()\n', () => {

  describe('should produce...', () => {

    const str: string = 'a quick brown fox';
    let strPad1: string;
    let strPad2: string;

    it('same result as pad(... Align.left).', () => {
      strPad1 = pad(str, 30, '=', Align.left);
      strPad2 = padRight(str, 30, '=');
      strPad1.should.equal(strPad2);
    });

    it('a right padded string with space by default.', () => {
      strPad2 = padRight(str, 30);
      strPad2.should.equal(str + ' '.repeat(30 - str.length));
    });

    it('the exact same string if requesting a shorter string.', () => {
      strPad2 = padRight(str, 10);
      strPad2.should.equal(str);
    });

    it('the exact same string if requesting a same length string.', () => {
      strPad2 = padRight(str, str.length);
      strPad2.should.equal(str);
    });

    it('the exact same string if requesting a -ve length string.', () => {
      strPad2 = padRight(str, -1);
      strPad2.should.equal(str);
    });

    it('only use the first char on pad string.', () => {
      strPad2 = padRight(str, 30, 'ABC');
      strPad2.should.equal(str + 'A'.repeat(30 - str.length));
    });

  });

});
