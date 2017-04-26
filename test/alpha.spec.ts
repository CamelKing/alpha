import * as alpha from '../src/alpha';
import * as constants from '../src/constants';

import { expect, should } from 'chai';

import { ls } from 'shelljs';

should();

describe('import * as alpha from \'../src/alpha.ts\'', () => {

  const alphaCount: number = Reflect.ownKeys(alpha).length;
  const constantsCount: number = Reflect.ownKeys(constants).length;

  describe('should import public definitions from alpha library', () => {

    const publicCount: number = ls('./src/common/*.ts').length;
    const publicModules: number = alphaCount - constantsCount;

    it(publicCount + ' modules imported from public files', () => {
      publicModules.should.equal(publicCount);
    });

    it(constantsCount + ' constants/types/interfaces imported', () => {
      constantsCount.should.greaterThan(0);
      constantsCount.should.equals(constantsCount);
    });

  });

});
