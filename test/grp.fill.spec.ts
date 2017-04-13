import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { _testSuites } from './__testSuites';
import { fill } from '../src/alpha';

should();

const suiteText: string = 'Fill up an array';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  fill,
];

tests['fill'] = [
  'fill up entire array with desginated value by default.',
  'fill up array with desginated value start from pos 2.',
  'fill up array with desginated value start from pos 2 to 4.',
  'fill up a new empty array.',
  'fill up some elements of array.',
  'fill up elements on the right using -ve param.',
  'fill up last element on the right using -ve param.',
  'has no effect if start >= length of array',
  ' carry on till end of array if end > length of array.',
  'return [] for empty array.',
  'return null for null array.',
  'return undefined for undefined array.',
  'return as is for non array.',
];

const array: any[] = [1, 2, 3, 4, 5];

inputs['fill'] = [
  [array, 'a'],
  [array, 'a', 1],
  [array, 'a', 1, 4],
  [Array(3), 2],
  [array, '*', 1, 3],
  [array, '*', -3, -1],
  [array, '*', -1],
  [array, '*', 5],
  [array, '*', 0, 10],
  [[], 3, 0, 4],
  [null, 3, 0, 4],
  [undefined, 3, 0, 4],
  [8, 3, 0, 4],
];

answers['fill'] = [
  ['a', 'a', 'a', 'a', 'a'],
  [1, 'a', 'a', 'a', 'a'],
  [1, 'a', 'a', 'a', 5],
  [2, 2, 2],
  [1, '*', '*', 4, 5],
  [1, 2, '*', '*', 5],
  [1, 2, 3, 4, '*'],
  [1, 2, 3, 4, 5],
  ['*', '*', '*', '*', '*'],
  [],
  null,
  undefined,
  8,
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
