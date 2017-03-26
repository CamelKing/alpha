import { expect, should } from 'chai';

import { trimLeft } from '../../src/alpha';

should();


describe('trimLeft()\n', () => {

  describe('should...', () => {

    const expect: string = 'a quick brown fox';
    const lead: string = '   \n\t\r\v\xA0\uFEFF   ';
    const trail: string = lead;
    const str: string = lead + expect + trail;

    let trimStr: string;

    it('remove spaces from the beginning of a string.', () => {
      trimStr = trimLeft(str);
      trimStr[0].should.equal(expect[0]);
    });

    it('not remove spaces from the ending of a string.', () => {
      trimStr = trimLeft(str);
      trimStr[trimStr.length - 1].should.not.equal(expect[expect.length - 1]);
    });

    it('not remove spaces in the middle of a string.', () => {
      trimStr = trimLeft(str);
      (trimStr.match(/ /g) || []).length.should.be.gt(0);
    });

    it('be the same as expected string with trailing spaces.', () => {
      trimStr = trimLeft(str);
      trimStr.should.equal(expect + trail);
    });

  });

});
