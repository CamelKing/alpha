
import index = require('../src/index');

import * as chai from 'chai';

const expect: any = chai.expect;

describe('index', () => {
  it('should provide Greeter', () => {
    expect(index.Greeter).to.not.be.undefined;
  });
});
