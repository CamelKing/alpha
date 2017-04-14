import * as _alpha from '../src/_alpha';

import { expect, should } from 'chai';

should();

const categories: string[] = [
  'async',
  'array',
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
];

testControl['arrayMods'] = [
  '_searchArray',
  '_diff',
  '_drop',
  '_intersectAll',
  '_intersectTwo',
  '_makeChecker',
  '_makeComparator',
  '_makeMatcher',
  '_makeIteratee',
  '_makeSorter',
  '_orderBy',
  '_pullAll',
  '_removeRedundants',
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
  '_makeIteratee',
];

testControl['timeInstances'] = [
];

describe('_alpha.ts should act as a barrel which...\n', () => {


  types.forEach((type: string) => {

    categories.forEach((cat: string) => {

      describe('category: ' + cat, () => {

        const testSubject: string = cat + type;

        if (testControl.hasOwnProperty(testSubject)) {

          testControl[testSubject].forEach((sub: string) => {

            const testCondition: string = (typeof (_alpha[sub]) !== 'function') ?
              'instance of ' + sub + ' object' :
              'function ' + sub + '()';

            it(testCondition, () => {
              (_alpha[sub]).should.not.equal(undefined);
            });

          });

        }

      });

    });

  });

});
