import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { _testSuites } from './_testSuites';
import { initial } from '../src/alpha';

should();

const suiteText: string = 'XXXX() & derivative functions';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  initial,
];

tests['initial'] = [
  'return undefined for no param.',
  'return undefined for non array.',
  'return undefined for null.',
  'return undefined for undefined.',
  'return undefined for empty array.',
  'return initial elements for number array',
  'return initial elements for string array',
  'return initial elements for boolean array',
  'return initial elements for symbol array',
  'return initial elements for object array',
  'return initial elements for error object array',
  'return initial elements for date object array',
  'return initial elements(array) for a nested array',
  'return empty array for single element array',
];

const e1: Error = new Error('TEST 1');
const e2: Error = new Error('TEST 2');
const e3: Error = new Error('TEST 3');

const d1: Date = new Date();
const d2: Date = new Date(d1.getTime() + 10000);
const d3: Date = new Date(d2.getTime() + 10000);

const s1: Symbol = Symbol();
const s2: Symbol = Symbol();
const s3: Symbol = Symbol();

inputs['initial'] = [
  [],
  [123],
  [null],
  [undefined],
  [[]],
  [[1, 2, 3, 4, 5]],
  [['quick', 'brown', 'fox', 'jumps', 'over']],
  [[true, false, true, false, true]],
  [[s1, s2, s3]],
  [[{ a: 1, b: true }, { a: 2, b: true }, { a: 3, b: true }]],
  [[e2, e1, e3]],
  [[d2, d1, d3]],
  [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
  [[1]],
];

answers['initial'] = [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  [1, 2, 3, 4],
  ['quick', 'brown', 'fox', 'jumps'],
  [true, false, true, false],
  [s1, s2],
  [{ a: 1, b: true }, { a: 2, b: true }],
  [e2, e1],
  [d2, d1],
  [[1, 2, 3], [4, 5, 6]],
  [],
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
