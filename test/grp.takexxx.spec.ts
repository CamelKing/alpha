import { expect, should } from 'chai';
import { take, takeRight, takeRightWhile, takeWhile } from '../src/alpha';

import { FnAny } from '../src/constants';
import { FnMatcher } from '../src/constants';
import { _testSuites } from './__testSuites';

should();

const suiteText: string = 'Take/Slice an array.';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  take,
  takeRight,
  takeWhile,
  takeRightWhile,
];

const a1: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const fnSmall: FnMatcher = (value: number) => (value <= 5);
const fnBig: FnMatcher = (value: number) => (value === 0 || value >= 5);

const sym: Symbol = Symbol();
const a2: any = ['start', true, false, 1, 0, -1, null, undefined, NaN, sym, '', 'end'];

tests['take'] = [
  'return as is for null.',
  'return as is for undefined.',
  'return as is for non array.',
  'return [] for empty array.',
  'return [] for zero element.',
  'return [] for -ve element.',
  'return as is if > array length.',
  'default is to take 1 element.',
  'extract 5 elements without problem.',
];

tests['takeRight'] = [
  'return as is for null.',
  'return as is for undefined.',
  'return as is for non array.',
  'return [] for empty array.',
  'return [] for zero element.',
  'return [] for -ve element.',
  'return as is if > array length.',
  'default is to take 1 element.',
  'extract 5 elements without problem.',
];

tests['takeWhile'] = [
  'return as is for null.',
  'return as is for undefined.',
  'return as is for non array.',
  'return [] for empty array.',
  'extract using acid test function.',
  'remove falsey elements if no acid test function.',
];

tests['takeRightWhile'] = [
  'return as is for null.',
  'return as is for undefined.',
  'return as is for non array.',
  'return [] for empty array.',
  'extract using acid test function.',
  'remove falsey elements if no acid test function.',
];


inputs['take'] = [
  [null, 1],
  [undefined, 1],
  ['not an array', 1],
  [[], 1],
  [a1, 0],
  [a1, -1],
  [a1, a1.length + 1],
  [a1],
  [a1, 5],
];

inputs['takeRight'] = [
  [null, 1],
  [undefined, 1],
  ['not an array', 1],
  [[], 1],
  [a1, 0],
  [a1, -1],
  [a1, a1.length + 1],
  [a1],
  [a1, 5],
];

inputs['takeWhile'] = [
  [null, 1],
  [undefined, 1],
  ['not an array', 1],
  [[], 1],
  [a1, fnSmall],
  [a2],
];

inputs['takeRightWhile'] = [
  [null, 1],
  [undefined, 1],
  ['not an array', 1],
  [[], 1],
  [a1, fnBig],
  [a2],
];

answers['take'] = [
  null,
  undefined,
  'not an array',
  [],
  [],
  [],
  a1,
  [1],
  [1, 2, 3, 4, 5],
];

answers['takeRight'] = [
  null,
  undefined,
  'not an array',
  [],
  [],
  [],
  a1,
  [0],
  [6, 7, 8, 9, 0],
];

answers['takeWhile'] = [
  null,
  undefined,
  'not an array',
  [],
  [1, 2, 3, 4, 5],
  ['start', true],
];

answers['takeRightWhile'] = [
  null,
  undefined,
  'not an array',
  [],
  [5, 6, 7, 8, 9, 0],
  ['end'],
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
