import { expect, should } from 'chai';

import { upperSnakeCase } from '../src/alpha';

should();


describe('upperSnakeCase()\n', () => {

  describe('should...', () => {

    let str1: string = '';
    let str2: string = '';
    const answer: string = 'FOO_BAR';

    it('upperSnakeCase __foo__bar__.', () => {
      str1 = '__foo__bar__';
      str2 = upperSnakeCase(str1);
      str2.should.equal(answer);
    });

    it('upperSnakeCase --FOO==BAR++.', () => {
      str1 = '--FOO==BAR++';
      str2 = upperSnakeCase(str1);
      str2.should.equal(answer);
    });

    it('upperSnakeCase ()Foo[]bar{}.', () => {
      str1 = '()Foo[]bar{}';
      str2 = upperSnakeCase(str1);
      str2.should.equal(answer);
    });

    it('upperSnakeCase ..FoO,,baR;;.', () => {
      str1 = '..FoO,,baR;;';
      str2 = upperSnakeCase(str1);
      str2.should.equal(answer);
    });

    it('upperSnakeCase ::foO""BaR\'\'.', () => {
      str1 = '::foO""BaR\'\'';
      str2 = upperSnakeCase(str1);
      str2.should.equal(answer);
    });

    it('upperSnakeCase french sentence.', () => {
      str1 = 'est-ce que vous pouvez l\'écrire?';
      str2 = upperSnakeCase(str1);
      str2.should.equal('EST_CE_QUE_VOUS_POUVEZ_L_ÉCRIRE');
    });

    it('upperSnakeCase chinese sentence.', () => {
      str1 = '你好嗎？ 我很好，哈！';
      str2 = upperSnakeCase(str1);
      str2.should.equal('你好嗎_我很好_哈');
    });

    it('return \'\' with empty string passed in.', () => {
      str1 = '';
      str2 = upperSnakeCase(str1);
      str2.should.equal('');
    });

    it('return \'\' with null string passed in.', () => {
      str1 = null;
      str2 = upperSnakeCase(str1);
      str2.should.equal('');
    });

    it('return \'\' with undefined string passed in.', () => {
      str1 = undefined;
      str2 = upperSnakeCase(str1);
      str2.should.equal('');
    });

    it('return \'\' with a string fill of word breakers passed in.', () => {
      str1 = ',./\';[]=-+_}{\":?\`~!@#$%^&*()><';
      str2 = upperSnakeCase(str1);
      str2.should.equal('');
    });


  });

});
