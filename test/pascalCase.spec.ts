import { expect, should } from 'chai';

import { _makeCase } from '../src/_alpha';
import { pascalCase } from '../src/alpha';

should();


describe('pascalCase()\n', () => {

  describe('should...', () => {

    let str1: string = '';
    let str2: string = '';
    const answer: string = 'FooBar';

    it('pascalCase __foo__bar__.', () => {
      str1 = '__foo__bar__';
      str2 = pascalCase(str1);
      str2.should.equal(answer);
    });

    it('pascalCase __foo__bar__.', () => {
      str1 = '__foo__bar__';
      str2 = pascalCase(str1);
      str2.should.equal(answer);
    });

    it('pascalCase --FOO==BAR++.', () => {
      str1 = '--FOO==BAR++';
      str2 = pascalCase(str1);
      str2.should.equal(answer);
    });

    it('pascalCase ()Foo[]bar{}.', () => {
      str1 = '()Foo[]bar{}';
      str2 = pascalCase(str1);
      str2.should.equal(answer);
    });

    it('pascalCase ..FoO,,baR;;.', () => {
      str1 = '..FoO,,baR;;';
      str2 = pascalCase(str1);
      str2.should.equal(answer);
    });

    it('pascalCase ::foO""BaR\'\'.', () => {
      str1 = '::foO""BaR\'\'';
      str2 = pascalCase(str1);
      str2.should.equal(answer);
    });

    it('pascalCase french sentence.', () => {
      str1 = 'est-ce que vous pouvez l\'écrire?';
      str2 = pascalCase(str1);
      str2.should.equal('EstCeQueVousPouvezLÉcrire');
    });

    it('pascalCase chinese sentence.', () => {
      str1 = '你好嗎？ 我很好，哈！';
      str2 = pascalCase(str1);
      str2.should.equal('你好嗎我很好哈');
    });

    it('return \'\' with empty string passed in.', () => {
      str1 = '';
      str2 = pascalCase(str1);
      str2.should.equal('');
    });

    it('return \'\' with null string passed in.', () => {
      str1 = null;
      str2 = pascalCase(str1);
      str2.should.equal('');
    });

    it('return \'\' with undefined string passed in.', () => {
      str1 = undefined;
      str2 = pascalCase(str1);
      str2.should.equal('');
    });

    it('return \'\' with a string fill of word breakers passed in.', () => {
      str1 = ',./\';[]=-+_}{\":?\`~!@#$%^&*()><';
      str2 = pascalCase(str1);
      str2.should.equal('');
    });


  });

});
