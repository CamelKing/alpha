import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { _testSuites } from './_testSuites';
import { chunk } from '../src/alpha';

should();

const suiteText: string = 'chunk an array removing all falsey elements';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  chunk,
];

tests['chunk'] = [
  'break array into chunks of [1] for a =1 split size.',
  'return array as is for a =0 split size.',
  'return array as is for a -ve split size.',
  'split arrays of 10 items by 2 split size',
  'split arrays of 10 items by 3 split size',
  'split arrays of 10 items by 4 split size',
  'split arrays of 10 items by 5 split size',
  'split arrays of 10 items by 6 split size',
  'return [] if pass in an empty array.',
  'return [] if pass in a null array.',
  'return [] if pass in an undefined array.',
];

inputs['chunk'] = [
  [[1, 2, 3]],
  [[1, 2, 3], 0],
  [[1, 2, 3], -1],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6],
  [[], 2],
  [null, 2],
  [undefined, 2],
];

answers['chunk'] = [
  [[1], [2], [3]],
  [1, 2, 3],
  [1, 2, 3],
  [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]],
  [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]],
  [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10]],
  [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]],
  [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10]],
  [],
  [],
  [],
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
