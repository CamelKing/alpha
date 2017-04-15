import * as _alpha from '../src/_alpha';

import { expect, should } from 'chai';

should();

const categories: string[] = [
  'async',
  'array',
  'collection',
  'function',
  'number',
  'object',
  'string',
  'time',
];

const types: string[] = ['Mods', 'Instances'];

const testControl: object = {};

testControl['asyncMods'] = [
];

testControl['arrayMods'] = [
  '_diff',
  '_drop',
  '_intersectAll',
  '_intersectTwo',
  '_isFromLeft',
  '_orderBy',
  '_pullAll',
  '_removeNonArray',
  '_removeRedundants',
  '_searchArray',
  '_take',
  '_union',
];

testControl['collectionMods'] = [
];

testControl['numberMods'] = [
  '_round',
];

testControl['objectMods'] = [
];

testControl['stringMods'] = [
  '_firstCase',
  '_hyphenateToArray',
  '_makeCase',
  '_truncateToArray',
];

testControl['functionMods'] = [
  '_getOptionalFunction',
  '_makeChecker',
  '_makeComparator',
  '_makeIteratee',
  '_makeMatcher',
  '_makeSorter',
];

testControl['timeInstances'] = [
];

let count: number = 0;

describe.only('_alpha.ts should act as a barrel which...\n', () => {


  types.forEach((type: string) => {

    categories.forEach((cat: string) => {

      describe('category: ' + cat, () => {

        const testSubject: string = cat + type;

        if (testControl.hasOwnProperty(testSubject)) {

          testControl[testSubject].forEach((sub: string) => {

            // const testCondition: string = (typeof (_alpha[sub]) !== 'function') ?
            //   'instance of ' + sub + ' object' :
            //   'function ' + sub + '()';

            const testCondition: string = 'no. ' + (++count) + ' '
              + ((typeof (_alpha[sub]) !== 'function') ?
                'instance of ' + sub + ' object' :
                'function ' + sub + '()');

            it(testCondition, () => {
              (_alpha[sub]).should.not.equal(undefined);
            });

          });

        }

      });

    });

  });

});
