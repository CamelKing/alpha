import { expect, should } from 'chai';

import { centerAlign } from '../src/alpha';

should();

describe('centerAlign()\n', () => {

  describe('should produce...', () => {

    const str: string = 'a quick brown fox';
    let strPad: string;

    it('a string padded with chosen char on left+right.', () => {
      strPad = centerAlign(str, 30, '=');
      strPad.should.equal('=======' + str + '======');
    });

    it('padded string with space by default.', () => {
      strPad = centerAlign(str, 30);
      strPad.should.equal('       ' + str + '      ');
    });

    it('the exact same string if requesting a same length string.', () => {
      strPad = centerAlign(str, str.length);
      strPad.should.equal(str);
    });

    it('the exact same string if requesting a -ve length string.', () => {
      strPad = centerAlign(str, -1);
      strPad.should.equal(str);
    });

    it('the exact same string if requesting a shorter string.', () => {
      strPad = centerAlign(str, 10);
      strPad.should.equal(str);
    });

    it('only use the first char on pad string.', () => {
      strPad = centerAlign(str, 30, 'ABC');
      strPad.should.equal('AAAAAAA' + str + 'AAAAAA');
    });

  });

});
