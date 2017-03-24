import { trimRight } from '../src/alpha';

describe('trimRight()\n', () => {

  describe('trimRight() should...', () => {

    const expect: string = 'a quick brown fox';
    const lead: string = '   \n\t\r\v\xA0\uFEFF   ';
    const trail: string = lead;
    const str: string = lead + expect + trail;

    let trimStr: string;

    it('not remove spaces from the beginning of a string.', () => {
      trimStr = trimRight(str);
      trimStr[0].should.not.equal(expect[0]);
    });

    it('remove spaces from the ending of a string.', () => {
      trimStr = trimRight(str);
      trimStr[trimStr.length - 1].should.equal(expect[expect.length - 1]);
    });

    it('should not remove spaces in the middle of a string.', () => {
      trimStr = trimRight(str);
      (trimStr.match(/ /g) || []).length.should.be.gt(0);
    });

    it('should be the same as expected string with leading spaces.', () => {
      trimStr = trimRight(str);
      trimStr.should.equal(lead + expect);
    });

  });

});
