import { expect, should } from 'chai';

import { cobolCase } from '../src/alpha';

should();


describe('cobolCase()\n', () => {

  describe('should...', () => {

    let str1: string = '';
    let str2: string = '';
    const answer: string = 'FOO-BAR';

    it('cobolCase __foo__bar__.', () => {
      str1 = '__foo__bar__';
      str2 = cobolCase(str1);
      str2.should.equal(answer);
    });

    it('cobolCase --FOO==BAR++.', () => {
      str1 = '--FOO==BAR++';
      str2 = cobolCase(str1);
      str2.should.equal(answer);
    });

    it('cobolCase ()Foo[]bar{}.', () => {
      str1 = '()Foo[]bar{}';
      str2 = cobolCase(str1);
      str2.should.equal(answer);
    });

    it('cobolCase ..FoO,,baR;;.', () => {
      str1 = '..FoO,,baR;;';
      str2 = cobolCase(str1);
      str2.should.equal(answer);
    });

    it('cobolCase ::foO""BaR\'\'.', () => {
      str1 = '::foO""BaR\'\'';
      str2 = cobolCase(str1);
      str2.should.equal(answer);
    });

    it('cobolCase french sentence.', () => {
      str1 = 'est-ce que vous pouvez l\'écrire?';
      str2 = cobolCase(str1);
      str2.should.equal('EST-CE-QUE-VOUS-POUVEZ-L-ÉCRIRE');
    });

    it('cobolCase chinese sentence.', () => {
      str1 = '你好嗎？ 我很好，哈！';
      str2 = cobolCase(str1);
      str2.should.equal('你好嗎-我很好-哈');
    });

    it('return \'\' with empty string passed in.', () => {
      str1 = '';
      str2 = cobolCase(str1);
      str2.should.equal('');
    });

    it('return \'\' with null string passed in.', () => {
      str1 = null;
      str2 = cobolCase(str1);
      str2.should.equal('');
    });

    it('return \'\' with undefined string passed in.', () => {
      str1 = undefined;
      str2 = cobolCase(str1);
      str2.should.equal('');
    });

    it('return \'\' with a string fill of word breakers passed in.', () => {
      str1 = ',./\';[]=-+_}{\":?\`~!@#$%^&*()><';
      str2 = cobolCase(str1);
      str2.should.equal('');
    });


  });

});
