import { FnAny, _testSuites } from './_testSuites';
import { drop, dropRight } from '../src/alpha';
import { expect, should } from 'chai';

should();

const suiteText: string = 'Dropping elements from array.';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  drop,
  dropRight,
  // roundDown,
];

tests['drop'] = [
  'drop 1 item from the left by default.',
  'leave only the right most item of the array.',
  'return [] if drops more than the size of array.',
  'return [] if empty array.',
  'return [] if null array.',
  'return array as is if count is null.',
  'drop 1 item from the left by default if count is undefined.',
  'return array as is if count is zero.',
  'return array as is if count is -ve.',
];

tests['dropRight'] = [
  'drop 1 item from the right by default.',
  'leave only the left most item of the array.',
  'return [] if drops more than the size of array.',
  'return [] if empty array.',
  'return [] if null array.',
  'return array as is if count is null.',
  'drop 1 item from the right by default if count is undefined.',
  'return array as is if count is zero.',
  'return array as is if count is -ve.',
];

inputs['drop'] = [
  [[1, 2, 3, 4, 5]],
  [[1, 2, 3, 4, 5], 4],
  [[1, 2, 3, 4, 5], 10],
  [[], 1],
  [null, 1],
  [[1, 2, 3, 4, 5], null],
  [[1, 2, 3, 4, 5], undefined],
  [[1, 2, 3, 4, 5], 0],
  [[1, 2, 3, 4, 5], -1],
];

inputs['dropRight'] = [
  [[1, 2, 3, 4, 5]],
  [[1, 2, 3, 4, 5], 4],
  [[1, 2, 3, 4, 5], 10],
  [[], 1],
  [null, 1],
  [[1, 2, 3, 4, 5], null],
  [[1, 2, 3, 4, 5], undefined],
  [[1, 2, 3, 4, 5], 0],
  [[1, 2, 3, 4, 5], -1],
];

answers['drop'] = [
  [2, 3, 4, 5],
  [5],
  [],
  [],
  [],
  [1, 2, 3, 4, 5],
  [2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];

answers['dropRight'] = [
  [1, 2, 3, 4],
  [1],
  [],
  [],
  [],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
