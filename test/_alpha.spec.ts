import * as _alpha from '../src/_alpha';
import * as constants from '../src/constants';

import { expect, should } from 'chai';

import { ls } from 'shelljs';

should();

describe('import * as _alpha from \'../src/_alpha.ts\'', () => {

  const imports: number = Reflect.ownKeys(_alpha).length;
  const defs: number = Reflect.ownKeys(constants).length;

  describe('should import private definitions from _alpha library', () => {

    const files: number = ls('./src/private/*.ts').length;
    const modules: number = imports - defs;

    it(files + ' modules imported from private files', () => {
      modules.should.equal(files);
    });

    it(defs + ' constants/types/interfaces imported', () => {
      defs.should.greaterThan(0);
      defs.should.equals(defs);
    });

  });

});
