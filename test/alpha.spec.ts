
import _a = require('../src/alpha');

import * as chai from 'chai';

const expect: any = chai.expect;

const mods: string[] = ['chunk'];
const instances: string[] = ['casio'];

describe('alpha.ts', () => {

  mods.forEach((mod: string) => {

    it('should provide ' + mod + '() module.', () => {
      (_a[mod]).should.not.equal(undefined);
    });

  });

  instances.forEach((instance: string) => {

    it('should provide instance of ' + instance + ' object.', () => {
      (_a[instance]).should.not.equal(undefined);
    });

  });


});
