import { Align, toFixWidth } from '../../src/alpha';
import { expect, should } from 'chai';

should();

describe('toFixWidth()', () => {

  describe('should...', () => {

    const str: string = 'This is the new Hello World ya!';
    const str2: string = 'Hello World';

    it('create a truncated fixed width string.', () => {
      toFixWidth(str, 20).should.equal('This is the new H...');
      toFixWidth(str, 10).should.equal('This is...');
    });

    it('use … when create a short truncated fixed width string.', () => {
      toFixWidth(str, 9).should.equal('This is …');
    });

    it('create a right padded fixed width string.', () => {
      toFixWidth(str2, 20).should.equal(str2 + ' '.repeat(20 - str2.length));
    });

    it('create a left padded fixed width string.', () => {
      toFixWidth(str2, 20, Align.right)
        .should.equal(' '.repeat(20 - str2.length) + str2);
    });

    it('create a center aligned fixed width string.', () => {
      toFixWidth(str2, 20, Align.center)
        .should.equal('     ' + str2 + '    ');
    });

  });

});
