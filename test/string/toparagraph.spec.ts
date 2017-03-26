import { expect, should } from 'chai';

import { toParagraph } from '../../src/alpha';

should();

describe('makeParagraph()', () => {

  describe('should...', () => {

    // tslint:disable-next-line:max-line-length
    const str: string = 'Lorem ipsum dolor sit amet, consectetur, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.';

    let para: string[];

    it('make a hyphenated paragraph.', () => {
      para = toParagraph(str, 50);
      let prevFound: number = -1;
      let nextFound: number = -1;
      para.forEach((line: string) => {
        nextFound = str.indexOf(line.substr(0, 30));
        nextFound.should.be.gt(prevFound);
        prevFound = nextFound;
      });
      para.join('').length.should.be.gt(str.length);
    });

    it('every line should not exceed the fixed length.', () => {
      para.forEach((line: string) => line.length.should.lte(50));
    });

    it('return empty string is no text passed in.', () => {
      toParagraph('', 50).join('').should.equal('');
    });

  });

});
