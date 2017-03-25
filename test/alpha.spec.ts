import * as alpha from '../src/alpha';
import * as chai from 'chai';

const expect: any = chai.expect;


const categories: string[] = [
  'async',
  'array',
  'collection',
  'number',
  'object',
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

testControl['numberMods'] = [
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
  'trimLeft',
  'trimRight',
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

          const testCondition: string = (typeof (alpha[sub]) !== 'function') ?
            'provides instance of ' + sub + ' object.' :
            'provides ' + sub + '() module.';

          it(testCondition, () => {
            (alpha[sub]).should.not.equal(undefined);
          });

        });

      }

    });

  });

});
