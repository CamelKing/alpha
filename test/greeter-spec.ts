import * as mocha from 'mocha';

import { Greeter } from '../src/greeter';
import { expect } from 'chai';
import { should } from 'chai';

should();

describe('greeter', () => {

  const greeter: Greeter = new Greeter('friend');

  it('should greet with message', () => {

    expect(greeter.greet()).to.equal('Bonjour, friend!');
    greeter.greet().should.equal('Bonjour, friend!');

  });

});
