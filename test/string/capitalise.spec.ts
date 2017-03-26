import { expect, should } from 'chai';

import { capitalise } from '../../src/alpha';

should();


describe('capitalise()\n', () => {

  describe('should...', () => {

    it('capitalise the first char of a string.', () => {
      const str1: string = 'a quick brown fox';
      const str2: string = capitalise(str1);
      str2.should.equal('A quick brown fox');
    });

    it('have no problem if first char is capitalised.', () => {
      const str1: string = 'A QUICK BROWN FOX';
      const str2: string = capitalise(str1);
      str2.should.equal('A QUICK BROWN FOX');
    });

    it('have no problem if first char is numerical.', () => {
      const str1: string = '1 quick brown fox';
      const str2: string = capitalise(str1);
      str2.should.equal('1 quick brown fox');
    });

    it('have no problem if first char is symbol.', () => {
      const str1: string = '# quick brown fox';
      const str2: string = capitalise(str1);
      str2.should.equal('# quick brown fox');
    });

    it('have no problem with empty string.', () => {
      const str1: string = '';
      const str2: string = capitalise(str1);
      str2.should.equal('');
    });

    it('have no problem with null string.', () => {
      const str1: string = null;
      const str2: string = capitalise(str1);
      ('' + str2).should.equal('null');
    });

  });

});
