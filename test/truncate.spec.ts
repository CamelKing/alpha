import { truncate } from '../src/alpha';

describe('truncate()\n', () => {

  describe('should...', () => {

    const str: string = 'hello world to everyone.';

    it('return empty string if passed in empty string.', () => {
      truncate('', 50).should.equal('');
    });

    it('not return empty string if passed in space string.', () => {
      truncate('   ', 50).should.not.equal('');
    });

    it('return empty string if passed in -ve len.', () => {
      truncate(str, -1).should.equal('');
    });

    it('return empty string if passed in zero len.', () => {
      truncate(str, 0).should.equal('');
    });

    it('return original string if len is much longer.', () => {
      truncate(str, 50).should.equal(str);
    });

    it('use the passed in padding string.', () => {
      truncate(str, 10, '===').should.equal('hello w===');
    });

    it('use ... when length is > 1.5 word length.', () => {
      truncate(str, 10).should.equal('hello w...');
    });

    it('use … when length is < 1.5 word length.', () => {
      truncate(str, 9).should.equal('hello wo…');
    });

    it('return padding only if len is shorter than padding.', () => {
      truncate(str, 3, '======').should.equal('===');
      truncate(str, 2, '======').should.equal('==');
      truncate(str, 1, '======').should.equal('=');
    });

  });

});
