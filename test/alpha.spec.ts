import * as alpha from '../src/alpha';

import { expect, should } from 'chai';

should();

const categories: string[] = [
  'async',
  'array',
  'files',
  'function',
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
  'ascOrder',
  'ascOrderBy',
  'chunk',
  'compact',
  'deepCompact',
  'descOrder',
  'descOrderBy',
  'difference',
  'differenceBy',
  'differenceWith',
  'drop',
  'dropRight',
  'dropRightWhile',
  'dropWhile',
  'fill',
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
  'sortedIndexBy',
  'sortedIndexOf',
  'sortedInsertAt',
  'sortedLastIndexBy',
  'sortedLastIndexOf',
  'sortedLastInsertAt',
  'sortedUniq',
  'sortedUniqBy',
  'tail',
  'take',
  'takeRight',
  'takeRightWhile',
  'takeWhile',
  'union',
  'unionBy',
  'unionWith',
  'uniq',
  'uniqBy',
  'uniqWith',
  'unzip',
  'unzipWith',
  'without',
  'zip',
  'zipObject',
  'zipWith',
];

testControl['filesMods'] = [
  'ls',
];

testControl['collectionMods'] = [
  'enumKeys',
];

testControl['numberMods'] = [
  'clamp',
  'inRange',
  'isNumeric',
  'max',
  'maxBy',
  'maxDeep',
  'maxDeepBy',
  'mean',
  'meanBy',
  'meanDeep',
  'meanDeepBy',
  'min',
  'minBy',
  'minDeep',
  'minDeepBy',
  'randomInteger',
  'round',
  'roundUp',
  'roundDown',
  'sum',
  'sumBy',
  'sumDeep',
  'sumDeepBy',
];

testControl['objectMods'] = [
  'assign',
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
  'toWords',
  'trim',
  'trimLeft',
  'trimRight',
  'truncate',
  'upperFirst',
  'upperSnakeCase',
];

testControl['timeInstances'] = [
  'stopwatch',
  // 'timer',
];

testControl['objectInstances'] = [
];

let count: number = 0;

describe('alpha.ts should act as a barrel which re-export...\n', () => {

  types.forEach((type: string) => {

    categories.forEach((cat: string) => {

      describe('category: ' + cat, () => {

        const testSubject: string = cat + type;

        if (testControl.hasOwnProperty(testSubject)) {

          testControl[testSubject].forEach((sub: string) => {

            const testCondition: string = 'no. ' + (++count) + ' '
              + ((typeof (alpha[sub]) !== 'function') ?
                'instance of ' + sub + ' object' :
                'function ' + sub + '()');

            it(testCondition, () => {
              (alpha[sub]).should.not.equal(undefined);
            });

          });

        }

      });

    });

  });

});
