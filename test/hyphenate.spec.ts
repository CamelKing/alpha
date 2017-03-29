import { expect, should } from 'chai';

import { hyphenate } from '../src/alpha';

should();

describe('hyphenate()', () => {

  describe('should...', () => {

    // tslint:disable-next-line:max-line-length
    const str: string = 'Lorem ipsum dolor sit amet, consectetur, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.';

    it('by default use "-" as hyphen.', () => {
      hyphenate('this is hello worldX', 19)
        .should.equal('this is hello worl-');
    });

    it('no hyphenation when <= 13 chars.', () => {
      hyphenate('this is hello worldX', 19)
        .should.equal('this is hello worl-');
      hyphenate('this is hello worldX', 16)
        .should.equal('this is hello ');
      hyphenate('this is hello worldX', 15)
        .should.equal('this is hello ');
      hyphenate('this is hello worldX', 14)
        .should.equal('this is hello ');
      hyphenate('this is hello worldX', 13)
        .should.equal('this is hello');
      hyphenate('this is hello worldX', 12)
        .should.equal('this is ');
    });

    it('returns short line if line breaks short...', () => {
      hyphenate('Lorem ipsum dolor sit amet.\n'
        + 'Lorem ipsum dolor sit amet.', 50)
        .should.equal('Lorem ipsum dolor sit amet.\n');
    });

    it('returns short line if line breaks after...', () => {
      hyphenate('Lorem ipsum dolor sit amet.\n'
        + 'Lorem ipsum dolor sit amet.', 20)
        .should.equal('Lorem ipsum dolor ');
    });

    it('return empty string if passed in empty string.', () => {
      hyphenate('', 50).should.equal('');
    });

    it('not return empty string if passed in space string.', () => {
      hyphenate('   ', 50).should.not.equal('');
    });

    it('return empty string if passed in -ve len.', () => {
      hyphenate(str, -1).should.equal('');
    });

    it('return empty string if passed in zero len.', () => {
      hyphenate(str, 0).should.equal('');
    });

    it('return original string if len is much longer.', () => {
      hyphenate(str, str.length + 1).should.equal(str);
    });

    it('return w/o hypehnation if wordbreak at exactly the cut.', () => {
      hyphenate(str, 40).should.equal('Lorem ipsum dolor sit amet, consectetur,');
    });

    it('return w/o hypehnation if wordbreak at right after cut.', () => {
      hyphenate(str, 39).should.equal('Lorem ipsum dolor sit amet, consectetu-');
    });

    it('return w/ hypehnation if wordbreak < 1 word from right.', () => {
      hyphenate(str, 38).should.equal('Lorem ipsum dolor sit amet, consectet-');
      hyphenate(str, 33).should.equal('Lorem ipsum dolor sit amet, cons-');
    });

    it('return w/o hypehnation if wordbreak > 1 word from right.', () => {
      hyphenate(str, 32).should.equal('Lorem ipsum dolor sit amet, ');
      hyphenate(str, 28).should.equal('Lorem ipsum dolor sit amet, ');
      hyphenate(str, 27).should.equal('Lorem ipsum dolor sit amet,');
    });

  });

});
