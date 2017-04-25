import * as _alpha from '../src/_alpha';
import * as alpha from '../src/alpha';
import * as constants from '../src/constants';

import { expect, should } from 'chai';

import { ls } from 'shelljs';

should();

describe.only('\nimport * as alpha from \'../src/alpha.ts\'\n', () => {

  const alphaCount: number = Reflect.ownKeys(alpha).length;
  const _alphaCount: number = Reflect.ownKeys(_alpha).length;
  const constantsCount: number = Reflect.ownKeys(constants).length;

  describe('public definitions from alpha library', () => {

    const publicCount: number = ls('./src/public/*.ts').length;
    const publicModules: number = alphaCount - constantsCount;

    it(publicCount + ' modules imported from public files', () => {
      publicModules.should.equal(publicCount);
    });

    it(constantsCount + ' constants/types/interfaces imported', () => {
      constantsCount.should.greaterThan(0);
      constantsCount.should.equals(constantsCount);
    });

  });

  describe('private definitions from _alpha library', () => {

    const privateCount: number = ls('./src/private/*.ts').length;
    const privateModules: number = _alphaCount - constantsCount;

    it(privateCount + ' modules imported from private files', () => {
      privateModules.should.equal(privateCount);
    });

    it(constantsCount + ' constants/types/interfaces imported', () => {
      constantsCount.should.greaterThan(0);
      constantsCount.should.equals(constantsCount);
    });

  });

});
