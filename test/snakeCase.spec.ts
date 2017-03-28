import { expect, should } from 'chai';

import { snakeCase } from '../src/alpha';

should();


describe('snakeCase()\n', () => {

  describe('should...', () => {

    let str1: string = '';
    let str2: string = '';
    const answer: string = 'foo_bar';

    it('snakeCase __foo__bar__.', () => {
      str1 = '__foo__bar__';
      str2 = snakeCase(str1);
      str2.should.equal(answer);
    });

    it('snakeCase --FOO==BAR++.', () => {
      str1 = '--FOO==BAR++';
      str2 = snakeCase(str1);
      str2.should.equal(answer);
    });

    it('snakeCase ()Foo[]bar{}.', () => {
      str1 = '()Foo[]bar{}';
      str2 = snakeCase(str1);
      str2.should.equal(answer);
    });

    it('snakeCase ..FoO,,baR;;.', () => {
      str1 = '..FoO,,baR;;';
      str2 = snakeCase(str1);
      str2.should.equal(answer);
    });

    it('snakeCase ::foO""BaR\'\'.', () => {
      str1 = '::foO""BaR\'\'';
      str2 = snakeCase(str1);
      str2.should.equal(answer);
    });

    it('snakeCase french sentence.', () => {
      str1 = 'est-ce que vous pouvez l\'écrire?';
      str2 = snakeCase(str1);
      str2.should.equal('est_ce_que_vous_pouvez_l_écrire');
    });

    it('snakeCase chinese sentence.', () => {
      str1 = '你好嗎？ 我很好，哈！';
      str2 = snakeCase(str1);
      str2.should.equal('你好嗎_我很好_哈');
    });

    it('return \'\' with empty string passed in.', () => {
      str1 = '';
      str2 = snakeCase(str1);
      str2.should.equal('');
    });

    it('return \'\' with null string passed in.', () => {
      str1 = null;
      str2 = snakeCase(str1);
      str2.should.equal('');
    });

    it('return \'\' with undefined string passed in.', () => {
      str1 = undefined;
      str2 = snakeCase(str1);
      str2.should.equal('');
    });

    it('return \'\' with a string fill of word breakers passed in.', () => {
      str1 = ',./\';[]=-+_}{\":?\`~!@#$%^&*()><';
      str2 = snakeCase(str1);
      str2.should.equal('');
    });


  });

});
