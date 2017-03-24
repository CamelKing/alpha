import * as _a from '../src/alpha';
import * as chai from 'chai';

const expect: any = chai.expect;


const categories: string[] = [
  'async',
  'array',
  'collections',
  'function',
  'math',
  'object',
  'promise',
  'string',
  'time',
];

const types: string[] = ['Mods', 'Instances'];

const testControl: object = {};

testControl['asyncMods'] = [
  'makeAwait',
  'makePromise',
];

testControl['arrayMods'] = [
  'chunk',
  'flatten',
];

testControl['collectionMods'] = [
  'enumKeys',
];

testControl['mathMods'] = [
  'randomInteger',
  'round',
  'roundUp',
  'roundDown',
];

testControl['objectMods'] = [
  'isTheSame',
  'objectify',
  'stringify',
  'theTypeOf',
  'toObject',
];

testControl['stringMods'] = [
  'capitalise',
  'prints',
  'randomText',
  'trim',
];

testControl['timeInstances'] = [
  'casio',
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
