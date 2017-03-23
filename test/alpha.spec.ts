
import _a = require('../src/alpha');

import * as chai from 'chai';

const expect: any = chai.expect;


const categories: string[] = [
  'time',
  'array',
  'string',
  'math',
  'function',
  'promise',
  'object',
];

const types: string[] = ['Mods', 'Instances'];

const testControl: object = {};

testControl['timeInstances'] = [
  'casio',
];

testControl['arrayMods'] = [
  'chunk',
];

testControl['stringMods'] = [
  'randomText',
];

testControl['objectMods'] = [
  'isTheSame',
  'theTypeOf',
  'toObject'
];

testControl['mathMods'] = [
  'randomInteger',
];

describe('alpha.ts should act as a barrel which...', () => {

  types.forEach((type: string) => {

    categories.forEach((cat: string) => {

      const testSubject: string = cat + type;

      if (testControl.hasOwnProperty(testSubject)) {

        testControl[testSubject].forEach((sub: string) => {

          const testCondition: string = (typeof (_a[sub]) !== 'function') ?
            'provides instance of ' + sub + ' object.' :
            'provides ' + sub + '() module.';

          it(testCondition, () => {
            (_a[sub]).should.not.equal(undefined);
          });

        });

      }

    });

  });

});
