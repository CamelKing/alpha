import { expect, should } from 'chai';

import { kebabCase } from '../src/alpha';

should();


describe('kebabCase()\n', () => {

  describe('should...', () => {

    let str1: string = '';
    let str2: string = '';
    const answer: string = 'foo-bar';

    it('kebabCase __foo__bar__.', () => {
      str1 = '__foo__bar__';
      str2 = kebabCase(str1);
      str2.should.equal(answer);
    });

    it('kebabCase --FOO==BAR++.', () => {
      str1 = '--FOO==BAR++';
      str2 = kebabCase(str1);
      str2.should.equal(answer);
    });

    it('kebabCase ()Foo[]bar{}.', () => {
      str1 = '()Foo[]bar{}';
      str2 = kebabCase(str1);
      str2.should.equal(answer);
    });

    it('kebabCase ..FoO,,baR;;.', () => {
      str1 = '..FoO,,baR;;';
      str2 = kebabCase(str1);
      str2.should.equal(answer);
    });

    it('kebabCase ::foO""BaR\'\'.', () => {
      str1 = '::foO""BaR\'\'';
      str2 = kebabCase(str1);
      str2.should.equal(answer);
    });

    it('kebabCase french sentence.', () => {
      str1 = 'est-ce que vous pouvez l\'écrire?';
      str2 = kebabCase(str1);
      str2.should.equal('est-ce-que-vous-pouvez-l-écrire');
    });

    it('kebabCase chinese sentence.', () => {
      str1 = '你好嗎？ 我很好，哈！';
      str2 = kebabCase(str1);
      str2.should.equal('你好嗎-我很好-哈');
    });

    it('return \'\' with empty string passed in.', () => {
      str1 = '';
      str2 = kebabCase(str1);
      str2.should.equal('');
    });

    it('return \'\' with null string passed in.', () => {
      str1 = null;
      str2 = kebabCase(str1);
      str2.should.equal('');
    });

    it('return \'\' with undefined string passed in.', () => {
      str1 = undefined;
      str2 = kebabCase(str1);
      str2.should.equal('');
    });

    it('return \'\' with a string fill of word breakers passed in.', () => {
      str1 = ',./\';[]=-+_}{\":?\`~!@#$%^&*()><';
      str2 = kebabCase(str1);
      str2.should.equal('');
    });


  });

});
