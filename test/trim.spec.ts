import { trim } from '../src/alpha';

describe('trim()\n', () => {

  describe('should...', () => {

    const expect: string = 'a quick brown fox';
    const lead: string = '   \n\t\r\v\xA0\uFEFF   ';
    const trail: string = lead;
    const str: string = lead + expect + trail;

    let trimStr: string;

    it('remove spaces from the beginning of a string.', () => {
      trimStr = trim(str);
      trimStr[0].should.equal(expect[0]);
    });

    it('remove spaces from the ending of a string.', () => {
      trimStr = trim(str);
      trimStr[trimStr.length - 1].should.equal(expect[expect.length - 1]);
    });

    it('not remove spaces in the middle of a string.', () => {
      trimStr = trim(str);
      (trimStr.match(/ /g) || []).length.should.be.gt(0);
    });

    it('be the same as expected string entirely.', () => {
      trimStr = trim(str);
      trimStr.should.equal(expect);
    });

  });

});
