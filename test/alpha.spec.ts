import * as alpha from '../src/alpha';

import { expect, should } from 'chai';

should();

const categories: string[] = [
  'async',
  'array',
  'files',
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
  'compact',
  'flatten',
];

testControl['filesMods'] = [
  'ls',
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
  'clone',
  'isTheSame',
  'objectify',
  'stringify',
  'theTypeOf',
  'toObject',
];

testControl['stringMods'] = [
  'camelCase',
  'capitalise',
  'centerAlign',
  'cobolCase',
  'hyphenate',
  'kebabCase',
  'leftAlign',
  'lowerFirst',
  'pad',
  'padLeft',
  'padRight',
  'pascalCase',
  'prints',
  'randomText',
  'rightAlign',
  'snakeCase',
  'toFixWidth',
  'toParagraph',
  'trim',
  'trimLeft',
  'trimRight',
];

testControl['timeInstances'] = [
  'stopwatch',
];

testControl['objectInstances'] = [
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
