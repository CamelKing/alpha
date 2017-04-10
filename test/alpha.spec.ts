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
  'function',
];

const types: string[] = ['Mods', 'Instances'];

const testControl: object = {};

testControl['asyncMods'] = [
  'makeAwait',
  'makePromise',
];

testControl['arrayMods'] = [
  'ascOrder',
  'ascOrderBy',
  'chunk',
  'compact',
  'descOrder',
  'descOrderBy',
  'difference',
  'differenceBy',
  'differenceWith',
  'drop',
  'dropRight',
  'dropRightWhile',
  'dropWhile',
  'flatten',
  'flattenDeep',
  'flattenDepth',
  'head',
  'initial',
  'intersection',
  'intersectionBy',
  'intersectionWith',
  'nth',
  'pluck',
  'pull',
  'pullAll',
  'pullAllBy',
  'pullAllWith',
  'remove',
  'sortedIndex',
  'sortedIndexBy',
  'sortedIndexOf',
  'sortedUniq',
  'sortedUniqBy',
  'tail',
  'take',
  'takeRight',
  'takeRightWhile',
  'takeWhile',
  'union',
  'uniq',
  'uniqBy',
];

testControl['filesMods'] = [
  'ls',
];

testControl['collectionMods'] = [
  'enumKeys',
];

testControl['numberMods'] = [
  'isNumeric',
  'randomInteger',
  'round',
  'roundUp',
  'roundDown',
];

testControl['objectMods'] = [
  'clone',
  'fromPairs',
  'isTheSame',
  'objectify',
  'stringify',
  'theTypeOf',
  'toObject',
  'toPairs',
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
  'toWords',
  'upperFirst',
];

testControl['timeInstances'] = [
  'stopwatch',
];

testControl['objectInstances'] = [
];


describe('alpha.ts should act as a barrel which re-export...\n', () => {

  types.forEach((type: string) => {

    categories.forEach((cat: string) => {

      describe('category: ' + cat, () => {

        const testSubject: string = cat + type;

        if (testControl.hasOwnProperty(testSubject)) {

          testControl[testSubject].forEach((sub: string) => {

            const testCondition: string = (typeof (alpha[sub]) !== 'function') ?
              'instance of ' + sub + ' object' :
              'function ' + sub + '()';

            it(testCondition, () => {
              (alpha[sub]).should.not.equal(undefined);
            });

          });

        }

      });

    });

  });

});
