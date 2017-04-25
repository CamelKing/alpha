import * as constants from '../src/constants';

import { expect, should } from 'chai';

import { toCaps } from '../src/alpha';

should();

describe(toCaps.name + '() - @category String', () => {

  describe('should return sentence in 1st char capitalise format', () => {

    it('"a quick brown fox jumps." => "A Quick Brown Fox Jumps."', () => {
      const result: string = toCaps('a quick brown fox jumps.');
      result.should.eql('A Quick Brown Fox Jumps.');
    });

    it('"A QUICK BROWN FOX JUMPS." => "A Quick Brown Fox Jumps."', () => {
      const result: string = toCaps('A QUICK BROWN FOX JUMPS.');
      result.should.eql('A Quick Brown Fox Jumps.');
    });

    it('"123HELLO...WORLD456" => "123Hello...World456"', () => {
      const result: string = toCaps('123HELLO...WORLD456');
      result.should.eql('123Hello...World456');
    });

    it('"123HELLO... WORLD456" => "123Hello... World456"', () => {
      const result: string = toCaps('123HELLO... WORLD456');
      result.should.eql('123Hello... World456');
    });

    it('"123HELLO WORLD456" => "123Hello World456"', () => {
      const result: string = toCaps('123HELLO WORLD456');
      result.should.eql('123Hello World456');
    });

    it('"HELLO WORLD" => "Hello World"', () => {
      const result: string = toCaps('HELLO WORLD');
      result.should.eql('Hello World');
    });

  });

  describe('should return word in 1st char capitalise format', () => {

    it('"!@#$%^&*,.?STRING" => "!@#$%^&*,.?String"', () => {
      const result: string = toCaps('!@#$%^&*,.?STRING');
      result.should.eql('!@#$%^&*,.?String');
    });

    it('"!STRING" => "!String"', () => {
      const result: string = toCaps('!STRING');
      result.should.eql('!String');
    });

    it('"1STRING" => "1String"', () => {
      const result: string = toCaps('1STRING');
      result.should.eql('1String');
    });

    it('"StRiNg" => "String"', () => {
      const result: string = toCaps('StRiNg');
      result.should.eql('String');
    });

    it('"sTrInG" => "String"', () => {
      const result: string = toCaps('sTrInG');
      result.should.eql('String');
    });

    it('"sTRING" => "String"', () => {
      const result: string = toCaps('sTRING');
      result.should.eql('String');
    });

    it('"String" => "String"', () => {
      const result: string = toCaps('String');
      result.should.eql('String');
    });

    it('"STRING" => "String"', () => {
      const result: string = toCaps('STRING');
      result.should.eql('String');
    });

    it('"string" => "String"', () => {
      const result: string = toCaps('string');
      result.should.eql('String');
    });

  });

  describe('should handle invalid parameters properly', () => {

    it('\'\' => \'\'', () => {
      const result: string = toCaps('');
      result.should.eql('');
    });

    it('null => \'\'', () => {
      const result: string = toCaps(null);
      result.should.eql('');
    });

    it('undefined => \'\'', () => {
      const result: string = toCaps(undefined);
      result.should.eql('');
    });

  });

});
